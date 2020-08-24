import React from "react"
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Ingredient = ({  }) => {
  return (
    <React.Fragment>
      <Select options={options} />
    </React.Fragment>
  );
}
export default Ingredient
