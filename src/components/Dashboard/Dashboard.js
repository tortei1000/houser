import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import House from "../House/House"
import "./dash.css"

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    this.getHouses()
  }
  getHouses = () => {
    axios.get('/api/houses').then((res) => { //this is getting the right data

      this.setState({
        houses: res.data
      })

    })
  }
  deleteHouse = (item) => {
    axios.delete(`/api/houses/${item.id}`).then(res => {

    })
    this.getHouses()
  }

  refreshHouses


  render() {
    let { houses } = this.state
    console.log(houses, "houses in the start of render")

    return (
      <div className="dash_main_div">
        <Link to="/wizard/step1"><button className="dash_button">Add new property</button></Link>
        {houses[0] ? houses.map((item, index) => {
          return (
            <div >
              <House item={item} index={index} deleteHouse={this.deleteHouse} />

            </div>
          )
        }) : null
        }


      </div>
    )
  }
}