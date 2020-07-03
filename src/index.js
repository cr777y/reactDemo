import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import TodoList from "./TodoList";
import { Provider } from "react-redux";
import store from "./store";
import { persistor } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { mainRouter } from "./router";
import { userRouter } from "./router";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "./Layout";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 
      <Router>
        <Switch>
          <Route
            path="/user"
            render={(RouterProps) => {
              console.log("权限验证");
              let isLogin = store.getState().login.isLogin;
              if (!isLogin) {
                return <Redirect to="/login" />;
              }
              return <Layout route={userRouter} />;
            }}
          />
          {mainRouter.map((item, index) => {
            return (
              <Route
                key={item + index}
                path={item.pathname}
                component={item.compoents}
              />
            );
          })}
          <Redirect to="/login" from="/" exact />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
