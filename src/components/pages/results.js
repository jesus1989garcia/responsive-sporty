import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Results(props){

  const [results, setResults] = useState([])

  const options = {
    method: 'GET',
    url: `http://api.football-data.org/v2/teams/${props.match.params.id}/matches`,
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
      

    </div>
  )
}

export default Results