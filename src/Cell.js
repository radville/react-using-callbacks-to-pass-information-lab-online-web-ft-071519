import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super()
    this.state = {
      color: props.color
    }
  }
  
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }

  render() {
    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}