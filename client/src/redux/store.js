import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./root-saga";
const SagaMiddleWare = createSagaMiddleWare();
const middlewares = [SagaMiddleWare];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
SagaMiddleWare.run(rootSaga);
export const persistor = persistStore(store);

export default { store, persistor };
