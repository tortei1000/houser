import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Step2 extends Component {
  constructor(){
    super()
    this.state = {
      img: ""
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
          <input name="img" placeholder="image url" onChange={this.handleChange}/>
          
        </div>
        <div>
          
        <Link to="/wizard/Step3"><button>next</button></Link>
        </div>
      </div>
    )
  }
}