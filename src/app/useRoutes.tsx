import loadable from '@loadable/component'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CustomErrorBoundary } from '@/core/component/CustomErrorBoundary'
import type { IRouteConfig } from '@/core/context/route'
import { routeConfigs } from '@/core/context/route'

const NotFoundPage = loadable(() => import('@/page/404'))

const CustomRoutes: React.FC<{ configs: IRouteConfig[] | undefined }> = ({ configs }) => {
  if (configs === undefined || configs.length <= 0) return null

  const hasNotFoundPage = !!configs.find(({ pathname }) => pathname === '*')
  return (
    <Routes>
      {configs.map(({ pathname, Component, children }) => (
        <Route
          key={pathname}
          path={pathname}
          element={
            <CustomErrorBoundary>
              <Component>
                <CustomRoutes configs={children} />
              </Component>
            </CustomErrorBoundary>
          }
        />
      ))}
      {!hasNotFoundPage && <Route key="*" path="*" element={<NotFoundPage />} />}
    </Routes>
  )
}

export default function useRoutes(): React.ReactNode {
  const routes = React.useMemo(() => <CustomRoutes configs={routeConfigs} />, [])
  return routes
}
