import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import './App.scss'

const App = (): React.ReactElement => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

export default App
