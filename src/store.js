// Importing Necessary Functions and Files:
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configuring the Store:
// Create a Redux store using configureStore from Redux Toolkit
const store = configureStore({
    // Define the root reducer object
    reducer: {
        // 'cart' is the name of the slice in the store, and it's managed by cartReducer
        cart: cartReducer,
    },
});

export default store; // Export the store for use in your application
