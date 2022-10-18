import React, {useEffect, useState} from 'react'
import "./AddTodoForm.css"

const AddTodoForm = (props) => {
    const [value, setValue] = useState(props.defaultValue) // [deger, setter]
    const handleChange = (event) => {
      setValue(event.currentTarget.value)
    }
    const handleClick = () => {
      props.setList((prev) => [...prev, {
        text:value,
        date: new Date().toLocaleDateString()
      }])
      setValue('');
    }
    return (
    <div>
       <input 
          onChange={handleChange} 
          type='text'
          name='add-todo'
          value={value}
        />
        <button onClick={handleClick}>Ekle</button>
    </div>
  )
}

export default AddTodoForm