import { combineReducers } from 'redux';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, WebStorage } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';
import { Persistor } from 'redux-persist/lib/types';


type PersistConfigType = {
    key: string;
    storage: WebStorage;
    whitelist: string[];
}

const persistConfig: PersistConfigType = {
    key: 'root',
    storage,
    whitelist: ['user', 'cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: EnhancedStore = configureStore({
    reducer: persistedReducer,    
    middleware : [ thunk ]
});

export const persistor: Persistor = persistStore(store);

export type RootType = ReturnType<typeof store.getState>;