import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { persistor, store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
