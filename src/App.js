import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import PrivateRoute from "config/privateRoute";
import AdminLayout from "layouts/Admin.jsx";
import Login from "views/authentication/Login";


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={(props) => <Login {...props} />} />
            
        
        <PrivateRoute
          path="/admin"
          component={(props) => <AdminLayout {...props} />}
        />        
        
        <Route exact path="*" render={(props) => <Login {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}
