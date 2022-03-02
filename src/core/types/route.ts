import type React from 'react'

export interface RouteConfig {
  /**
   * Link title
   */
  title?: string
  /**
   * Link path
   */
  pathname: string
  /**
   * Route component.
   */
  Component: React.ComponentType<any>
  /**
   * Component props.
   */
  getProps?(): Record<string, any>
}

/**
 * A link item.
 */
export interface LinkItem {
  /**
   * Link path.
   */
  pathname: string
  /**
   * Link title.
   */
  title?: React.ReactNode
}

/**
 * A route item.
 */
export interface RouteItem {
  /**
   * Route path.
   */
  pathname: string
  /**
   * Route element
   */
  element: React.ReactElement | null
}
