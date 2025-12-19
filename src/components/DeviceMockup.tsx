import Image from "next/image";

type DeviceMockupProps = {
  type: "desktop" | "phone";
  src: string;
  alt?: string;
};

export default function DeviceMockup({ src, alt, type }: DeviceMockupProps) {
  if (type === "phone") {
    return (
      <div className="relative mx-auto w-[220px]">
        {/* Phone frame */}
        <div className="relative rounded-[3rem] border-[14px] border-gray-800 bg-gray-800 shadow-xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-2xl" />
          {/* Screen */}
          <div className="relative rounded-[2.2rem] overflow-hidden bg-white aspect-[9/19.5]">
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

  // Desktop
  return (
    <div className="relative">
      {/* Browser frame */}
      <div className="rounded-xl bg-[#1e1e1e] shadow-2xl overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-[#3d3d3d]">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27ca40]" />
          </div>
          <div className="flex-1 mx-4">
              <div className="bg-[#1e1e1e] rounded-md px-3 py-1 text-xs text-gray-500 max-w-md">
              </div>
          </div>
        </div>
        {/* Screen */}
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