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
        isChecked={allChecked}
        onChange={allCheckedHandle}
        name="All"
      /><label>All</label>
      <CheckBox
        label={"Misc"}
        isChecked={miscChecked}
        onChange={miscCheckedHandle}
      />
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