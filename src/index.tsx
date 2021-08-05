import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from "@sentry/react"
import { Integrations } from "@sentry/tracing";
import './index.css'
import App from './App'

if (process.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    environment:  process.env.REACT_APP_ENVIRONMENT,

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
