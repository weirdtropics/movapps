import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './style.scss'

import HomePage from './components/HomePage.js'
import MoviesList from './components/MoviesList.js'
import Nav from './components/Navigation.js'


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <Nav />
          <Switch>
            <Route path="/movies/:id" component={MoviesList} />
            <Route path="/" component={HomePage}/>
          </Switch>
        </main>
      </BrowserRouter>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
