import React from 'react'
import { RouteContextType } from './context'
import type { IRouteContext } from './context'
import { reducer } from './reducer'
import { defaultState } from './state'

export interface IRouteContextProvider {
  children: React.ReactNode
}

export const RouteContextProvider: React.FC<IRouteContextProvider> = props => {
  const [state, dispatch] = React.useReducer(reducer, defaultState)
  const context = React.useMemo<IRouteContext>(() => ({ state, dispatch }), [state, dispatch])
  return <RouteContextType.Provider value={context}>{props.children}</RouteContextType.Provider>
}
