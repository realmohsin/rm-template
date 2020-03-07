import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import App from './App'
import store from './store'
import history from './history'
import globalStyles from './styles/globalStyles'
import theme from './styles/theme'

const app = (
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <App />
      </ThemeProvider>
    </Router>
  </Provider>
)

render(app, document.getElementById('root'))
