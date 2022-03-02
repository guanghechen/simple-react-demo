import type React from 'react'
import type { IRouteAction } from './action'
import { RouteActionType } from './action'
import type { IRouteState } from './state'

export const reducer: React.Reducer<IRouteState, IRouteAction> = (
  state: IRouteState,
  action: IRouteAction,
): IRouteState => {
  switch (action.type) {
    case RouteActionType.FORCE_UPDATE:
      return { ...state, routes: action.payload }
    default:
      return state
  }
}
