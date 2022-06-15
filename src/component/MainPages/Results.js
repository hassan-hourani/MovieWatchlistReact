import React, { useState, useEffect } from "react"
import goldenStar from "../../assets/icons/golden-star.png"
import plus from "../../assets/icons/plus-icon.png"
import defaultPoster from "../../assets/images/default-poster.jpeg"
function Results(props) {
    const [resultsState, setResultsState] = useState([])
    const [titleSearchState, setTitleSearchState] = useState([])

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${props.name}&apikey=eb49c8b8`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.Search.map(item => item.Title))
            setResultsState(data.Search.map(item => item.Title))
        })
    }, [props.name])

    useEffect(() => {
        let titlesArray = resultsState
        titlesArray.map(item => ( 
            fetch(`http://www.omdbapi.com/?t=${item}&apikey=eb49c8b8`)
            .then(res => res.json())
        .then(data => {
            // console.log(data)
            setTitleSearchState(titleSearchState.push(data))
            // let dataArray = new Array(titleSearchState);
            
            console.log(titleSearchState)
            
        })
            )) 
        
    }, [resultsState])
    
        
    const poster = titleSearchState.map( item => <img className="poster" id="poster" src={item.Poster} alt="movie-poster"></img>)
    const title = titleSearchState.map( item => <h4 id="title">{item.Title}</h4>)
    const rating = titleSearchState.map( item => <p id="rating">{item.imdbRating}</p>)
    const runtime = titleSearchState.map( item => <p id="length">{item.Runtime}</p>)
    const genre = titleSearchState.map( item => <p  id="genre">{item.Genre}</p>)
    const plot = titleSearchState.map( item =>  <p id="description" className="movie-description">D{item.Plot}</p>)
    
    
    //     let dataArray = titleSearchState
    // Object.keys(dataArray).map(key => {
    //     console.log(dataArray)
    //     document.getElementById("poster").src = key.Poster
    //     document.getElementById("title").textContent = key.Title
    //     document.getElementById("rating").textContent = key.imdbRating
    //     document.getElementById("length").textContent = key.Runtime
    //     document.getElementById("genre").textContent = key.Genre
    //     document.getElementById("description").textContent = key.Plot
        
    // })
    
    // let dataArray = new Array(titleSearchState);
    // dataArray.map( (item, i) => {
        
    //     document.getElementById("poster").src = item.Poster
    //     document.getElementById("poster").key = i
    //     document.getElementById("title").textContent = item.Title
    //     document.getElementById("title").key = i
    //     document.getElementById("rating").textContent = item.imdbRating
    //     document.getElementById("rating").key = i
    //     document.getElementById("length").textContent = item.Runtime
    //     document.getElementById("length").key = i
    //     document.getElementById("genre").textContent = item.Genre
    //     document.getElementById("genre").key = i
    //     document.getElementById("description").textContent = item.Plot
    //     document.getElementById("description").key = i
    // }
    //     )
    // let dataArray = titleSearchState
    // Object.keys(dataArray).map(key => {
    //     console.log(dataArray)
    //     // document.getElementById("poster").src = key.Poster
    //     // document.getElementById("title").textContent = key.Title
    //     // document.getElementById("rating").textContent = key.imdbRating
    //     // document.getElementById("length").textContent = key.Runtime
    //     // document.getElementById("genre").textContent = key.Genre
    //     // document.getElementById("description").textContent = key.Plot
        
    // })
    return (
<>
<div className="results-main" id="results-main">

<div className="result-item">
    
        {/* <img className="poster" id="poster" src={defaultPoster} alt="movie-poster"></img> */}
        </div>
        <div className="movie-information">
        <div className="movie-header-section">
        {title}
        {/* <h4 id="title">Title Loding...</h4> */}
        <div className="rating">
        <img src={goldenStar} alt="golden star"></img>
        {rating}
        {/* <p id="rating">Rating Loading...</p> */}
        </div>
        </div>
        <div className="movie-basics">
            {runtime}
        {/* <p id="length">Runtime Loading...</p> */}
        {genre}
        {/* <p  id="genre">Genre Loading...</p> */}
        <p className="add-to-watchlist"><img src={plus} alt="plus icon"></img><a>Watchlist</a></p>
        </div>
        {plot}
        {/* <p id="description" className="movie-description">Description Loading...</p> */}
        </div> 
      </div>
      
</>
    )
}
export default Results;
/* <div className="result-item">
        <img className="poster" src={resultsState.Poster} alt="movie-poster"></img>
        </div>
        <div className="movie-information">
        <div className="movie-header-section">
        <h4 id="title">{resultsState.Title}</h4>
        <div className="rating">
        <img src={goldenStar} alt="golden star"></img>
        <p id="rating">{resultsState.imdbRating}</p>
        </div>
        </div>
        <div className="movie-basics">
        <p id="length">{resultsState.Runtime}</p>
        <p  id="genre">{resultsState.Genre}</p>
        <p className="add-to-watchlist"><img src={plus} alt="plus icon"></img><a>Watchlist</a></p>
        </div>
        <p id="description" className="movie-description">{resultsState.Plot}</p>
        </div> */

        // ------------------------------

    // useEffect(() => {
    //    setArrayResultsState(arrayResultsState.map(item => {
    //        fetch(`http://www.omdbapi.com/?t=${props.name}&apikey=a118e62d&short`)
    //        .then(res => res.json())
    //        .then(data => arrayResultsState.push(data))
    // }))
    //     }, [props.name])
    // const posterH = resultsState.map(item =>  <img className="poster" id="poster" src={item.Poster} alt="movie-poster"></img>)
    // const titleH = resultsState.map(item => <h4 id="title">{item.Title}</h4>)
    // const ratingH = resultsState.map(item => <p id="rating">{item.imdbRating}</p>)
    // const runtimeH = resultsState.map(item => <p id="length">{item.Runtime}</p>)
    // const genreH = resultsState.map(item => <p  id="genre">{item.Genre}</p>)
    // const poltH = resultsState.map(item => <p id="description" className="movie-description">{item.Plot}</p>)