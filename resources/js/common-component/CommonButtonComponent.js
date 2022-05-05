import { ClassComposer } from "../utils/ClassComposer";

/**
 * @param {{textSize: TailwindClass_, padding: TailwindClass_, rightPadding: TailwindClass_, onClickCallback: () => void, text: string}} props
 */
export function CommonButtonComponent(props) {
    let className = "";
    const textSize = props.textSize ?? "lg:text-lg md:text-base text-sm";
    const padding = props.padding ?? "lg:p-3 p-2";
    const rightPadding = props.rightPadding ?? "lg:pr-16 md:pr-12 pr-8";

    switch (props.buttonType) {
        case "primary": {
            className = ClassComposer(
                className,
                textSize,
                padding,
                rightPadding,
                "whitespace-nowrap",
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
                rightPadding,
                "whitespace-nowrap",
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
                textSize,
                padding,
                rightPadding,
                "whitespace-nowrap",
                "border-2 border-primary-button",
                "text-primary-button",
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
                "whitespace-nowrap",
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
