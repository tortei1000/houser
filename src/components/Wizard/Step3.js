import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import store, { ADD_PRICE, RESET } from "../../store"

export default class Step3 extends Component {
  constructor() {
    let reduxState = store.getState()
    super()
    this.state = {
      mortage: reduxState.mortage,
      rent: reduxState.rent
    }
  }

  createHouse = this.createHouse.bind(this)

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        mortage: reduxState.mortage,
        rent: reduxState.rent
      })
    })
  }

  handleChange = (e) => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  addPrice = () => {
    store.dispatch({ type: ADD_PRICE, payload: { mortage: this.state.mortage, rent: this.state.rent } })
  }

  createHouse() {

    const reduxState = store.getState()

    console.log(`this will be a long shot ${reduxState.name}`)

    axios.post('/api/houses', {...reduxState, mortage:this.state.mortage, rent:this.state.rent}).then(() => {
      this.props.history.push(`/`)
    })
  }



  render() {
    return (
      <div>
        Wizard

        <div>
          <input name="mortage" placeholder="mortage" onChange={this.handleChange} />
          <input name="rent" placeholder="rent" onChange={this.handleChange} />

        </div>
        <div>
          <button onClick={this.createHouse}>complete</button>

          <Link to="/wizard/Step3"><button onClick={this.addPrice}>next</button></Link>
        </div>
      </div>
    )
  }
}