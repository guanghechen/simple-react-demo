import React from 'react'
import { rawRouteConfigs } from './config'
import type { IRouteConfig, IRouteConfigRaw } from './types'

export * from './action'
export * from './context'
export * from './reducer'
export * from './state'
export * from './types'
export * from './Provider'

export const routeConfigs: IRouteConfig[] = rawRouteConfigs.map(normalizeRouteConfig)

function normalizeRouteConfig(data: IRouteConfigRaw): IRouteConfig {
  const children = (data.children ?? []).map(normalizeRouteConfig)
  return {
    pathname: data.pathname,
    Component: data.Component ?? React.Fragment,
    children,
  }
}
