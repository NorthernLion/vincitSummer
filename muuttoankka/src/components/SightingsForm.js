import React from 'react'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

const SightingsForm = ({ species, handleChange, handlePost, description, specie, count }) => {
  return (
    <div>
      <h1>Report a new sighting</h1>
      <form onSubmit={handlePost}>
        <FormGroup>
          <ControlLabel>Specie</ControlLabel>

          <FormControl componentClass="select" placeholder={"Select a specie"} name="specie" onChange={handleChange}>
            <option value="select">Select...</option>
            {species.map(spec => <option key={spec.id} value={spec.name}> {spec.name}</option>)}
          </FormControl>

          <ControlLabel>Count</ControlLabel>

          <FormControl type="number" value={count} onChange={handleChange} name="count"></FormControl>

          <ControlLabel>Description</ControlLabel>
          <FormControl componentClass="textarea" value={description} name="description" onChange={handleChange} />
        </FormGroup>
        <Button bsStyle="success" type="submit">create</Button>
      </form>
    </div>
  )
}

export default SightingsForm
