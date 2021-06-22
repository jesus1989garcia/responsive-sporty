import React from 'react'
import ReactPlayer from 'react-player'

function Highlights() {
  return(
    <div className="hl-container">
      <h1 className="title">Last games' highlights</h1>
      <div className="video-container">
        <ReactPlayer url="https://www.youtube.com/watch?v=jAD8DQF0tO0" className="video-hl" />
      </div>
    </div>
  )
}

export default Highlights