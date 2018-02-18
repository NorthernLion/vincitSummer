import React from 'react'
import sightingsService from './services/Sightings'
import speciesService from './services/Species'
import SightingsList from './components/SightingsList'
import SightingsForm from './components/SightingsForm'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      species: [],
      sightings: [],
      dateTime: null,
      description: '',
      specie: '',
      count: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handlePost = (event) => {
    event.preventDefault()
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
        <SightingsForm 
          species={this.state.species}
          handleChange={this.handleChange}
          handlePost={this.handlePost}
          handleDateTimeChange={this.state.handleDateTimeChange}
          dateTime={this.state.dateTime}
          description={this.state.description}
          specie={this.state.specie}
          count={this.state.count}
        />
      </div>
    )
  }
}

export default App
