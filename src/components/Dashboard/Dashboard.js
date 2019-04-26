import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import House from "../House/House"

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    axios.get('/api/houses').then((res) => { //this is getting the right data
      
      this.setState({
        houses: res.data
      })
        // .catch(err => { console.log(err) })
    })
  }



  render() {
    let { houses } = this.state
    console.log(houses, "houses in the start of render")

    return (
      <div>
        {houses[0] ? houses.map((item, index) => {
          return (
            <div>
              <House item={item} index={index}/>
            </div>
          )
        }) :null
      }
        
        <Link to="/wizard"><button>Add new property</button></Link>

      </div>
    )
  }
}