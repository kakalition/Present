/* eslint-disable react/jsx-filename-extension */
import { SyntheticEvent } from 'react';
import CommonButtonComponent from '../../../common-component/CommonButtonComponent';

function FormDialogHeaderBuilder(text: string) {
  return (
    <h1
      className="mt-8 ml-8 text-4xl font-semibold text-black lg:text-5xl
      font-ibm-plex-sans"
    >
      {text}
    </h1>
  );
}

function FormDialogBodyBuilder(text: string, hrefText: string, href: string) {
  return (
    <h2
      className="ml-8 text-lg font-normal text-black md:text-xl
      lg:text-2xl font-ibm-plex-sans"
    >
      {`${text} `}
      <span className="text-sky-500 underline underline-offset-2 font-ibm-plex-sans">
        <a href={href}>{hrefText}</a>
      </span>
    </h2>
  );
}

function FormDialogButtonBuilder(
  negativeText: string,
  negativeCallback: () => void,
  positiveText: string,
  positiveCallback: (e: SyntheticEvent) => void,
  positiveIcon: React.ReactNode,
) {
  return (
    <div className="flex w-full h-20">
      <div className="w-full">
        <CommonButtonComponent
          onClickCallback={negativeCallback}
          fillSpace
          buttonType="ghost"
          padding="px-8"
          text={negativeText}
        />
      </div>
      <div className="w-full">
        <CommonButtonComponent
          onClickCallback={positiveCallback}
          fillSpace
          buttonType="primary"
          padding="px-8"
          text={positiveText}
          icon={positiveIcon}
        />
      </div>
    </div>
  );
}

export {
  FormDialogHeaderBuilder,
  FormDialogBodyBuilder,
  FormDialogButtonBuilder,
};
