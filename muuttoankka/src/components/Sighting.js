import React from 'react'

class Sighting extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { id, dateTime, description, species, count } = this.props

    const showWhenVisible = {
      display: this.state.visible ? '' : 'none',
      margin: 5,
    }

    return (
      <div>
        <div onClick={this.toggleVisibility}>{species}</div>
        <div style={showWhenVisible}></div>
      </div>
    )

  }
}

export default Sighting
