import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button
      className={
        " text-zinc-400 hover:text-red-600 transition-all absolute right-0"
      }
      title="Fechar Formulário de Feedback"
    >
      <X weight="bold" className="w-4 h-4 inline"></X>
    </Popover.Button>
  );
}
