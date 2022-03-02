import { rawRouteConfigs } from './config'
import type { IRouteConfigRaw, IRouteItem } from './types'

export interface IRouteState {
  routes: IRouteItem[]
}

const normalizeRouteItem = (config: IRouteConfigRaw, prefixPath: string): IRouteItem => {
  const currentPathname = (prefixPath + config.pathname).replaceAll('*', '').replace(/\/+$/, '/')
  const children = (config.children ?? []).map(conf => normalizeRouteItem(conf, currentPathname))
  return {
    title: config.title ?? config.pathname.replace(/\*$/, '').replace(/^\//, ''),
    pathname: currentPathname,
    children,
  }
}

export const defaultState: IRouteState = {
  routes: rawRouteConfigs
    .map(conf => normalizeRouteItem(conf, ''))
    .filter(conf => conf.pathname !== '*' && conf.pathname !== '/'),
}
