import axios from 'axios'
import { useEffect, useState } from 'react'
import FixturesCard from './pages/fixtures-card';




function Matches() {

  const [matchesx, setMatches] = useState([""])

  const options = {
    method: 'GET',
    url: `http://api.football-data.org/v2/competitions/2014/matches`,
    headers: {
      'X-Auth-Token': '8bc06c4f9dd64289bffcc8f4a43f1cc5' 
    }
  };

  useEffect(() => {
    axios.request(options).then((response) =>  {
      setMatches(response.data)
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    }) 
  },[])
  
 

  return(
    <div>
      <h1>next fixtures</h1>
      {/* { matchesx.count ? <h3>{matchesx.matches.map(mat => <h3>{mat.id}</h3>)}</h3> : "loading..."} */}

      <FixturesCard matchesx={matchesx}/>

    </div>
  )
}

export default Matches 