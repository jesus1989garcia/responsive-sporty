import React from 'react'
import { Link } from 'react-router-dom'

function FixturesCard(props) {

  return(
    <>
    
      {/* {props.matchesx.count ? console.log(props.matchesx.matches.filter(tbp => tbp.status === "SCHEDULED")) : "ho" } */}
      { props.matchesx.count ? <div className="matches-container">{props.matchesx.matches.filter(tbp => tbp.status === "SCHEDULED")
      .map(mat => 
        <div className="fixtures-card">
        <h4 className="match-num">matchday { mat.matchday}</h4>
        <div className="results">
          <Link to={`/team/${mat.homeTeam.id}`} className="link-team">{ mat.homeTeam.name }</Link>
          <h5>vs</h5>
          <Link to={`/team/${mat.awayTeam.id}`} className="link-team">{mat.awayTeam.name}</Link>
        </div>
  </div>
  )}</div> : "loading..."}
    

   
    </>
  )
}

export default FixturesCard