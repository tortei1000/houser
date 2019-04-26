import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Dashboard extends Component {

  render() {
    return (
      <div>
        Dashboard
        <Link to="/wizard"><button>Add new property</button></Link>
        
      </div>
    )
  }
}