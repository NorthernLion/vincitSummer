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
      <div className='container'>
        <tr key={id}>
          <td>
              <div onClick={this.toggleVisibility}>{count} pieces of {species} seen at {dateTime.substring(0, 10)} at time {dateTime.substring(12, 19)}</div>
              <div style={showWhenVisible}>{description}</div>
          </td>
          <td>
            afefeaf
          </td>
        </tr>
      </div>
    )

  }
}

export default Sighting
