import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RoleBasedRoute = ({ role, component: Component, ...rest }) => {
  // Ganti dengan fungsi yang memeriksa role pengguna dari token JWT
  const userRole = localStorage.getItem("userRole");

  return (
    <Route
      {...rest}
      render={props =>
        userRole === role ? (
          <Component {...props} />
        ) : (
          <Redirect to="/unauthorized" />
        )
      }
    />
  );
};

export default RoleBasedRoute;