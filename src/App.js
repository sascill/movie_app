import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';
import InfiniteLoader from "react-infinite-loader";



class App extends Component {
  state = {
    num:1,
    movies:[],
    maximumPage:20
  }
  
  componentDidMount(){
    this._getMovies()
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie,index) => {
      return (
      <Movie 
       title={movie.title_english}
       poster={movie.medium_cover_image}
       key={index} 
       genres={movie.genres}
       synopsis={movie.synopsis}
       id={movie.id}
      />
      );
  });
  return movies
};

 _getMovies = async () => {
  let items = this.state.movies.slice();
  const movies = await this._callApi();
  items = items.concat(movies);
  this.setState({
    movies: items
  })
}

_callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
}

_loaditems = () => {
  if(this.state.num < this.state.maximumPage){
    this.setState({
      num: this.state.num + 1,
    });
    this._getMovies(this.state.num);
  }
  
};

  render(){ 
    const {movies} = this.state;
    return(
    <div className={movies ? "App" : "App-loading"}>
      {this.state.movies.length !== 0
          ? this._renderMovies()
          : "Loading..."}
    <div>
    <InfiniteLoader onVisited = {() => this._loaditems()} />
    </div>
    <div>
    
    </div>
    </div>
    );
  }
}



export default App;
