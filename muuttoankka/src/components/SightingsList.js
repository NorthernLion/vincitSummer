import React from 'react'
import Sighting from './Sighting'

const SightingsList = ({ sightings }) => {
  return (
    <div>
      {sightings.map(sighting =>
        <Sighting 
          id={sighting.id}
          dateTime={sighting.dateTime}
          description={sighting.description}
          species={sighting.species}
          count={sighting.count}
        />
      )}
    </div>
  )
}

export default SightingsList
