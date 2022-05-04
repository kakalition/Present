import { CommonButton } from "../../common-component/CommonButton";

export function WelcomeHeader() {
    return (
        <div className="flex w-full flex-row items-center justify-between">
            <p className="font-poppins text-3xl font-semibold text-black">
                Present
            </p>
            <div className="col-end-13 justify-self-end ">
                <CommonButton buttonType="tertiary" text="Login" />
            </div>
        </div>
    );
}
