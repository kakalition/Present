import { React, cloneElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainContent } from "./components/MainContent";
import { WelcomeHeader } from "./components/WelcomeHeader";

export default function WelcomePage(props) {
    return (
        <div className="grid h-screen w-screen overflow-x-hidden bg-web-bg px-[3rem] pt-[3rem] lg:grid-cols-12 lg:grid-rows-6 lg:gap-4">
            <div className="col-start-1 col-end-13">
                <WelcomeHeader />
            </div>

            <div className="col-start-1 col-end-7 row-start-2 row-end-6 self-center">
                <MainContent />
            </div>
            <div className="relative -right-72 col-start-7 col-end-13 row-start-2 row-end-6 self-center">
                <img
                    className="scale-125"
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
