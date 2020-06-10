import React, { Component, Fragment } from 'react';
import './App.css';
import SwitchButton from './SwitchButton';

class App extends Component {
  
  state = {
    time: 0,
    active: false,
  }

  addSecond = () => {
    this.setState({
      time: this.state.time + 1
    })
  }
  handleClick = () => {

    if(this.state.active) {
      clearInterval(this.intervalId)
    } else {
      this.intervalId = setInterval(() => this.addSecond(), 1000)
    }

    this.setState({
      active: !this.state.active
    })
  }
  render() {
    return(
      <Fragment>
        <p>
          {this.state.time}
          <SwitchButton click={this.handleClick} active={this.state.active} />
        </p>
      </Fragment>
    )
  }
}

export default App;