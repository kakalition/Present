import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CommonButton } from "../common-component/CommonButton";

export default function WelcomePage(props) {
    return (
        <>
            <div className="flex h-screen w-screen items-center justify-center bg-slate-900">
                <CommonButton buttonType="primary" text="Test"/>
            </div>
        </>
    );
}

if (document.getElementById("welcome-root")) {
    createRoot(document.getElementById("welcome-root")).render(
        <StrictMode>
            <WelcomePage />
        </StrictMode>
    );
}
