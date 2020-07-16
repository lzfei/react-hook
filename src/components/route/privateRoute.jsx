import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      { ...rest }
      render = {props => (
        Cookies.get('access_token')
          ? <Component {...props} />
          : <Redirect 
              to={{
                pathname: '/login',
                state: { from: props.location}
              }}>  
            </Redirect>
      )}
    >
    </Route>
  )
}
export default PrivateRoute