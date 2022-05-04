import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CommonButton } from "../common-component/CommonButton";

export default function WelcomePage(props) {
    return (
        <div className="grid h-screen w-screen bg-web-bg px-[3rem] pt-[3rem] lg:grid-cols-12">
            <p className="font-poppins text-3xl font-semibold text-black">
                Present
            </p>
            <div className="col-end-13 justify-self-end">
                <CommonButton buttonType="tertiary" text="Login" />
            </div>
        </div>
    );
}

if (document.getElementById("welcome-root")) {
    createRoot(document.getElementById("welcome-root")).render(
        <StrictMode>
            <WelcomePage />
        </StrictMode>
    );
}
