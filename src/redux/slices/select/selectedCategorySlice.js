//** REDUX import for creating a state slize */
    import { createSlice } from '@reduxjs/toolkit'

//** Initial slice state */
//** This state is for holding the selected product category (from <select)) to be displayed on the LandingPage.js */
    const initialState = {
        selected: "baterija",
    }

//** Create the slice and determine all avaiable actions to modify state */
    export const selectedCategorySlice = createSlice({
        name: 'selectedList',
        initialState,
        reducers: {
            setSelectedCategory: (state, action) => {
                state.selected = action.payload;
            },
        },
    })

//** Export the actions to be used in other components */
    export const { setSelectedCategory } = selectedCategorySlice.actions;

//** Export the slice itself to add it to redux store */
    export default selectedCategorySlice.reducer;