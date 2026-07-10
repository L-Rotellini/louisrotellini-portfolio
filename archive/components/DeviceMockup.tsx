import Image from "next/image";

type DeviceMockupProps = {
  src: string;
  alt?: string;
  type: "desktop" | "phone";
};

export default function DeviceMockup({
  src,
  alt = "",
  type,
}: DeviceMockupProps) {
  if (type === "phone") {
    return (
      <div className="relative mx-auto w-[220px]">
        <div className="relative rounded-[3rem] border-[14px] border-[--ink] bg-[--ink] shadow-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[--ink] rounded-b-2xl" />
          <div className="relative rounded-[2.2rem] overflow-hidden bg-[--paper] aspect-[9/19.5]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 900px, 100vw"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="rounded-[12px] bg-[--paper] border border-[--rule] shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 h-[38px] bg-[--paper-2] border-b border-[--rule]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[--rule-strong]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[--rule-strong]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[--rule-strong]" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-[--paper] border border-[--rule] rounded-md px-3 py-1 text-[11px] font-mono text-[--muted] max-w-md mx-auto" />
          </div>
        </div>

        <div className="relative aspect-video">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
