import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import 'styles/global.css'

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
