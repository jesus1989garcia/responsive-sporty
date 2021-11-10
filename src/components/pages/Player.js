import React, { useState, useEffect } from 'react'
import axios from 'axios'
import picture from '../../imgs/profile-player.jpeg'

function Player(props) {

  const [player, setPlayer] = useState([])

  const options = {
    method: 'GET',
    url: `//api.football-data.org/v2/players/${props.match.params.id}`,
    headers: {
      'X-Auth-Token': '8bc06c4f9dd64289bffcc8f4a43f1cc5' 
    }
  };

  useEffect(() => {
    axios.request(options).then((response) => {
      setPlayer(response.data)
      console.log(response.data)
    }).catch((error => {
      console.log(error)
    }))
  }, []) 
  return(
    <div className="player-card">
      <div className="img-player">
        <img src={picture} className="profile-pic" alt={`${player.name} profile photo`}/>

      </div>
      <div className="player-info">
        <div><h1>{player.name}  ({player.firstName})</h1></div>
        <div><p>Position {player.position}</p></div>
        <div><p>{player.dateOfBirth}</p></div>
        <div><p>Place of birth: {player.countryOfBirth}</p></div>
        <div><p>Nationality: {player.nationality}</p></div>
        <div></div>
        
      </div>
      
    </div>
  )
}

export default Player