import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RouteContextProvider } from '@/core/context/route'
import useRoutes from './useRoutes'
import './index.styl'

export default function App(): React.ReactElement {
  const routes = useRoutes()

  return (
    <RouteContextProvider>
      <Router>{routes}</Router>
    </RouteContextProvider>
  )
}
