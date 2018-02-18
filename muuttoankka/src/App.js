import React from 'react'
import sightingsService from './services/Sightings'
import speciesService from './services/Species'
import SightingsList from './components/SightingsList'
import SightingsForm from './components/SightingsForm'
import Togglable from './components/Togglable'
import Navigationbar from './components/Navigationbar'
import { Button } from 'react-bootstrap'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      species: [],
      orderedSightings: [],
      sightings: [],
      description: '',
      specie: '',
      count: 1,
      inOrder: false
    }
  }

  componentWillMount() {
    sightingsService.getAll().then(sightings => {
      this.setState({ sightings, orderedSightings: sightings })
    })
    speciesService.getAll().then(species => {
      this.setState({ species })
    })
    this.handleOrdering
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleOrdering = () => {
    const timeOrder = this.state.sightings.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
    if (this.state.inOrder) {
      this.setState({
        orderedSightings: timeOrder,
        inOrder: false
      })
      
    } else {
      this.setState({ 
        orderedSightings: timeOrder.reverse(),
        inOrder: true
      })
    }
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
      sightings: this.state.sightings.concat(sighting),
      orderedSightings: this.state.sightings.concat(sighting)
    })
    } else {
      console.log('Wrong information')
    }
  }

  validState = () => {
    const comparedSpecies = this.state.species.filter(spec => spec.name.includes(this.state.specie))
    return (this.state.description && this.state.count > 0 && comparedSpecies.length > 0 && this.state.specie)
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
        <Button type="submit" onClick={this.handleOrdering}>Sort by Date</Button>
        <p></p>
        <SightingsList sightings={this.state.orderedSightings} />      


      </div>
    )
  }
}

export default App
