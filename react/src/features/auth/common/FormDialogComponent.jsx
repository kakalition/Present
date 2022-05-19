import PropTypes from 'prop-types';

/**
 * @param {{header:JSX.Element, body:JSX.Element, formComponent:JSX.Element,
 * buttonComponent:JSX.Element}} props
 */
export default function FormDialogComponent(props) {
  const {
    header, body, formComponent, buttonComponent,
  } = props;

  return (
    <div className="w-full bg-white md:w-[75%] lg:w-[55%]">
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

FormDialogComponent.propTypes = {
  header: PropTypes.element.isRequired,
  body: PropTypes.element.isRequired,
  formComponent: PropTypes.element.isRequired,
  buttonComponent: PropTypes.element.isRequired,
};
