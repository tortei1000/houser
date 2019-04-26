import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'

export default class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      houses : []
    }
  }

  componentDidMount(){
    axios.get('/api/houses').then((res)=>{
      this.setState({
        houses : res.data
      })
      .catch(err=>{console.log(err)})
    })   
  }

  

  render() {
    this.state.houses.map((house)=>{
      return<div>{house}</div>
    })
    return (
      <div>
        Dashboard
        <Link to="/wizard"><button>Add new property</button></Link>
        
      </div>
    )
  }
}