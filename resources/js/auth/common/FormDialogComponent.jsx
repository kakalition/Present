/**
 * @param {{header:JSX.Element, body:JSX.Element, formComponent:JSX.Element, buttonComponent:JSX.Element}} props
 */
export default function FormDialogComponent(props) {
    const { header, body, formComponent, buttonComponent } = props;

    return (
        <div className="w-[50%] bg-white">
            {header}
            <div className="h-4" />
            {body}

            <div className="h-8" />
            <div className="mx-8 border-t-2 border-t-slate-300" />
            <div className="h-8" />

            <div className="mx-8">{formComponent}</div>

            <div className="h-12" />
            {buttonComponent}
        </div>
    );
}
