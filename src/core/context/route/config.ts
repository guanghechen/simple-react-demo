import loadable from '@loadable/component'
import type { IRouteConfigRaw } from './types'

export const rawRouteConfigs: IRouteConfigRaw[] = [
  {
    pathname: '/',
    Component: loadable(() => import('@/page/Home')),
  },
  {
    pathname: '/page/*',
    children: [
      {
        pathname: '/HelloWorld',
        Component: loadable(() => import('@/page/HelloWorld')),
      },
    ],
  },
]
