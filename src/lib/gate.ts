/* Contrat partagé entre la route /api/gate et le composant LiveGate. */

export const RULE_IDS = ["evals", "human_loop", "cost", "failure"] as const;
export type RuleId = (typeof RULE_IDS)[number];

export const GATE_MAX = 6;
export const INPUT_MAX = 600;

export type GateRule = {
  id: RuleId;
  ok: boolean;
  /** Justification tirée du texte évalué. Vide en mode repli. */
  note: string;
};

export type GateResult = {
  verdict: "PASS" | "FAIL";
  score: number;
  rules: GateRule[];
  /** "claude" = évalué par le modèle, "rules" = repli local. */
  source: "claude" | "rules";
};

/* Moteur de règles local : mots-clés FR + EN. Sert de repli quand la clé API
   est absente, que le quota est atteint ou que l'appel échoue — la démo publique
   ne doit jamais renvoyer une erreur. */
const CHECKS: Record<RuleId, RegExp> = {
  evals: /eval|éval|test|golden|référen|scor|benchmark/i,
  human_loop: /human|humain|review|relectur|valid|révis|contrôl|approv|sign-?off|verif/i,
  cost: /cost|coût|cout|budget|cap|plafon|rate limit|quota|bounded|born|limite|per doc|par doc/i,
  failure: /retr|réessai|ressai|fallback|repli|timeout|error|erreur|graceful|robust|échec|echec|panne/i,
};

export function ruleEngineGate(text: string): GateResult {
  const rules: GateRule[] = RULE_IDS.map((id) => ({
    id,
    ok: CHECKS[id].test(text),
    note: "",
  }));
  return { ...scoreOf(rules), rules, source: "rules" };
}

/* Le verdict et le score sont dérivés des règles côté serveur : le modèle juge
   chaque règle, il ne calcule jamais la note lui-même. */
export function scoreOf(rules: GateRule[]): Pick<GateResult, "verdict" | "score"> {
  const ok = rules.filter((r) => r.ok).length;
  return {
    verdict: ok === RULE_IDS.length ? "PASS" : "FAIL",
    score: Math.round((ok / RULE_IDS.length) * 100),
  };
}
