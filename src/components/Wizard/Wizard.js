import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Wizard extends Component {

  render() {
    return (
      <div>
        Wizard
        <Link to="/"><button>cancel</button></Link>
      </div>
    )
  }
}