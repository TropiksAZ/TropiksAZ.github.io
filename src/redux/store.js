//** Imports for configuring REDUX store */
    import { configureStore } from '@reduxjs/toolkit';
    import storage from 'redux-persist/lib/storage'; //* If left alone, defaults to localStorage for web */
    import {
        persistStore,
        persistReducer,
        FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
    } from 'redux-persist'
    import { combineReducers } from 'redux';

//** Imports for prepared state slices */
    import categorySlice from './slices/categorySlice';
    import selectedCategorySlice from './slices/select/selectedCategorySlice';
    import selectedPriceSlice from './slices/select/selectedPriceSlice';
    import productSlice from './slices/productSlice';

//** Configurate redux-persist for persisting state in localStorage(default) */
    const persistConfig = {
        key: 'root',
            version: 1,
        storage,
    };

//** Create a list of all the state slices and combine them into one (reference name: slice import) */
    const reducers = combineReducers({
        categoryList: categorySlice,
        selectedCategory: selectedCategorySlice,
        selectedPrice: selectedPriceSlice,
        productList: productSlice,
    });

//** Persist the slice states based on configurations */
    const persistedReducer = persistReducer(persistConfig, reducers);

//** Configure the store itself, based on all the slices and configurations */
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    });

//** Prepare a variable with the store and persistor so that you can wrap it around your App */
//** let so that it can be updated when dispatching reduces/slice state actions */
    let persistor = persistStore(store);

//** Export both */
    export { store, persistor };