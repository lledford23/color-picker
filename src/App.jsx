import React, { Component } from 'react'

class Slider extends Component {
  render() {
    return (
      <input
        type="range"
        min={this.props.min}
        max={this.props.max}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.functionToCallWhenChanged}
      />
    )
  }
}

class App extends Component {
  state = {
    hue: '90',
    saturation: '50',
    lightness: '20',
  }

  handleChangeSlider = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const currentColor = `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`

    return (
      <div>
        <figure style={{ backgroundColor: currentColor }}></figure>
        <p>{currentColor}</p>
        <section>
          <p>
            Hue:
            <Slider
              name="hue"
              min="0"
              max="360"
              value={this.state.hue}
              functionToCallWhenChanged={this.handleChangeSlider}
            />
          </p>
          <p>
            Saturation:
            <Slider
              name="saturation"
              type="range"
              min="0"
              max="100"
              value={this.state.saturation}
              functionToCallWhenChanged={this.handleChangeSlider}
            />
          </p>
          <p>
            Lightness:{''}
            <Slider
              name="lightness"
              min="0"
              max="100"
              value={this.state.lightness}
              functionToCallWhenChanged={this.handleChangeSlider}
            />
          </p>
        </section>
      </div>
    )
  }
}

export default App
