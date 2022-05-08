import { CloseButton } from "../CloseButton";

import bugImage from "../../assets/Bug.svg";
import ideaImage from "../../assets/Idea.svg";
import duvImage from "../../assets/Thought.svg";
import { useState } from "react";
import { FeedbackOpition } from "./Steps/FeedbackOpition";
import { FeedbackContent } from "./Steps/FeedbackContent";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      link: bugImage,
      alt: "Imagem de um inseto",
    },
    placeh: "Conte-nos o que está acontecendo...",
  },
  IDEA: {
    title: "Sugestão",
    image: {
      link: ideaImage,
      alt: "lâmpada",
    },
    placeh: "Nos diga a sua sugestão ou ideia...",
  },
  OUTRO: {
    title: "Outro",
    image: {
      link: duvImage,
      alt: "caixinha de pensamento",
    },
    placeh: "Diga o que você está pensando...",
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function FormWidget() {
  const [feedbackOpition, setFeedbackOpition] = useState<FeedbackType | null>(
    null
  );

  const backToFeedbackOpition = () => {
    setFeedbackOpition(null);
  };

  return (
    <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-3rem)] md:w-auto">
      {!feedbackOpition ? (
        <FeedbackOpition setFeedbackOpition={setFeedbackOpition} />
      ) : (
        <FeedbackContent
          backToFeedbackOpition={backToFeedbackOpition}
          feedbackOpition={feedbackOpition}
        />
      )}

      <footer className="text-xs">
        Feito com ♥ por{" "}
        <a
          className="text-lime-400 hover:underline"
          target={"_blank"}
          href="https://www.linkedin.com/in/magalhesartur/"
        >
          Artur
        </a>
      </footer>
    </div>
  );
}
