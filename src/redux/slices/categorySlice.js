//** REDUX import for creating a state slize */
    import { createSlice } from '@reduxjs/toolkit'

//** Initial slice state */
//** Holds an array of all the avaiable product categories in data/fireworks/products.js to be used for <select> */
    const initialState = {
        categories: [],
    }

//** Create the slice and determine all avaiable actions to modify state */
    export const categorySlice = createSlice({
        name: 'categoryList',
        initialState,
        reducers: {
            setCategoryList: (state, action) => {
                state.categories = action.payload;
            },
        },
    })

//** Export the actions to be used in other components */
    export const { setCategoryList } = categorySlice.actions;

//** Export the slice itself to add it to redux store */
    export default categorySlice.reducer;