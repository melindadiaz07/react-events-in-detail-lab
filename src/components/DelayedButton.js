import React, { Component } from 'react';

class DelayedButton extends Component {

  state = {  }

  handleClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }

  render() {
    return (
      <div>
        <button onClick={(event) => this.handleClick(event)} ></button>
      </div>
    )
  }
}

export default DelayedButton;
