import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons/faShieldAlt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Results(props){

  const [results, setResults] = useState([])

  const options = {
    method: 'GET',
    url: `//api.football-data.org/v2/teams/${props.match.params.id}/matches`,
    headers: {
      'X-Auth-Token': '8bc06c4f9dd64289bffcc8f4a43f1cc5' 
    }
  };

  

  useEffect(() => {
    axios.request(options).then((response) => {
      setResults(response.data)
      console.log(response.data)
    }).catch((error) => console.log(error))
  }, [])

  return(
    <div className="results-container" >
      { results.count ? results.matches.map(match =>
        <div className="results-card"id={match.id}>
          <div className="team-match">
            <FontAwesomeIcon icon={faShieldAlt} />
            <Link className="link-team" to={`/team/${match.homeTeam.id}`}><p className={match.homeTeam.id == props.match.params.id ? "team-sel" : "team-vs"}>{match.homeTeam.name}</p></Link>
          </div>
          <div>
            <p>{match.score.fullTime.homeTeam}</p>
          </div>
          { !match.score.winner ? <p>tbh</p> : null}
          <div>
          <p>{match.score.fullTime.awayTeam}</p>
          </div>
          <div className="team-match">
             <FontAwesomeIcon icon={faShieldAlt} />
            <Link className="link-team" to={`/team/${match.homeTeam.id}`}><p className={match.awayTeam.id == props.match.params.id ? "team-sel" : "team-vs"}>{match.awayTeam.name}</p></Link>
          </div>
      
        </div>
        ) : ""}
      

    </div>
  )
}

export default Results