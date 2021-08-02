import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Top from './pages/Top/index'

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Top} />
      </Router>
    </div>
  )
}

export default App
