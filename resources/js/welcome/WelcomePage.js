import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";

export default function WelcomePage(props) {
    return (<>
        <div className="h-screen w-screen bg-slate-900"></div>
    </>);
}

if (document.getElementById("welcome-root")) {
    createRoot(document.getElementById("welcome-root"))
        .render(<StrictMode><WelcomePage/></StrictMode>)
}