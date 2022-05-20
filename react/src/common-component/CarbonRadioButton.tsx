interface Props {
  inputId: string,
  inputName: string,
  inputValue: string,
  label: string,
  isChecked: boolean,
  onRadioChange: () => void,
}

export default function CarbonRadioButton({
  inputId, inputName, inputValue, label, isChecked, onRadioChange,
}: Props) {
  return (
    <label className="carbon-radio-button-label" htmlFor={inputId}>
      <input className="carbon-radio-button-radio" type="radio" id={inputId} name={inputName} value={inputValue} checked={isChecked} onChange={onRadioChange} />
      <div className="w-2" />
      {label}
    </label>

  );
}
