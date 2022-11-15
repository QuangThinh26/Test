import { Layout } from "antd";
import { Redirect, Route, useLocation } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { keys, paths } from "../constants";
import Sider from "../pages/Sider";
import { useEffect } from "react";
import Home from "../pages/Home";

export const AppRouter = () => {
  useEffect(() => {
  }, [])
  
  

  return (
    <BrowserRouter>
      <Layout>
          <Layout.Content>
            {/* <Header/> */}
            <Switch>
              <PublicRoute exact path={paths.home} component={Home} />
            </Switch>
          </Layout.Content>
      </Layout>
    </BrowserRouter>
  );
};


export const PublicRoute = ({ component: Component, ...rest }) => {
  let isAuth = !!localStorage.getItem(keys.access_token);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Redirect to={paths.room_reading} /> : <Component {...props} />
      }
    />
  );
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  let isAuth = !!localStorage.getItem(keys.access_token);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to={paths.login} />
      }
    />
  );
};