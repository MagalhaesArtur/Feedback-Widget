import {
  ArrowArcLeft,
  Camera,
  Check,
  Checks,
  CheckSquare,
  FlagCheckered,
} from "phosphor-react";
import { useState } from "react";
import { feedbackTypes, FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";
import { FeedbackSuccess } from "./FeedbackSuccess";
import { ScreenshotButton } from "./ScreenshotButton";
import { api } from "../../../Axios/submitFeedback";
import { Loading } from "../../Loading";

export interface feedbackTypeProp {
  feedbackOpition: FeedbackType;
  backToFeedbackOpition: () => void;
}

export function FeedbackContent({
  feedbackOpition,
  backToFeedbackOpition,
}: feedbackTypeProp) {
  const feedbackOpitionInfo = feedbackTypes[feedbackOpition];

  const [screenshot, setScreenshot] = useState<string | null>(null);
  let [comment, setComent] = useState("");
  let [isFormSubmited, setIsFormSubmited] = useState(false);
  let [isSubmitingForm, setIsSubmitingForm] = useState(false);

  const handleFormSubmit = async (e: any) => {
    setIsSubmitingForm(true);
    e.preventDefault();
    await api.post("/feedback", {
      screenshot: screenshot,
      type: feedbackOpition,
      comment: comment,
    });

    setComent("");
    setIsFormSubmited(true);
    setIsSubmitingForm(false);
  };

  if (isFormSubmited) {
    return <FeedbackSuccess backToFeedbackOpition={backToFeedbackOpition} />;
  }

  return (
    <>
      <header className=" items-center justify-center w-[250px] mb-4 flex relative md:w-80">
        <button
          type="button"
          className=" flex items-center hover:text-green-500 transition-all"
          onClick={backToFeedbackOpition}
        >
          <ArrowArcLeft weight="bold" className="w-4 h-4 left-1 absolute" />
        </button>
        <div className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackOpitionInfo.image.link}
            alt={feedbackOpitionInfo.image.alt}
            className="w-6 h-6"
          />
          <p className="text-xl leading-6">{feedbackOpitionInfo.title}</p>
        </div>
        <CloseButton />
      </header>
      <form onSubmit={handleFormSubmit} className="my-4 w-full">
        <textarea
          className="min-w-[200px] max-h-[112px] min-h-[112px]  text-sm rounded-md w-full text-zinc-200 bg-zinc-800 focus:outline-none hover:border-cyan-600 border-slate-400 transition-all  scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          onChange={(e) => {
            setComent(e.target.value);
          }}
          placeholder={feedbackTypes[feedbackOpition].placeh}
        />
        <footer className="flex items-center justify-between w-full mb-3">
          <ScreenshotButton
            screenshot={screenshot}
            setScreenshot={setScreenshot}
          />

          {comment ? (
            isSubmitingForm ? (
              <button
                type="submit"
                disabled
                className="p-2 bg-brand-500 rounded w-[280px] flex justify-center items-center  border-transparent border-[2px] focus:outline-none hover:bg-zinc-600 hover:border-brand-500  transition-all focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
              >
                <Loading />
              </button>
            ) : (
              <button
                type="submit"
                className="p-2 bg-brand-500 rounded w-[280px]   border-transparent border-[2px] focus:outline-none hover:bg-zinc-600 hover:border-brand-500  transition-all focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
              >
                Enviar Feedback
              </button>
            )
          ) : (
            <button
              type="submit"
              disabled
              className="p-2 bg-slate-600 rounded w-[280px] max-h-[50px] border-transparent border-[2px] focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 flex justify-center items-center"
            >
              Preencha o formulário antes de enviá-lo.
            </button>
          )}
        </footer>
      </form>
    </>
  );
}
