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
    <div className="rounded-xl overflow-hidden bg-[#1e1e1e]">
      {/* Header style IDE */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-[#3d3d3d]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27ca40]" />
          </div>
          {title && <span className="ml-3 text-sm text-gray-400">{title}</span>}
        </div>
        <span className="text-xs text-gray-500 uppercase">{language}</span>
      </div>

      {/* Code */}
      <Highlight theme={themes.vsDark} code={code.trim()} language={prismLanguage}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-4 overflow-x-auto text-sm leading-relaxed`}
            style={{ ...style, background: "transparent", margin: 0 }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                <span className="table-cell pr-4 text-gray-600 text-right select-none w-8">
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
