import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Appointments from './components/Appointments'

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="App">
          <header className="App-header">
            <Route path="/" exact component={Home} />
            <Route path="/appointments" exact component={Appointments} />
          </header>
        </div>
      </Router>
    )
  }
}

export default App
