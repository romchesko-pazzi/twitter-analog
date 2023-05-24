import { rootWatcher } from 'src/store/saga';

import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

export type RootStateType = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);
