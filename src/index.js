/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Soft UI Context Provider
import { MaterialUIControllerProvider } from "context";
import { Provider } from "react-redux";
import store from "./store";
import { ModalProvider } from "./components/Modal";

ReactDOM.render(
  <Provider store={store}>
    <ModalProvider>
      <BrowserRouter>
        <MaterialUIControllerProvider>
          <App />
        </MaterialUIControllerProvider>
      </BrowserRouter>
    </ModalProvider>
  </Provider>,
  document.getElementById("root")
);
