import React from 'react'
import sightingsService from './services/Sightings'
import speciesService from './services/Species'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      species: [],
      sightings: []
    }
  }

  componentWillMount () {
    sightingsService.getAll.then(sightings => {
      this.setState({ sightings })
    })
    speciesService.getAll.then(species => {
      this.setState({ species })
    })
  }

  render () {
    return (
      <div className="App">
        <p className="App-intro">
          Hello World
        </p>
      </div>
    )
  }
}

export default App
