import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Top from './pages/Top/index'

function App(): JSX.Element {
  return (
    <div className="App">
      <Helmet
        htmlAttributes={{ lang: 'ja' }}
        title="React Tokyo Olympic 2020"
        meta={[{ charSet: 'utf-8' }]}
        link={[{ rel: 'icon', type: 'image/png', href: 'favicon.ico' }]}
      />
      <Router>
        <Route exact path="/" component={Top} />
      </Router>
    </div>
  )
}

export default App
