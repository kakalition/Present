import { React, cloneElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainContent } from "./components/MainContent";
import { WelcomeHeader } from "./components/WelcomeHeader";

export default function WelcomePage(props) {
    return (
        <div
            className="grid h-screen w-screen grid-cols-4 grid-rows-6 gap-2 overflow-hidden bg-web-bg px-[2rem] pt-[1rem]
            md:grid-cols-8 md:gap-3 md:px-[4rem] md:pt-[2rem]
            lg:grid-cols-12 lg:gap-4 lg:px-[6rem] lg:pt-[3rem]"
        >
            <div className="col-start-1 col-end-13">
                <WelcomeHeader />
            </div>

            <div className="col-start-1 col-end-7 row-start-2 row-end-6 self-center">
                <MainContent />
            </div>
            <div className="relative -right-72 bottom-2 col-start-7 col-end-13 row-start-2 row-end-6 self-center">
                <img
                    className="scale-[1.3]"
                    src={props.publicpath + "/illustrations/meditation.svg"}
                    alt="jkdsnfkjdfs"
                />
            </div>
        </div>
    );
}

if (document.getElementById("welcome-root")) {
    const element = document.getElementById("welcome-root");
    const props = Object.assign({}, element.dataset);
    const root = cloneElement(<WelcomePage />, props);
    console.log(props.publicpath);

    createRoot(element).render(root);
}
