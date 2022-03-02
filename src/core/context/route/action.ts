import type { IRouteItem } from './types'

export enum RouteActionType {
  // FORCE UPDATE routes
  FORCE_UPDATE = 'route/force-update',
}

export interface IRouteAction {
  type: RouteActionType.FORCE_UPDATE
  payload: IRouteItem[]
}
