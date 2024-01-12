import React from 'react'
// import { Navigate } from 'react-router-dom'
import { PrivateRouteProps } from '@types/PrivateRouteType';

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: RouteComponent}) => {
  // const user = useSelector(selectCurrentUser)
  // const isAuthenticated = useSelector(selectIsAuthenticated)
  // const userHasRequiredRole = user && roles.includes(user.role) ? true : false

  // if (isAuthenticated && userHasRequiredRole) {
  //   return <RouteComponent />
  // }

  // if (isAuthenticated && !userHasRequiredRole) {
  //   return <AccessDenied />
  // }

  return <RouteComponent />

  // return <Navigate to="/" />
}
