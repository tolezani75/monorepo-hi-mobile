import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import createStore from "./createStore";
import persistedReducers from "./persistReducers";

import "../config/reactotron";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const development = process.env.NODE_ENV === "development";

const sagaMonitor = development ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistedReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store };
