import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

import authentication from '../modules/authentication/slices';
import crossword from '../modules/crossword/slices';
import wordle from '../modules/wordle/slices';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['crossword', 'wordle'],
};

const rootReducer = combineReducers({
  authentication,
  crossword,
  wordle,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export default store;
