import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import expireIn from 'redux-persist-transform-expire-in'

import { app } from './app'

const willExpireIn = 24 * 60 * 60 * 1000 * 30 // expire in one month
const expirationKey = 'expirationKey'

const persistConfig = {
    key: 'root',
    storage,
    transforms: [expireIn(willExpireIn, expirationKey, [])],
}
export const rootReducer = combineReducers({
    [app.name]: app.reducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    // reducer: rootReducer,
    // use persist
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export const persistor = persistStore(store)


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch


