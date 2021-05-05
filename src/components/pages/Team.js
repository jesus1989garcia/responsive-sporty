import axios from 'axios';
import React, {useEffect, useState}  from 'react'


function Team(props) {

  const [team, setTeam] = useState([""])

  const options = {
    method: 'GET',
    url: `http://api.football-data.org/v2/teams/${props.match.params.id}`,
    headers: {
      'X-Auth-Token': '8bc06c4f9dd64289bffcc8f4a43f1cc5' 
    }
  };

  useEffect(() => {
    axios.request(options).then((response) => {
      setTeam(response.data)
      console.log(response.data)
    }).catch((error => {
      console.log(error)
    }))
  }, []) 

  return(
    <div style={{color:"white"}}>
    "team"
    </div>
  )
}

export default Team