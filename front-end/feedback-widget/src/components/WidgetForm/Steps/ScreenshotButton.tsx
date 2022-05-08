import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../../Loading";
import { backgroundSize } from "html2canvas/dist/types/css/property-descriptors/background-size";

interface setScreenshotProps {
  screenshot: string | null;
  setScreenshot: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  setScreenshot,
}: setScreenshotProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleScreenShootButton = async () => {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64Image = canvas.toDataURL("image/png");

    setScreenshot(base64Image);

    setIsTakingScreenshot(false);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: `right bottom`,
          backgroundSize: 180,
        }}
        onClick={() => {
          setScreenshot(null);
        }}
        className="mr-3 p-1 w-10 h-10 flex justify-end items-end rounded-md border-green-500 text-zinc-400 hover:text-zinc-100 transition-all"
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      onClick={handleScreenShootButton}
      type="button"
      className="p-2 focus:outline-none hover:border-brand-500 border-2 border-transparent    transition-all focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 bg-zinc-600 rounded h-[40px] w-[40px] mr-2 flex items-center content-center"
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera weight="bold" className="w-6 h-6" />
      )}
    </button>
  );
}
