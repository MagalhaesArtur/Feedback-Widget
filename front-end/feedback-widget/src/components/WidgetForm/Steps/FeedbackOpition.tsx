import { feedbackTypes } from "..";
import { FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackOpitionProps {
  setFeedbackOpition: (type: FeedbackType) => void;
}

export function FeedbackOpition({ setFeedbackOpition }: FeedbackOpitionProps) {
  return (
    <>
      <header className="relative flex items-center justify-center w-full mb-4">
        <p className="text-xl leading-6 ">Deixe seu Feedback</p>
        <CloseButton />
      </header>
      <div className="flex gap-2 my-3 ">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => {
                setFeedbackOpition(key as FeedbackType);
              }}
              className="flex flex-col  bg-zinc-700 rounded-xl p-4 justify-center items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500 transition-all focus:outline-none"
              type="button"
            >
              <img src={value.image.link} alt={value.image.alt} />
              <p>{value.title}</p>
            </button>
          );
        })}
      </div>
    </>
  );
}
