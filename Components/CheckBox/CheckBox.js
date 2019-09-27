import React, {useState} from 'react'
import propTypes from 'prop-types';

const CheckBox = ({
  label,
  isChecked,
  onChange
}) => {
  
  return (
    <>
      <input 
        type="checkbox" 
        checked={isChecked}
        onChange={onChange}
        name={label}
        id={label}
      />
      <label>{label}</label>
    </>
  )
}
export default CheckBox;

CheckBox.defaultProps = {
  label: "CheckBox",
  name: "CheckBox"
}
CheckBox.propTypes = {
  onChange: () => {},
  label: propTypes.string.required
}
