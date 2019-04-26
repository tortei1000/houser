import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Step1 extends Component {
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
        
        <div>
          <input name="name" placeholder="name" onChange={this.handleChange}/>
          <input name="address" placeholder="address" onChange={this.handleChange}/>
          <input name="city" placeholder="city" onChange={this.handleChange}/>
          <input name="state" placeholder="state" onChange={this.handleChange}/>
          <input name="zipcode" placeholder="zipcode" onChange={this.handleChange}/>
        </div>
        <div>
          
        <Link to="/wizard/Step2"><button>next</button></Link>
        </div>
      </div>
    )
  }
}