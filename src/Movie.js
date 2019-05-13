import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './movie.css';
import View from './View';
import Modal from 'react-awesome-modal';



  function MoviePoster({poster, alt}){
    return(
      <img src={poster} alt={alt} title={alt} className="Movie__Poster"></img>
    )
  }

  MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
  }
  
  class Movie extends Component{
    
    constructor(props) {
      super(props);
      this.state = {
          visible : false
      }
  }
 
  openModal() {
      this.setState({
          visible : true
      });
  }

  closeModal() {
      this.setState({
          visible : false
      });
  }
  render(){
    return(
      <div className="Movie">
          <div className="Movie__Columns" onClick={() => this.openModal()}>
            <MoviePoster poster={this.props.poster} alt={this.props.title}/>
          </div>
          <div className="Movie__Columns" onClick={() => this.openModal()}>   
          <h1><a href="#" onClick={function(e){
            e.preventDefault();
          }}>{this.props.title}</a></h1>
          <div className="Movie__Genres" onClick={() => this.openModal()}>
          {this.props.genres.map((genres, index) => <MovieGenrel genres={genres} key={index}/>)}
          </div>
          <div className="Movie__Synopsis" onClick={() => this.openModal()}>
          <LinesEllipsis
                      text={this.props.synopsis}
                      maxLine='3'
                      ellipsis='...'
                      trimRight
                      basedOn='letters'
                      />   
          </div>
        </div>
        <Modal visible={this.state.visible} width="80%" height="90%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <View  
                          title={this.props.title}
                          poster={this.props.poster}
                          genres={this.props.genres}
                          synopsis={this.props.synopsis}
                          id={this.props.id}></View>
                    <a href="javascript:void(0);" onClick={() => this.closeModal()}>닫기</a>
                    </div>
                </Modal>
      </div>
      
    )
  }
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