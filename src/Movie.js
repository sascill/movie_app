import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './movie.css';

  function MoviePoster({poster, alt}){
    return(
      <img src={poster} alt={alt} title={alt} className="Movie__Poster"></img>
    )
  }

  MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
  }

  function Movie({title, poster, genres, synopsis}){
    return(
      <div className="Movie">
        <div className="Movie__Columns">
          <MoviePoster poster={poster} alt={title}/>
        </div>
        <div className="Movie__Columns">
         <h1>{title}</h1>
        <div className="Movie__Genres">
         {genres.map((genres, index) => <MovieGenrel genres={genres} key={index} />)}
        </div>
        <div className="Movie__Synopsis">
        <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
        </div>
        </div>
      </div>
    )
  }

  Movie.propTypes = {
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
      synopsis: PropTypes.string.isRequired
  }

  function MovieGenrel({genres}){
    return(
      <span className="Movie__Genre">{genres}</span>
    )
  }

  MovieGenrel.propTypes = {
    genres: PropTypes.string.isRequired
}

export default Movie;