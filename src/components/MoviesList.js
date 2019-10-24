import React from 'react'
import axios from 'axios'


class MoviesList extends React.Component {
  constructor(){
    super()
    this.state = {
      search: '',
      movie: [],
      errors: {}
    }
  }
  componentDidMount(){
    axios.get(`https://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=4b601aab`)
      .then(res => this.setState({movie: res.data}))
      .catch(err => this.setState({ errors: err}))


  }
  render() {
    const {Title, Year, Type, imdbRating, imdbID, Metascore, Website, Poster, Rated, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, BoxOffice, DVD} = this.state.movie
    if(!this.state) return null
    return(
      <div className="section">
        <div className="container">
          <h1 className="title is-1"> {Title} <span>({Year})</span></h1>
          <div className="scores">
            <p><strong>Imdb Rating:</strong> {imdbRating}   <strong>Metascore:</strong> {Metascore}</p>
          </div>
          <div className="columns">
            <div className="column poster">
              <figure className="image">
                <img src= {Poster} />
              </figure>
            </div>
            <div className="column">
              <p><strong>Director:</strong> {Director}</p>
              <p><strong>Metascore:</strong> {Metascore}</p>
              <p><strong>imdbID:</strong> {imdbID}</p>
              <p><strong>Year:</strong> {Year}</p>
              <p><strong>Rated:</strong> {Rated}</p>
              <p><strong>Type:</strong> {Type}</p>
              <p><strong>Website:</strong> {Website}</p>
              <p><strong>Runtime:</strong> {Runtime}</p>
              <p><strong>Genre:</strong> {Genre}</p>
              <p><strong>Writer:</strong> {Writer}</p>
              <p><strong>Actors:</strong> {Actors}</p>
              <p><strong>Plot:</strong> {Plot}</p>
              <p><strong>Language:</strong> {Language}</p>
              <p><strong>Country:</strong> {Country}</p>
              <p><strong>BoxOffice:</strong> {BoxOffice}</p>
              <p><strong>DVD:</strong> {DVD}</p>

            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default MoviesList
