import { CommonButton } from "../../common-component/CommonButton";

export function MainContent(props) {
    const hspace = "h-4 md:h-6 lg:h-8";

    return (
        <div className="w-full">
            <h1 className="font-poppins text-[calc(1.5rem+2vw)] font-semibold leading-tight">
                Bring <span className="text-sky-400">calmness</span>
                <br />
                to your <span className="text-orange-300">mind</span>.
            </h1>

            <div className={hspace} />

            <h2 className="col-start-1 col-end-9 font-poppins text-[calc(0.4rem+1.5vw)] font-light leading-tight">
                Habitual meditation can help reduce
                <br />
                anxiety and improve stress reactivity.
            </h2>

            <div className={hspace} />

            <CommonButton
                onClickCallback={props.buttonCallback}
                buttonType="primary"
                text="Get started"
                padding="p-3 md:p-4 lg:p-6"
                rightPadding="pr-12 md:pr-20 lg:pr-24"
                textSize="text-xl md:text-2xl lg:text-3xl"
            />
        </div>
    );
}
