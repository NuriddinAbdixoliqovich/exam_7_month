// import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slice/cartSlice";

// import authReducer from "./slice/authSlice";

// const rootReducer = {
//     cart: cartReducer
// }



// // const store = configureStore({
// //     reducer: {
// //       auth: authReducer,
      
// //     },
// //   });

// const store = configureStore({
//     reducer: rootReducer
// })



// export default store


import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import todoReducer from './todoSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
export default store;

