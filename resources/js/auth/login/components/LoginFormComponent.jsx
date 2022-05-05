import SingleInputComponent from "../../common/SingleInputComponent";
import RememberMeComponent from "./RememberMeComponent";

export default function LoginFormComponent() {
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
            />
            <div className="h-4" />
            <RememberMeComponent />
        </form>
    );
}
