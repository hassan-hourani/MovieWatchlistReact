import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom/client'
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
            setResultsState(data.Search.map(item => item.Title))
        })
    }, [props.name])

 let myarray = []

    useEffect(() => {
        const data = [];
        let titlesArray = resultsState
        titlesArray.map(item => ( 
            fetch(`http://www.omdbapi.com/?t=${item}&apikey=eb49c8b8`)
            .then(res => res.json())
        .then(data1 => {
            data.push(data1)
            titleSearchState.push(data1)
            myarray.push(data1)
            console.log(data)
            
        })
            )) 
    }, [resultsState])

    // for (let y = 0; y < titleSearchState.length; y++) {
    //     document.getElementById("results-main").key = y
    //     document.getElementById("poster").innerHTML = <img className="poster" id="poster" src={titleSearchState[y].poster} alt="movie-poster"></img>
    //     document.getElementById("title").textContent = titleSearchState[y].title
    //     document.getElementById("rating").textContent = titleSearchState[y].rating
    //     document.getElementById("length").textContent = titleSearchState[y].runtime
    //     document.getElementById("genre").textContent = titleSearchState[y].genre
    //     document.getElementById("description").textContent = titleSearchState[y].plot
    //   }
    
    return (
<>

<div className="results-main" id="results-main">
    
     
        <div className="result-item">
      <img className="poster" id="poster" src={myarray[0].Poster} alt="movie-poster"></img>
              </div>
              <div className="movie-information">
              <div className="movie-header-section">
              <h4 id="title">{myarray[0].Title}</h4>
              <div className="rating">
              <img src={goldenStar} alt="golden star"></img>
              <p id="rating">{myarray[0].imdbRating}</p>
              </div>
              </div>
              <div className="movie-basics">
              <p id="length">{myarray[0].Runtime}</p>
              <p  id="genre">{myarray[0].Genre}</p>
              <p className="add-to-watchlist"><img src={plus} alt="plus icon"></img><span>Watchlist</span></p>
              </div>
              <p id="description" className="movie-description">{myarray[0].Plot}</p>
              </div> 
             
      
</div> 

</>
    )
}
export default Results;

         // {title: "Title Loding...",
        //  poster: "",
        //  rating: "Rating Loding...",
        //  runtime: "Runtime Loding...",
        //  genre: "Genre Loding...",
        //  plot: "Description Loding..."}
        // titleSearchState.shift()
  
            // setTitleSearchState(prev => prev.map(item => {
            //     return {
            //         title: data.Title,
            //         poster: data.Poster,
            //         rating: data.imdbRating,
            //         runtime: data.Runtime,
            //         genre: data.Genre,
            //         plot: data.Plot
            //     }
            // }))
            // let dataArray = new Array(titleSearchState);

     //      titleSearchState.map((key, item) => { 
        //          document.getElementById("results-main").key = key
        //          document.getElementById("results-main").innerHTML =  `
        //               <div className="result-item">
        //         <img className="poster" id="poster" src=${item.Poster} alt="movie-poster"></img>
        //                 </div>
        //                 <div className="movie-information">
        //                 <div className="movie-header-section">
        //                 <h4 id="title">${item.Title}</h4>
        //                 <div className="rating">
        //                 <img src=${goldenStar} alt="golden star"></img>
        //                 <p id="rating">${item.imdbRating}</p>
        //                 </div>
        //                 </div>
        //                 <div className="movie-basics">
        //                 <p id="length">${item.runtime}</p>
        //                 <p  id="genre">${item.Genre}</p>
        //                 <p className="add-to-watchlist"><img src=${plus} alt="plus icon"></img><a>Watchlist</a></p>
        //                 </div>
        //                 <p id="description" className="movie-description">${item.Plot}</p>
        //                 </div> 
        //               `
                         
        // })

    // function toggleFavorite() {
    //     setContact(prevContact => ({
    //         ...prevContact,
    //         isFavorite: !prevContact.isFavorite
    //     }))
    // }

    // const [movies, setMovies] = useState([
    //     {name: 'movie1', year: '2022'},
    //     {name: 'movie2', year: '2020'}, 
    //   ])
      
    //   return (
    //   <div>
    //   {
    //     movies.map((movie, index) =>
    //     <div key={index}>
    //        <span>{movie.name}</span>
    //        <span>{movie.year}</span>
    //     </div>
    //   )
    //   }
    //   </div>
    //   )

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
    

     // const poster = titleSearchState.map( item => <img className="poster" id="poster" src={item.Poster} alt="movie-poster"></img>)
    // const title = titleSearchState.map( item => <h4 id="title">{item.Title}</h4>)
    // const rating = titleSearchState.map( item => <p id="rating">{item.imdbRating}</p>)
    // const runtime = titleSearchState.map( item => <p id="length">{item.Runtime}</p>)
    // const genre = titleSearchState.map( item => <p  id="genre">{item.Genre}</p>)
    // const plot = titleSearchState.map( item =>  <p id="description" className="movie-description">D{item.Plot}</p>)
    
    
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

    // const getData = async () => {
            //     const data = [];
              
            //     const f1_data = await fetch("https://swapi.dev/api/people/1/")
            //       .then((res) => res.json());
            //     data.push(f1_data.name);
              
            //     const f2_data = await fetch("https://swapi.dev/api/people/2/")
            //       .then((res) => res.json());
            //     data.push(f2_data.name);
                
            //     console.log(data);
            //   };
              
            //   getData();

            // document.getElementById("results-main").innerHTML = `
            // <div className="result-item">
            // <img className="poster" id="poster" src=${data.Poster} alt="movie-poster"></img>
            //   </div>
            //   <div className="movie-information">
            //   <div className="movie-header-section">
            //   <h4 id="title">${data.Title}</h4>
            //   <div className="rating">
            //   <img src=${goldenStar} alt="golden star"></img>
            //   <p id="rating">${data.imdbRating}</p>
            //   </div>
            //   </div>
            //   <div className="movie-basics">
            //   <p id="length">${data.Runtime}</p>
            //   <p  id="genre">${data.Genre}</p>
            //   <p className="add-to-watchlist"><img src=${plus} alt="plus icon"></img><a>Watchlist</a></p>
            //   </div>
            //   <p id="description" className="movie-description">${data.Plot}</p>
            //   </div>
            // `
            // let dataArray = new Array();
            // setTitleSearchState(prev => prev.push(data))

    //         data.map(item => { document.getElementById("results-main").innerHTML = `
    //         <div className="result-item">
    //   <img className="poster" id="poster" src=${item.Poster} alt="movie-poster"></img>
    //           </div>
    //           <div className="movie-information">
    //           <div className="movie-header-section">
    //           <h4 id="title">${item.Title}</h4>
    //           <div className="rating">
    //           <img src=${goldenStar} alt="golden star"></img>
    //           <p id="rating">${item.imdbRating}</p>
    //           </div>
    //           </div>
    //           <div className="movie-basics">
    //           <p id="length">${item.runtime}</p>
    //           <p  id="genre">${item.Genre}</p>
    //           <p className="add-to-watchlist"><img src=${plus} alt="plus icon"></img><a>Watchlist</a></p>
    //           </div>
    //           <p id="description" className="movie-description">${item.Plot}</p>
    //           </div> 
    //         `
                
    //             })

            // data.map(item => {
            // document.getElementById("poster").src = item.Poster
            // document.getElementById("title").textContent = item.Title
            // document.getElementById("rating").textContent = item.imdbRating
            // document.getElementById("length").textContent = item.runtime
            // document.getElementById("genre").textContent = item.Genre
            // document.getElementById("description").textContent = item.Plot
            // })
            

            
            
            // setTitleSearchState(titleSearchState.push({
            //         title: data.Title,
            //         poster: data.Poster,
            //         rating: data.imdbRating,
            //         runtime: data.Runtime,
            //         genre: data.Genre,
            //         plot: data.Plot
            // }))
            
            
            
            // console.log(titleSearchState)