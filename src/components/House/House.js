import React, { Component } from 'react'
import "./house.css"

export default class House extends Component {

  render() {
    const { item, index } = this.props
    console.log(this.props)
    return (
      <div className="house_parent_div">
        <div className="house_li_parent">
          <div className="house_img_parent"><img className="house_image" src={item.img}/></div>
          <li key={index} style={{ listStyle: 'none' }}>{item.name}</li>
          <li key={index} style={{ listStyle: 'none' }}>{item.address}</li>
          <li key={index} style={{ listStyle: 'none' }}>{item.city}</li>
          <li key={index} style={{ listStyle: 'none' }}>{item.state}</li>
          <li key={index} style={{ listStyle: 'none' }}>{item.zipcode}</li>
          <li key={index} style={{ listStyle: 'none' }}>{item.mortage}</li>
          <li key={index} style={{ listStyle: 'none' }}>{item.rent}</li>
        </div>
        <div className="house_delete">
          <i class="fas fa-times" onClick={()=>this.props.deleteHouse(item)}></i>
        </div>
      </div>
    )
  }
}