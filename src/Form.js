import React, { useState } from 'react'

function Form(props) {
  const [name, setName] = useState('')
  const [item, setItem] = useState('Loaves')

  return (
    <div>
      <h2>{name}</h2>
      <h3>{item}</h3>
      <input
        type='text'
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }} />


      <select
        value={item}
        onChange={(e) => { setItem(e.target.value) }}>
        <option>Fritter</option>
        <option>Loaves</option>
        <option>Pastry</option>
      </select>

    </div>
  )
}


export default Form 