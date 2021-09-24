import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isAuth: isAuth, component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (isAuth) {
            return <Component />;
          } else {
            return (
              <Redirect
                to="/admin/login"
              />
            // window.location.replace("/admin/login")
            );
          }
        }}
      />
    </div>
  );
};

export default ProtectedRoute;