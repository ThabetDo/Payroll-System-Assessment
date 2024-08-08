import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import settingsReducer from "./slices/settingsSlice";
import employeesReducer from "./slices/employeesSlice";
import salariesReducer from "./slices/salariesSlice";
import {persistReducer, persistStore} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist/es/constants';

// Create the root reducer
const rootReducer = combineReducers({
    auth: authReducer,
    employees: employeesReducer,
    salaries: salariesReducer,
    settings: settingsReducer,
});
// Persist config
const persistConfig = {
    key: "root",
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Define RootState and AppDispatch types for use in the application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create a persistor
const persistor = persistStore(store);

// Export the store and persistor
export {store, persistor};