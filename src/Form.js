import React, { useState } from 'react'

function Form(props) {
  const [name, setName] = useState('')
  const [item, setItem] = useState('Loaves')
  const [weather, setWeather] = useState(null)

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

      {/* Get Weather Button */}
      {/* Fetch  Example */}
      <button
        onClick={() => {
          const baseURL = ''
          const appid = ''
          const path = `${baseURL}?q=${name}&appid=${appid}`
          fetch(path).then(res => res.json()).then(json => { console.log(json) }).catch(err => {
            console.log(err.message)
          })

        }}>
        Get Weather
      </button>

      <div>
        {weather ? <p>{weather.main.temp}</p> : <p>;Loading</p>}
      </div>

    </div >
  )
}


export default Form 