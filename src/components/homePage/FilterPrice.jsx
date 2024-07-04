import React from 'react'
import { useForm } from 'react-hook-form'

const FilterPrice = ({setinputPrice}) => {

   const {handleSubmit, register} = useForm();

   const submit = (data) => {
    setinputPrice({
        min: data.min,
        max: data.max || Infinity,
    })
    console.log(data);
   }
    
    
    

  return (
    <form onSubmit={handleSubmit(submit)}>
        <div>
            <label htmlFor="min">Min</label>
            <input {...register('min')} id='min' type="text" />
        </div>
        <div>
            <label htmlFor="max">Max</label>
            <input {...register('max')} id='max' type="text" />
        </div>
        <button>Submit</button>
    </form>
  )
}

export default FilterPrice
