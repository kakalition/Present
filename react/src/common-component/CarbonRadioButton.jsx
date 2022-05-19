import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function CarbonRadioButton(props) {
  const {
    inputId, inputName, inputValue, label, isChecked, onRadioChange,
  } = props;

  return (
    <label className="carbon-radio-button-label" htmlFor={inputId}>
      <input className="carbon-radio-button-radio" type="radio" id={inputId} name={inputName} value={inputValue} checked={isChecked} onChange={onRadioChange} />
      <div className="w-2" />
      {label}
    </label>

  );
}

CarbonRadioButton.propTypes = {
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onRadioChange: PropTypes.func.isRequired,
};
