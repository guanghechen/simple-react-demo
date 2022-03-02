import * as React from 'react'
import type { IRouteAction } from './action'
import { defaultState } from './state'
import type { IRouteState } from './state'

export interface IRouteContext {
  /**
   * Route state.
   */
  state: IRouteState
  /**
   * Update the context data.
   */
  dispatch: React.Dispatch<IRouteAction>
}

export const RouteContextType: React.Context<IRouteContext> = React.createContext({
  state: { ...defaultState },
  dispatch: (_action: IRouteAction): void => {
    throw new Error('[RouteContext] dispatch not available yet.')
  },
})

export const useRouteContext = (): IRouteContext => {
  return React.useContext(RouteContextType)
}
