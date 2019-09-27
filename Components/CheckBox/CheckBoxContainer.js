import React, { useState, useEffect } from 'react';
import CheckBox from './CheckBox';

const CheckBoxContainer = () => {
  let [allChecked, setAllChecked] = useState(false);
  let [miscChecked, setMiscChecked] = useState(false);
  let [checked, setChecked] = useState(false);
  let [checkBoxesData, setCheckBoxesData] = useState();

  useEffect(() => {
    let checkBoxData = [];
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(response => {
        let checkBoxData = response && response.map(item => {
          let data = {
            name: item.title,
            checked: true,
            id: item.title
          }
          return data
        })
        setCheckBoxesData(checkBoxData)
      });

  }, [])
  const allCheckedHandle = (event) => {
    setAllChecked(!allChecked);
    setChecked(!checked);
  }
  const miscCheckedHandle = (event) => {
    setMiscChecked(!miscChecked);
  }
  const handleChange = (event) => {
    setChecked(!checked);
  }

  return (
    <>
      <input
        type="checkbox"
        label="All"
        name="All"
        isChecked={allChecked}
        onChange={allCheckedHandle}        
      /><label>All</label>
      <input
        type="checkbox"
        label="Misc"
        name="Misc"
        isChecked={miscChecked}
        onChange={miscCheckedHandle}
      /><label>Misc</label>
      {checkBoxesData && checkBoxesData.map(checkbox => {
        return <CheckBox
          label={checkbox.name}
          isChecked={checked}
          onChange={handleChange}
        />
      })}
    </>
  )
}

export default CheckBoxContainer;