//** REDUX import for creating a state slize */
    import { createSlice } from '@reduxjs/toolkit'

//** Initial slice state */
//** Holds an array of all the products from /data/fireworks/products.js to be displayed on LandingPage.js */
    const initialState = {
        products: [],
    }

//** Create the slice and determine all avaiable actions to modify state */
    export const productSlice = createSlice({
        name: 'productList',
        initialState,
        reducers: {
            setProductList: (state, action) => {
                state.products = action.payload;
            },
        },
    })

//** Export the actions to be used in other components */
    export const { setProductList } = productSlice.actions;

//** Export the slice itself to add it to redux store */
    export default productSlice.reducer;