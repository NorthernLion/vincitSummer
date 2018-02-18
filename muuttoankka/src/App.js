import React from 'react'
import sightingsService from './services/Sightings'
import speciesService from './services/Species'
import SightingsList from './components/SightingsList'
import SightingsForm from './components/SightingsForm'
import Togglable from './components/Togglable'
import Navigationbar from './components/Navigationbar'
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
      <div className="container">
        <Navigationbar />

        <Togglable buttonLabel="Report new sighting">
          <SightingsForm
            species={this.state.species}
            handleChange={this.handleChange}
            handlePost={this.handlePost}
            description={this.state.description}
            specie={this.state.specie}
            count={this.state.count}
          />
        </Togglable>

        <p></p>
        <SightingsList sightings={this.state.sightings} />      


      </div>
    )
  }
}

export default App
