import React from 'react'

const Title = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subheading}</h2>
      <h3>{props.paragraph}</h3>
    </div >
  )
}


export default Title