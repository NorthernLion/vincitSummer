import React from 'react'
import { Table } from 'react-bootstrap'

const SightingsList = ({ sightings }) => {
  return (
    <div>
      <Table striped bordered condensed hover >
        <thead>
          <tr>
            <td>Date</td>
            <td>Time</td>
            <td>Specie</td>
            <td>Count</td>
            <td>Description</td>
          </tr>
        </thead>

        {sightings.map(sighting =>
          <thead key={sighting.id}>
            <tr>
              <td>{sighting.dateTime.substring(0, 10)}</td>
              <td>{sighting.dateTime.substring(12, 19)}</td>
              <td>{sighting.species}</td>
              <td>{sighting.count}</td>
              <td>{sighting.description}</td>
            </tr>
          </thead>
        )}
      </Table>
    </div>
  )
}
export default SightingsList
