import SingleInputComponent from "../../common/SingleInputComponent";
import RememberMeComponent from "./RememberMeComponent";

export default function LoginFormComponent() {
    const inlineComponent = (
        <span
            className="font-ibm-plex-sans text-base text-sky-500 underline underline-offset-2
            md:text-lg"
        >
            <a href={""}>Forgot password?</a>
        </span>
    );
    return (
        <form>
            <SingleInputComponent
                type="text"
                id="test"
                label="Email address"
                placeholder="yourname@gmail.com"
            />
            <div className="h-4" />
            <SingleInputComponent
                type="text"
                id="test1"
                label="Password"
                placeholder="••••••••"
                inlineComponent={inlineComponent}
            />
            <div className="h-4" />
            <RememberMeComponent />
        </form>
    );
}
