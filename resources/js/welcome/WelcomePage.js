import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CommonButton } from "../common-component/CommonButton";

export default function WelcomePage(props) {
    return (
        <div className="h-screen w-screen bg-web-bg px-[3rem] pt-[3rem] grid lg:grid-cols-12">
            <p className="font-poppins text-black font-semibold text-3xl">Present</p>
            <div className="col-end-13"><CommonButton buttonType="tertiary" text="Login"/></div>
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
