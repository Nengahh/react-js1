import React from "react";

export default function PrivateOutlet({pages}) {
  const auth = localStorage.getItem('isAuthenticated');
  console.log(auth)
  return auth ? pages : <Navigate to="/login" />;
  // const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
  //   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  // };
}
