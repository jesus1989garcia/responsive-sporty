import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Home = () => {

  const [badges, setBadges] = useState([""])

  const options = {
    method: 'GET',
    url: `http://api.football-data.org/v2/competitions/2014/teams`,
    headers: {
      'X-Auth-Token': '8bc06c4f9dd64289bffcc8f4a43f1cc5' 
    }
  };

  useEffect(() => {
    axios.request(options).then((response) =>  {
      setBadges(response.data)
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    }) 
  },[])

  return (
    <div className="home">
      <div className="teams-bar">
      { badges.teams ? badges.teams.map(team => <Link to={`/team/${team.id}`} className="link-badge"><img src={team.crestUrl} /></Link> ) : null }
      
       </div>
    </div>
    
  )
}
 export default Home