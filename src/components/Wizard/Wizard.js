import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios';
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"

export default class Wizard extends Component {
  constructor() {
    super()
    this.state = {

    }
  }



  render() {
    return (
      <div>
        Wizard
        <Link to="/"><button>cancel</button></Link>
        <Link to="/wizard/step1"><button>next</button></Link>
        <Switch>
          <Route component={Step1} exact path="/wizard/step1" />
          <Route component={Step2} exact path="/wizard/step2" />
          <Route component={Step3} exact path="/wizard/step3" />
        </Switch>
      </div>
    )
  }
}