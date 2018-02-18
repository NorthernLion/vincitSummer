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
      description: '',
      specie: '',
      count: 1
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handlePost = async (event) => {
    event.preventDefault()
    if (this.validState()) {
      const sighting = {
        species: this.state.specie,
        description: this.state.description,
        dateTime: (new Date()).toISOString(),
        count: this.state.count
      }

    const result = await sightingsService.create(sighting)

    this.setState({
      description: '',
      specie: '',
      count: 1,
      sightings: this.state.sightings.concat(sighting)
    })
    } else {
      console.log('Wrong information')
    }
  }

  validState = () => {
    const comparedSpecies = this.state.species.filter(spec => spec.name.includes(this.state.specie))
    return (this.state.description && this.state.count > 0 && comparedSpecies.length > 0 && this.state.specie)
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
