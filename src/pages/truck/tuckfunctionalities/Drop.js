import React from 'react'
import Select from 'react-select';
import 'react-dropdown/style.css';
function Drop() {
   
  return (
    <>
    <Select
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]}
/>
    </>
  )
}

export default Drop