import { ClassComposer } from "../utils/ClassComposer";

/**
 * @param {{buttonType: "primary" | "secondary" | "tertiary" | "ghost", textSize: TailwindClass_, padding: TailwindClass_, text: string, onClickCallback: () => void, icon: svg, fillSpace: boolean}} props
 */
export function CommonButtonComponent(props) {
    let className = "h-full text-left";

    if (props.fillSpace) {
        className += " w-full"
    }

    const textSize = props.textSize ?? "lg:text-xl text-lg";
    const padding = props.padding ?? "lg:p-3 lg:pr-16 md:pr-12 p-2 pr-8";

    switch (props.buttonType) {
        case "primary": {
            className = ClassComposer(
                className,
                textSize,
                padding,
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
            <div className="flex items-center justify-between">
                {props.text} {props.icon}
            </div>
        </button>
    );
}
