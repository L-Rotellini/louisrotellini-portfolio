export default function MentionsLegales() {
  return (
    <section className="space-y-6 py-20 max-w mx-auto">
      <h1 className="text-3xl font-bold tracking-tight">Mentions légales</h1>

      <p>
        Le présent site <strong>louisrotellini.fr</strong> est édité par Louis Rotellini, à titre personnel.
      </p>

      <ul className="space-y-2">
        <li><strong>Éditeur :</strong> Louis Rotellini</li>
        <li><strong>Contact :</strong> <a href="mailto:louis.rotellini@gmail.com" className="underline">louis.rotellini@gmail.com</a></li>
        <li><strong>Localisation :</strong> Lille / Paris, France</li>
        <li><strong>Hébergeur :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
      </ul>

      <p>
        Ce site n’utilise pas de cookies et ne collecte aucune donnée personnelle.
      </p>

      <p className="text-sm text-[--muted]">
        © {new Date().getFullYear()} louisrotellini.fr — Tous droits réservés.
      </p>
    </section>
  );
}
