import React from 'react'
import Clicker from './Clicker'

const Title = (props) => {
  return (
    <div>
      <h1 className="title">
        {props.title}
      </h1>

      <h2 className="title">
        {props.subtitle}
      </h2>

      <h2 className="clicker-heading">Does Anna Got This?
      </h2>

      <div className="clickers">
        < Clicker button="Totally" />
        < Clicker button="Mostly" />
        < Clicker button="Sort Of" />
      </div>

    </div>
  )
}

export default Title