import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';   

const Home = () => {
  const [allMovies] = useState([
    {
      Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      Year: "2003",
      imdbID: "tt0325980",
      Poster: "https://m.media-amazon.com/images/M/MV5BNDhlMzEyNzItMTA5Mi00YWRhLThlNTktYTQyMTA0MDIyNDEyXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg"
    },
    {
      Title: "Black Panther",
      Year: "2018",
      imdbID: "tt1825683",
      Poster:"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
      Title: "Black Swan",
      Year: "2010",
      imdbID: "tt0947798",
      Poster: "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
    },
    {
      Title: "Black Mirror",
      Year: "2011",
      imdbID: "tt2085059",
      Poster: "https://m.media-amazon.com/images/M/MV5BODcxMWI2NDMtYTc3NC00OTZjLWFmNmUtM2NmY2I1ODkxYzczXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
      Title: "Men in Black",
      Year: "1997",
      imdbID: "tt0119654",
      Poster: "https://m.media-amazon.com/images/M/MV5BZmQ0YTdhYzEtMjIxZC00MGFiLTlmNjktZmFlOWE2M2QxOTRhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      Title: "Black Widow",
      Year: "2021",
      imdbID: "tt3480822",
      Poster: "https://m.media-amazon.com/images/M/MV5BZTMyZTA0ZTItYjY3Yi00ODNjLWExYTgtYzgxZTk0NTg0Y2FlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
      Title: "Black Hawk Down",
      Year: "2002",
      imdbID: "tt0265086",
      Poster: "https://m.media-amazon.com/images/M/MV5BYTM3YTQ1M2MtNDEyNC00NzRlLWFmOTgtYjBhNDg2ODNjNTU0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
      Title: "Men in Black II",
      Year: "2002",
      imdbID: "tt0120912",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNDA0NTMxMV5BMl5BanBnXkFtZTYwMDE2NzY2._V1_SX300.jpg"
    },
    {
      Title: "Men in Black³",
      Year: "2012",
      imdbID: "tt1409024",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTU2NTYxODcwMF5BMl5BanBnXkFtZTcwNDk1NDY0Nw@@._V1_SX300.jpg"
    },
    {
      Title: "Black Panther: Wakanda Forever",
      Year: "2022",
      imdbID: "tt9114286",
      Poster: "https://m.media-amazon.com/images/M/MV5BYWY5NDY1ZjItZDQxMy00MTAzLTgyOGQtNTQxYjFiMzZjMjUyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
      Title: "Superman",
      Year: "1978",
      imdbID: "tt0078346",
      Poster:" https://cdn.releases.com/img/image/90eca890-ab86-4075-884e-f92b6e07d384.jpg/200"
    },
    {
      Title:  "Superman Returns",
      Year: "2006",
      imdbID: "tt0348131",
      Poster: "https://cdn.releases.com/img/image/977729ed-18a0-46f8-8257-3620e422ccd1.jpg/200"
    },
    {
      Title: "Batman v Superman: Dawn of Justice",
      Year: "2016",
      imdbID: "tt1868942",
      Poster:  "https://cdn.releases.com/img/image/713b56ca-8077-4396-b162-247f467ec1ea.jpg/200"
    },
    {
      Title: "Spider-Man: No Way Home",
      Year: "2021",
      imdbID: "tt10872600",
      Poster: "https://cdn.releases.com/img/image/9005403f-fa9e-4167-9a21-91083d1ee9f5.jpg/200"
    },
    {
      Title: "Spider-Man: Into the Spider-Verse",
      Year: "2018",
      imdbID: "tt4633694",
      Poster: "https://cdn.releases.com/img/image/b2c12606-0b4f-4ef4-bff7-5cc27bbb1cf0.jpg/200"
    }
  ]);
  
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setFilteredMovies(allMovies);
    } else {
      const results = allMovies.filter(movie => 
        movie.Title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredMovies(results);
    }
  };

  return (
    <div className="home-container">
      
      <h1 className="main-title">Monkeys V.O.D</h1>

      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={inputValue}
          className="search-input"
          placeholder="Search for movies (e.g. black, superman, spider-man)..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <h2 className="sub-title">List of tv shows:</h2>

      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              
              <img 
                src={movie.Poster} 
                alt={movie.Title} 
                className="movie-poster" 
                onClick={() => navigate(`/info/${movie.imdbID}`)}
                style={{ cursor: 'pointer' }}
              />
              
              <h3 className="movie-title">{movie.Title}</h3>
              <p className="movie-year">Year: {movie.Year}</p>
              
              <button onClick={() => navigate(`/info/${movie.imdbID}`)} className="info-button">
                More info
              </button>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', width: '100%', fontSize: '18px', color: '#ff4d4d', marginTop: '20px' }}>
            No movies found matching your search, try again!
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
