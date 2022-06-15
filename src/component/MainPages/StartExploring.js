import React from "react"
import movieIcon from "../../assets/icons/movie-icon.png"
function Explore() {
    return (
<>
<div className="explore-main">
        <div className="empty">
      <img alt="movie icon" src={movieIcon}></img>
      </div>

      <div className="start">
      <h4>Start Exploring</h4>
      </div>
      </div>
</>
    )
}
export default Explore;