/* eslint-disable react/jsx-filename-extension */
import CommonButtonComponent from '../../../common-component/CommonButtonComponent';

/**
 * @param {string} text
 */
function FormDialogHeaderBuilder(text) {
  return (
    <h1
      className="mt-8 ml-8 text-4xl font-semibold text-black lg:text-5xl
      font-ibm-plex-sans"
    >
      {text}
    </h1>
  );
}

/**
 * @param {string} text
 * @param {string} hrefText
 * @param {string} href
 */
function FormDialogBodyBuilder(text, hrefText, href) {
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

/**
 *
 * @param {string} negativeText
 * @param {() => void} negativeCallback
 * @param {string} positiveText
 * @param {() => void} positiveCallback
 * @param {svg} positiveIcon
 * @returns
 */
function FormDialogButtonBuilder(
  negativeText,
  negativeCallback,
  positiveText,
  positiveCallback,
  positiveIcon,
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
