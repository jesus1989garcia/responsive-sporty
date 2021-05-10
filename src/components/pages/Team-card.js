import React, { useEffect, useState } from 'react'
import { faRunning} from '@fortawesome/free-solid-svg-icons/faRunning'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons/faChalkboardTeacher'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function TeamCard(props) {
  return(
    <div className="team-container">
    <div className="badge-section">
      <img src={props.team.crestUrl}></img>
      <Link to={`/results/${props.team.id}`} style={{textDecoration:"none"}}><h2>{props.team.name}</h2></Link>
      <h5>{props.team.founded}</h5>
      <h5>{props.team.venue}</h5>
    </div>
    
      { props.team.squad ? props.team.squad.map(roster =>
         <div className="squad-card">
           <Link className="player-link" to={`/player/${roster.id}`}>{roster.name}</Link>
           <div className="role"> <p>{roster.role}</p>{ (roster.role === "PLAYER") ? <FontAwesomeIcon icon={faRunning}/> : <FontAwesomeIcon icon={faChalkboardTeacher}/>}</div>
           <p>position: {roster.position}</p>
          
           <p>Nationality: {roster.nationality}</p>
           <p>Born in {roster.countryOfBirth}</p>
         </div>) 
         
         
         
         
         
         : "loading team..."}
    
    </div>
  )
}

export default TeamCard
