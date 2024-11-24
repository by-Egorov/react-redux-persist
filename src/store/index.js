import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from '@redux-devtools/extension'
import { postReducer } from './postSlice.js'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  posts: postReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools())
export const persistor = persistStore(store)