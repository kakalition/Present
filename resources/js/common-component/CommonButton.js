import { ClassComposer } from "../utils/ClassComposer";

/**
 *
 * @param {string} props.buttonType
 * @returns
 */
export const CommonButton = (props) => {
    let className = "p-3";

    switch (props.buttonType) {
        case "primary": {
            className = ClassComposer(
                className,
                "pr-12",
                "bg-primary-button",
                "text-white",
                "hover:brightness-[90%]"
            );
            break;
        }
        case "secondary": {
            className = ClassComposer(
                className,
                "pr-12",
                "bg-secondary-button",
                "text-white",
                "hover:brightness-[90%]"
            );
            break;
        }
        case "tertiary": {
            className = ClassComposer(
                className,
                "pr-12",
                "border-1 border-primary",
                "text-primary-button",
                "hover:brightness-[90%]"
            );
            break;
        }
        case "ghost": {
            className = ClassComposer(className, "text-primary");
            break;
        }
    }

    console.log(className)

    return <button className={className} type="button">
        {props.text}
    </button>;
};
