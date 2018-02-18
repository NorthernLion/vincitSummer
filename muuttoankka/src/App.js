import React from 'react'
import sightingsService from './services/Sightings'
import speciesService from './services/Species'
import SightingsList from './components/SightingsList'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      species: [],
      sightings: []
    }
  }

  componentWillMount () {
    sightingsService.getAll().then(sightings => {
      this.setState({ sightings })
    })
    speciesService.getAll().then(species => {
      this.setState({ species })
    })
  }

  render () {
    return (
      <div className="App">
        <SightingsList sightings={this.state.sightings}/>
      </div>
    )
  }
}

export default App
