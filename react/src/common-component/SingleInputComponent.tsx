import React from 'react';
import * as Animation from '../utils/animations/CommonAnimation';

type Props = {
  id: string,
  inlineComponent?: React.ReactElement,
  inputType: string,
  isError?: boolean,
  label: string,
  placeholder: string,
};

export default function SingleInputComponent({
  id,
  inlineComponent = <div />,
  inputType,
  isError = false,
  label,
  placeholder,
}: Props) {
  let className = 'px-4 w-full h-12 font-ibm-plex-sans text-base bg-slate-100 border-2'
    + ' focus:border-primary-button focus:outline-none md:h-14';

  if (isError) {
    className += ' border-red-500';
    Animation.shakeElement(id);
  } else {
    className += ' border-x-transparent border-t-transparent border-b-slate-400';
  }

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <label
          htmlFor={id}
          className="font-ibm-plex-sans text-base text-black
          md:text-lg"
        >
          {label}
        </label>

        {inlineComponent}
      </div>

      <div className="h-2" />

      <input
        className={className}
        type={inputType}
        id={id}
        name={id}
        placeholder={placeholder}
        required
      />
      <br />
    </>
  );
}
