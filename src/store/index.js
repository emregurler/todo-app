import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

// import reducers
import todoReducer from './services/todo/reducer';

// import sagas
import todoSaga from './services/todo/saga';

// add reducers here
const combinedReducers = combineReducers({
  todoReducer,
});

// add sagas to array
const sagas = [todoSaga];

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(combinedReducers, enhancer);
sagas.forEach((saga) => sagaMiddleware.run(saga));

export default store;
