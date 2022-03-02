export interface IRouteItem {
  /**
   * Link title
   */
  title: string
  /**
   * Link path
   */
  pathname: string
  /**
   * Children items
   */
  children: IRouteItem[]
}

export interface IRouteConfig {
  /**
   * Link path
   */
  pathname: string
  /**
   * Route component.
   */
  Component: React.ComponentType<any>
  /**
   * Children configs.
   */
  children: IRouteConfig[]
}

export type IRouteConfigRaw = Pick<IRouteConfig, 'pathname'> & {
  title?: string
  Component?: React.ComponentType<any>
  children?: IRouteConfigRaw[]
}
