import React, { Component } from 'react'

class CoordinatesButton extends Component {

  state = {  }

  handleClick = (event) => {
    let elementsArray = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(elementsArray)
  }

  render() {
    return (
      <div>
        <button onClick={(event) => this.handleClick(event) } ></button>
      </div>
    );
  }
}

export default CoordinatesButton;
