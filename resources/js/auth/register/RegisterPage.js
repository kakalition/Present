import { elementBinder } from "../../utils/ElementBinder";

export function SingleForm(type, id, label, placeholder, inlineAction) {
    return (
        <>
            <div className="flex w-full items-center justify-between">
                <label
                    htmlFor={id}
                    className="font-ibm-plex-sans text-xl text-black"
                >
                    {label}
                </label>

                {inlineAction}
            </div>

            <div className="h-2" />

            <input
                className="h-14 w-full border-2 border-x-transparent border-t-transparent border-b-slate-400 bg-slate-100 px-4 font-ibm-plex-sans  
                focus:border-2 focus:border-primary-button focus:outline-none"
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                required
            />
            <br />
        </>
    );
}

export default function RegisterPage(props) {
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

                <div className="h-8" />
                <div className="mx-8 border-t-2 border-t-slate-300" />
                <div className="h-8" />

                <div className="my-2 w-full px-8">
                    {SingleForm(
                        "text",
                        "test",
                        "Email address",
                        "yourname@provider.com"
                    )}
                </div>

                <div className="h-4" />

                <div className="my-2 w-full px-8">
                    {SingleForm("password", "test1", "Password", "••••••••")}
                </div>
            </div>
        </div>
    );
}

elementBinder("register-view", <RegisterPage />);
