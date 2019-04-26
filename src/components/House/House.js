import React, { Component } from 'react'

export default class House extends Component {

  render() {
    const { item, index } = this.props
    console.log(this.props)
    return (
      <div>
        <div>
          <li key={index} style={{ listStyle: 'none' }}>{item.name}</li>
          <li key={index} style={{ listStyle: 'none' }}>{item.address}</li>
          <li key={index} style={{ listStyle: 'none' }}>{item.city}</li>
          <li key={index} style={{ listStyle: 'none' }}>{item.state}</li>
          <li key={index} style={{ listStyle: 'none' }}>{item.zipcode}</li>
        </div>
        <div>
          <button onClick={()=>this.props.deleteHouse(item)}>delete</button>
        </div>
      </div>
    )
  }
}