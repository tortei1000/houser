import { createStore, combineReducers } from 'redux'

let initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  img: "",
  mortage: "",
  rent: "",
  
}

export const ADD_HOUSE = "ADD_HOUSE"
export const ADD_IMG = "ADD_IMG"
export const ADD_PRICE = "ADD_PRICE"
export const RESET = "RESET"

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_HOUSE:
      return { ...state, name: payload.name, address: payload.address, 
      city:payload.city, state:payload.state, zip:payload.zip}
    case ADD_IMG:
      return {...state, img:payload}
    case ADD_PRICE:
      return {...state, mortage:payload.mortage, rent:payload.rent} 
    case RESET:
      return {...state, name:"", address:"", city:"",state:"",zip:"",img:"",mortage:"",rent:""}
    default: return state
  }
}


export default createStore(reducer)