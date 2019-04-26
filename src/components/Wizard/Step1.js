import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import store, { ADD_HOUSE } from "../../store"

export default class Step1 extends Component {
  constructor() {
    let reduxState = store.getState()
    super()
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    }
  }

  
  componentDidMount(){
    store.subscribe(()=>{
      const reduxState = store.getState()
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip : reduxState.zip
      })
    })
  }

  addHouse = () => {
    console.log("addHouse is firing", this.state.name)
    store.dispatch({
      type: ADD_HOUSE, payload: {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip
      }
      
    })
  }

  handleChange = (e) => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }





  render() {
    return (
      <div>
        Wizard

        <div>
          <input name="name" placeholder="name" onChange={this.handleChange} />
          <input name="address" placeholder="address" onChange={this.handleChange} />
          <input name="city" placeholder="city" onChange={this.handleChange} />
          <input name="state" placeholder="state" onChange={this.handleChange} />
          <input name="zipcode" placeholder="zipcode" onChange={this.handleChange} />
        </div>
        <div>

          <Link to="/wizard/Step2"><button onClick={this.addHouse}>next</button></Link>
        </div>
      </div>
    )
  }
}