import { Check } from "phosphor-react";
import { CloseButton } from "../../CloseButton";

export interface feedbackTypeProp {
  backToFeedbackOpition: () => void;
}

export function FeedbackSuccess({ backToFeedbackOpition }: feedbackTypeProp) {
  return (
    <div className="min-h-[200px]">
      <header className=" items-center justify-center w-80 mb-4 flex relative">
        <CloseButton />
      </header>
      <div className="text-xl leading-6 flex flex-col items-center gap-2 p-6">
        <Check weight="bold" className="bg-green-600 w-8 h-8" />
        <h1> Agradecemos o FeedBack! </h1>
        <button
          type="button"
          onClick={backToFeedbackOpition}
          className="p-4 bg-zinc-700 text-[15px] border-transparent border-2 hover:border-lime-500 transition-all ease-linear rounded-md"
        >
          Quero Enviar outro formulário
        </button>
      </div>
    </div>
  );
}
