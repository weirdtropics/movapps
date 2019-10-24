import React from 'react'
import axios from 'axios'
import debounce from 'lodash/debounce'

import SearchResults from './SearchResults'

class HomePage extends React.Component {
  constructor(){
    super()
    this.state = {
      searched: '',
      search: '',
      results: [],
      error: ''
    }

    this.delayedCallback = debounce(this.apiCall, 1000)

    this.handleChange =this.handleChange.bind(this)
    this.handleSubmit =this.handleSubmit.bind(this)
  }

  componentDidMount(){
    axios.get('http://www.omdbapi.com/?apikey=4b601aab&s=*react*&type=movie&page=1')
      .then(res => this.setState({results: res.data.Search}))
  }

  apiCall() {
    axios.get(`https://www.omdbapi.com/?s=${this.state.search}&type=movie&apikey=4b601aab`)
      .then(res => {
        if(res.data.Response === 'True') this.setState({results: res.data.Search, error: '', searched: this.state.search})
        else this.setState({results: [], error: res.data.Error, searched: this.state.search})
        console.log(this.state)
      })
  }

  handleChange({target: { name, value }}){
    this.setState({ ...this.state, [name]: value })
    this.delayedCallback()
  }
  handleSubmit(e){
    e.preventDefault()
  }
  render() {
    console.log(this.state.search)
    return(
      <div>
        <section className="section">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Search for movie</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Search for movie" name="search" onChange={this.handleChange}/>
                </div>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Search by year</label>

                </div>
              </form>
            </form>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="title is-1">Result:</h2>

            <div className="columns is-multiline">
              {this.state.results && this.state.results.map(result =>
                <div className="column is-one-fifth" key={result.imdbID}>
                  <SearchResults {...result}/>
                </div>
              )}
              <div className="column">
                <p>{this.state.error}</p>
              </div>

            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomePage
