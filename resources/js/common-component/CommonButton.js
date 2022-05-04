import { ClassComposer } from "../utils/ClassComposer";

/**
 *
 * @param {string} props.buttonType
 * @param {string} props.text
 * @param {callback} props.onClickCallback
 * @returns
 */
export const CommonButton = (props) => {
    let className = "";
    let textSize = props.textSize ?? "text-lg";
    let padding = props.padding ?? "p-3";

    switch (props.buttonType) {
        case "primary": {
            className = ClassComposer(
                className,
                textSize,
                padding,
                "pr-16",
                "bg-primary-button",
                "text-white",
                "font-semibold",
                "font-ibm-plex-sans",
                "hover:brightness-[90%]",
                "transition-all",
                "duration-100"
            );
            break;
        }
        case "secondary": {
            className = ClassComposer(
                className,
                textSize,
                "pr-16",
                "bg-secondary-button",
                "text-white",
                "font-ibm-plex-sans",
                "hover:brightness-[90%]",
                "transition-all",
                "duration-100"
            );
            break;
        }
        case "tertiary": {
            className = ClassComposer(
                className,
                padding,
                "pr-16",
                "border-2 border-primary-button",
                "text-primary-button",
                "text-lg",
                "font-ibm-plex-sans",
                "hover:brightness-[90%]",
                "hover:text-white",
                "hover:bg-primary-button",
                "transition-all",
                "duration-100"
            );
            break;
        }
        case "ghost": {
            className = ClassComposer(
                className,
                textSize,
                padding,
                "px-5",
                "py-3",
                "text-primary-button",
                "font-ibm-plex-sans",
                "transition-all",
                "duration-100",
                "hover:bg-slate-200"
            );
            break;
        }
    }

    console.log(className);

    return (
        <button
            className={className}
            type="button"
            onClick={props.onClickCallback}
        >
            {props.text}
        </button>
    );
};
