import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieInfo = () => {
  const { id } = useParams(); // קורא את ה-ID מהכתובת למעלה
  const navigate = useNavigate();

  // מילון נתונים פנימי קבוע המכיל את כל 15 הסרטים והתמונות שלא נחסמים לעולם!
  const moviesData = {
    "tt0325980": {
      Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      Runtime: "143 min",
      imdbRating: "8.1",
      Genre: "Action, Adventure, Fantasy",
      Actors: "Johnny Depp, Geoffrey Rush, Orlando Bloom",
      Plot: "An intrepid blacksmith teams up with an eccentric pirate captain to save his love from an undead pirate crew.",
      Poster: "https://m.media-amazon.com/images/M/MV5BNDhlMzEyNzItMTA5Mi00YWRhLThlNTktYTQyMTA0MDIyNDEyXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg"
    },
    "tt1825683": {
      Title: "Black Panther",
      Runtime: "134 min",
      imdbRating: "7.3",
      Genre: "Action, Adventure, Sci-Fi",
      Actors: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o",
      Plot: "T'Challa, heir to the hidden kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    "tt0947798": {
      Title: "Black Swan",
      Runtime: "108 min",
      imdbRating: "8.0",
      Genre: "Drama, Thriller",
      Actors: "Natalie Portman, Mila Kunis, Vincent Cassel",
      Plot: "A committed dancer wins the lead role in a production of Tchaikovsky's 'Swan Lake' only to find herself struggling to maintain her sanity.",
      Poster: "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
    },
    "tt2085059": {
      Title: "Black Mirror",
      Runtime: "60 min",
      imdbRating: "8.7",
      Genre: "Drama, Mystery, Sci-Fi",
      Actors: "Daniel Lapaine, Hannah John-Kamen, Michaela Coel",
      Plot: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
      Poster:"https://m.media-amazon.com/images/M/MV5BODcxMWI2NDMtYTc3NC00OTZjLWFmNmUtM2NmY2I1ODkxYzczXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    "tt0119654": {
      Title: "Men in Black",
      Runtime: "98 min",
      imdbRating: "7.3",
      Genre: "Action, Adventure, Comedy",
      Actors: "Tommy Lee Jones, Will Smith, Linda Fiorentino",
      Plot: "A cyberneticist and a street-smart cop join a secret organization that monitors extraterrestrial activity on Earth.",
      Poster:  "https://m.media-amazon.com/images/M/MV5BZmQ0YTdhYzEtMjIxZC00MGFiLTlmNjktZmFlOWE2M2QxOTRhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    "tt3480822": {
      Title: "Black Widow",
      Runtime: "134 min",
      imdbRating: "6.7",
      Genre: "Action, Adventure, Sci-Fi",
      Actors: "Scarlett Johansson, Florence Pugh, David Harbour",
      Plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
      Poster: "https://m.media-amazon.com/images/M/MV5BZTMyZTA0ZTItYjY3Yi00ODNjLWExYTgtYzgxZTk0NTg0Y2FlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    "tt0265086": {
      Title: "Black Hawk Down",
      Runtime: "144 min",
      imdbRating: "7.7",
      Genre: "Drama, History, War",
      Actors: "Josh Hartnett, Ewan McGregor, Tom Sizemore",
      Plot: "The story of 160 elite U.S. soldiers who dropped into Mogadishu, Somalia in 1093 to capture two top lieutenants of a renegade warlord.",
      Poster: "https://m.media-amazon.com/images/M/MV5BYTM3YTQ1M2MtNDEyNC00NzRlLWFmOTgtYjBhNDg2ODNjNTU0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    "tt0120912": {
      Title: "Men in Black II",
      Runtime: "88 min",
      imdbRating: "6.2",
      Genre: "Action, Adventure, Comedy",
      Actors: "Tommy Lee Jones, Will Smith, Rip Torn",
      Plot: "Agent J needs help, so he seeks out and wipes the memory of his former partner, Agent K, to save the world from an alien threat.",
      Poster:  "https://m.media-amazon.com/images/M/MV5BMTMxNDA0NTMxMV5BMl5BanBnXkFtZTYwMDE2NzY2._V1_SX300.jpg"
    },
    "tt1409024": {
      Title: "Men in Black 3",
      Runtime: "106 min",
      imdbRating: "6.8",
      Genre: "Action, Adventure, Comedy",
      Actors: "Will Smith, Tommy Lee Jones, Josh Brolin",
      Plot: "Agent J travels back in time to 1969 to stop an alien assassin from killing his partner, Agent K, and changing history.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTU2NTYxODcwMF5BMl5BanBnXkFtZTcwNDk1NDY0Nw@@._V1_SX300.jpg"
    },
    "tt9114286": {
      Title: "Black Panther: Wakanda Forever",
      Runtime: "161 min",
      imdbRating: "6.7",
      Genre: "Action, Adventure, Drama",
      Actors: "Letitia Wright, Lupita Nyong'o, Danai Gurira",
      Plot: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
      Poster:"https://m.media-amazon.com/images/M/MV5BYWY5NDY1ZjItZDQxMy00MTAzLTgyOGQtNTQxYjFiMzZjMjUyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    "tt0078346": {
      Title: "Superman",
      Runtime: "143 min",
      imdbRating: "7.3",
      Genre: "Action, Adventure, Sci-Fi",
      Actors: "Christopher Reeve, Margot Kidder, Gene Hackman",
      Plot: "An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home's first and greatest superhero.",
      Poster: " https://cdn.releases.com/img/image/90eca890-ab86-4075-884e-f92b6e07d384.jpg/200"
    },
    "tt0348131": {
      Title: "Superman Returns",
      Runtime: "154 min",
      imdbRating: "6.1",
      Genre: "Action, Adventure, Sci-Fi",
      Actors: "Brandon Routh, Kate Bosworth, Kevin Spacey",
      Plot: "Superman returns to Earth after a long absence, only to find that Lois Lane has moved on and Lex Luthor is plotting a new scheme.",
      Poster: "https://cdn.releases.com/img/image/977729ed-18a0-46f8-8257-3620e422ccd1.jpg/200"
    },
    "tt1868942": {
      Title: "Batman v Superman: Dawn of Justice",
      Runtime: "151 min",
      imdbRating: "6.5",
      Genre: "Action, Adventure, Sci-Fi",
      Actors: "Ben Affleck, Henry Cavill, Amy Adams",
      Plot: "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel while the world wrestles with what kind of hero it really needs.",
      Poster:"https://cdn.releases.com/img/image/713b56ca-8077-4396-b162-247f467ec1ea.jpg/200"
    },
    "tt10872600": {
      Title: "Spider-Man: No Way Home",
      Runtime: "148 min",
      imdbRating: "8.2",
      Genre: "Action, Adventure, Sci-Fi",
      Actors: "Tom Holland, Zendaya, Benedict Cumberbatch",
      Plot: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
      Poster:  "https://cdn.releases.com/img/image/9005403f-fa9e-4167-9a21-91083d1ee9f5.jpg/200"
    },
    "tt4633694": {
      Title: "Spider-Man: Into the Spider-Verse",
      Runtime: "117 min",
      imdbRating: "8.4",
      Genre: "Animation, Action, Adventure",
      Actors: "Shameik Moore, Jake Johnson, Hailee Steinfeld",
      Plot: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      Poster: "https://cdn.releases.com/img/image/b2c12606-0b4f-4ef4-bff7-5cc27bbb1cf0.jpg/200"
    }
  };

  const movie = moviesData[id] || moviesData["tt0325980"];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }}>
      
      {/* התוכן המרכזי של העמוד על רקע לבן כפי שנדרש */}
      <div style={{ flex: 1, padding: '40px 20px', textAlign: 'center' }}>
        
        {/* פוסטר הסרט הצבעוני והמקורית של ויקיפדיה */}
        <img 
          src={movie.Poster} 
          alt={movie.Title} 
          style={{ width: '260px', height: '380px', objectFit: 'cover', borderRadius: '4px', marginBottom: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
        />

        {/* שם הסרט בשחור */}
        <h2 style={{ fontSize: '28px', margin: '0 0 15px 0', color: '#000000', fontWeight: 'bold' }}>{movie.Title}</h2>
        
        {/* פרטי הסרט מוצגים ישירות אחד מתחת לשני במרכז בדיוק כמו בשקופית */}
        <p style={{ margin: '6px 0', fontSize: '15px', color: '#333333' }}><strong>Runtime:</strong> {movie.Runtime}</p>
        <p style={{ margin: '6px 0', fontSize: '15px', color: '#333333' }}><strong>Rating:</strong> {movie.imdbRating}</p>
        <p style={{ margin: '6px 0', fontSize: '15px', color: '#333333' }}><strong>Genre:</strong> {movie.Genre}</p>
        <p style={{ margin: '6px 0', fontSize: '15px', color: '#333333', maxWidth: '600px', margin: '6px auto' }}><strong>Plot:</strong> {movie.Plot}</p>
        <p style={{ margin: '6px 0', fontSize: '15px', color: '#333333', maxWidth: '600px', margin: '6px auto 25px auto' }}><strong>Actors:</strong> {movie.Actors}</p>

        {/* כפתור חזור שחור קטן בתחתית */}
        <button 
          onClick={() => navigate('/')}
          style={{ padding: '6px 20px', backgroundColor: '#000000', color: '#ffffff', border: 'none', cursor: 'pointer', fontSize: '14px', borderRadius: '2px' }}
        >
          Back to list
        </button>
      </div>

      {/* פס שחור תחתון פוטר (Footer) כפי שנדרש בעיצוב */}
      <footer style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '15px 20px', textAlign: 'center', fontSize: '14px', fontFamily: 'sans-serif' }}>
        2Monkeys.co.il © 2011-2023
      </footer>

    </div>
  );
};

export default MovieInfo;
