import React, { useState } from "react"
import bg from "./assets/images/bg.png"
import searchIcon from "./assets/icons/search-icon.png"
import Explore from "./component/MainPages/StartExploring"
import NoResult from "./component/MainPages/NoResults"
import Results from "./component/MainPages/Results"

function App() {
  const [searchState, setSearchState] = useState("")
  const headerBg = {
    backgroundPosition:'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundColor: "rgba(0, 0, 0, 0.8)",
    backgroundImage: `url(${bg})`
  };
  function handelClick() {
    return (
setSearchState(document.getElementById("search").value)
  )}
//   function handelClick() {
//     return (
// setSearchState(document.getElementById("search").value)
//   )}
  
  return (
    <>
    <div className="container">
      <div className="header" style={headerBg}>
        <h1>Find your film</h1>
        <h4>My Watchlist</h4>
        
      </div>
      
      <div className="search">
        
          <span><img alt="search icon" src={searchIcon}></img></span>
     <input id="search" type="text" placeholder="Search here"></input>
     <button onClick={handelClick}>Search</button>
     
      </div>
      <div className="main">
          {searchState === "" ? <Explore /> : <React.StrictMode>
          <Results key="now" name={searchState}/>
        </React.StrictMode>}
          
        
  </div>
      </div>
      
    </>

  )
}
export default App;
