import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Step3 extends Component {
  constructor(){
    super()
    this.state = {
      mortage: null,
      rent: null
    }
  }
  
  createHouse = this.createHouse.bind(this)
  
  handleChange =(e)=>{
    let {value, name} = e.target
    this.setState({
      [name]:value
    })
  }

  createHouse  () {
    axios.post('/api/houses', this.state).then(()=>{
      this.props.history.push(`/`)
    })
  }

  render() {
    return (
      <div>
        Wizard
        
        <div>
          <input name="mortage" placeholder="mortage" onChange={this.handleChange}/>
          <input name="rent" placeholder="rent" onChange={this.handleChange}/>
          
        </div>
        <div>
        <button onClick={this.createHouse}>complete</button> 
        <Link to="/wizard/Step3"><button>next</button></Link>
        </div>
      </div>
    )
  }
}