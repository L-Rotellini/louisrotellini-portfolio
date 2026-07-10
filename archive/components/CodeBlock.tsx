"use client";

import { Highlight, themes, type Language } from "prism-react-renderer";

type CodeLanguage = Language | "text";

type CodeBlockProps = {
  title: string;
  language: CodeLanguage;
  code: string;
};

export default function CodeBlock({ title, language, code }: CodeBlockProps) {
  const prismLanguage: Language = language === "text" ? "markup" : language;

  return (
    <div className="rounded-[12px] overflow-hidden border border-[--rule] bg-[#0E0E0C] text-[#EDEDE6]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] font-mono text-[11px] text-white/60 tracking-[0.06em]">
        <span>{title}</span>
        <span className="uppercase">{language}</span>
      </div>
      <Highlight theme={themes.vsDark} code={code.trim()} language={prismLanguage}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} px-5 py-5 overflow-x-auto font-mono text-[12.5px] leading-[1.6]`}
            style={{ ...style, background: "transparent", margin: 0 }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                <span className="table-cell pr-4 text-white/30 text-right select-none w-8">
                  {i + 1}
                </span>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
