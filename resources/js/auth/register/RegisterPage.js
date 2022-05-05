import { elementBinder } from "../../utils/ElementBinder";

export default function RegisterPage(props) {
    const bgClass = `bg-[${props.publicpath + "/bg.png"}]`;

    return (
        <div
            className={`flex min-h-screen w-screen items-center justify-center bg-cover bg-center`}
            style={{ backgroundImage: `url(${props.publicpath + "/bg.png"})` }}
        >
            <div className="w-[50%] bg-white">
                <h1 className="ml-8 mt-8 font-ibm-plex-sans text-5xl font-semibold text-black">
                    Log in
                </h1>

                <div className="h-4" />

                <h2 className="ml-8 font-ibm-plex-sans text-xl font-normal text-black">
                    Don't have an account?{" "}
                    <span className="font-ibm-plex-sans text-sky-500 underline underline-offset-2">
                        Create new account
                    </span>
                </h2>

                <div className="h-12" />
                <div className="border-t-2 border-t-slate-300 mx-8" />
                <div className="h-12" />
            </div>
        </div>
    );
}

elementBinder("register-view", <RegisterPage />);
