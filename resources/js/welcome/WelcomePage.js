import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CommonButton } from "../common-component/CommonButton";

export default function WelcomePage(props) {
    const hspace = "h-8";

    return (
        <div className="grid h-screen w-screen bg-web-bg px-[3rem] pt-[3rem] lg:grid-cols-12">
            <p className="font-poppins text-3xl font-semibold text-black">
                Present
            </p>
            <div className="col-end-13 justify-self-end ">
                <CommonButton buttonType="tertiary" text="Login" />
            </div>

            <div className="col-start-1 col-end-13">
                <h1 className="font-poppins text-7xl font-semibold leading-tight">
                    Bring <span className="text-sky-400">calmness</span>
                    <br />
                    to your <span className="text-orange-300">mind</span>.
                </h1>

                <div className={hspace} />

                <h2 className="col-start-1 col-end-9 font-poppins text-xl font-light leading-tight">
                    Habitual meditation can help reduce
                    <br />
                    anxiety and improve stress reactivity.
                </h2>

                <div className={hspace} />

                <CommonButton
                    buttonType="primary"
                    text="Get started"
                    padding="p-6"
                    textSize="text-3xl"
                />
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
