import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      address: "",
      city: "",
      state:"",
      zipcode: null
    }
  }
  
  
  handleChange =(e)=>{
    let {value, name} = e.target
    this.setState({
      [name]:value
    })
  }

  render() {
    return (
      <div>
        Wizard
        <Link to="/"><button>cancel</button></Link>
        <div>
          <input name="name" placeholder="name" onChange={this.handleChange}/>
          <input name="address" placeholder="address" onChange={this.handleChange}/>
          <input name="city" placeholder="city" onChange={this.handleChange}/>
          <input name="state" placeholder="state" onChange={this.handleChange}/>
          <input name="zipcode" placeholder="zipcode" onChange={this.handleChange}/>
        </div>
        <div>
        <Link to="/"><button>next</button></Link>
        </div>
      </div>
    )
  }
}