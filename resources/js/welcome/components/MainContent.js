import { CommonButton } from "../../common-component/CommonButton";

export function MainContent(props) {
    const hspace = "h-8";

    return (
        <div className="w-full">
            <h1 className="font-poppins text-7xl font-semibold leading-tight">
                Bring <span className="text-sky-400">calmness</span>
                <br />
                to your <span className="text-orange-300">mind</span>.
            </h1>

            <div className={hspace} />

            <h2 className="col-start-1 col-end-9 font-poppins text-2xl font-light leading-tight">
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
    );
}
