import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import store, { ADD_IMG } from "../../store"

export default class Step2 extends Component {
  constructor(){
    let reduxState = store.getState()
    super()
    this.state = {
      img: reduxState.img
    }
  }
  
  componentDidMount(){
    store.subscribe(()=>{
      const reduxState = store.getState()
      this.setState({
        img: reduxState.img
      })
    })
  }
  
  
  handleChange =(e)=>{
    let {value, name} = e.target
    this.setState({
      [name]:value
    })
  }

  addImage = () => {
    store.dispatch({type: ADD_IMG, payload:this.state.img})
  }

  render() {
    return (
      <div>
        Wizard
        
        <div>
          <input name="img" placeholder="image url" onChange={this.handleChange}/>
          
        </div>
        <div>
          
        <Link to="/wizard/Step3"><button onClick={this.addImage}>next</button></Link>
        </div>
      </div>
    )
  }
}