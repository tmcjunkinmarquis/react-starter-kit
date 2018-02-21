import React, { Component } from 'react';

export default class EvilDeedsCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      
    }
  }

  render() {
    return (
      <div>
        
        <p>Number of Evil Deeds: {this.state.count}</p>
        <button onClick={() => {this.setState({count: this.state.count += 1})}}> </button>
      </div>
    )
  }
}