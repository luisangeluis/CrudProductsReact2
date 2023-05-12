import React from 'react'
import { Controller } from 'react-hook-form'

const InputCheckbox = ({ id, name, onChange, register}) => {
  return (
    <input type="checkbox" id={id} name={name} onChange={onChange} {...register} />
    // <Controller id={id} name={name} 
    //   control={control}
    //   rules={rules}
    //   render={render}
    // />
  )
}

export default InputCheckbox