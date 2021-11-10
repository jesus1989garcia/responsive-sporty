import axios from 'axios'
import { useEffect, useState } from 'react'
import FixturesCard from './pages/fixtures-card';
import liga from '../imgs/LaLiga_Santander_(2).svg'




function Matches() {

  const [matchesx, setMatches] = useState([""])

  const options = {
    method: 'GET',
    url: `//api.football-data.org/v2/competitions/2014/matches`,
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
      <h1 style={{color:"white", fontSize:"2rem", lineHeight:"5rem"}}>Next fixtures</h1>
      <div className="logo-liga">
        <img src={liga}></img>
      </div>

      <FixturesCard matchesx={matchesx}/>

    </div>
  )
}

export default Matches 