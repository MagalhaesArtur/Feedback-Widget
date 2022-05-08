import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { FormWidget } from "./WidgetForm";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-7 md:right-7 flex flex-col items-end">
      <Popover.Panel>
        <FormWidget />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group ">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
