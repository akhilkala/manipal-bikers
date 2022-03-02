import React, { ReactElement } from "react";
import { InputState } from "../hooks/useInputState";

interface Props {
  state: InputState;
  name: string;
  className?: string;
  long?: boolean;
}

export default function Input({
  state,
  name,
  className,
  long,
}: Props): ReactElement {
  return (
    <div className={`${className} flex flex-col`}>
      <label
        className="font-roboto font-medium text-xl"
        htmlFor={name.toLowerCase()}
      >
        {name.toUpperCase()}
      </label>
      {long && (
        <textarea
          className="h-28 resize-none bg-input w-3/4 focus:outline-0 mt-1 text-xl font-roboto p-1.5 rounded my-8"
          id={name.toLowerCase()}
          value={state.value}
          onChange={state.handleChange}
        />
      )}
      {!long && (
        <input
          className="bg-input w-3/4 focus:outline-0 mt-1 text-xl font-roboto p-1.5 rounded my-8"
          id={name.toLowerCase()}
          type="text"
          value={state.value}
          onChange={state.handleChange}
        />
      )}
    </div>
  );
}
