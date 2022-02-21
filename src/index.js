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
