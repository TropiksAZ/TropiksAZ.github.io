//** REDUX import for creating a state slize */
    import { createSlice } from '@reduxjs/toolkit'

//** Initial slice state */
//** This state is for holding the selected price sorting options (from <select)) for LandingPage.js */
    const initialState = {
        selected: 'descending',
    }

//** Create the slice and determine all avaiable actions to modify state */
    export const selectedPriceSlice = createSlice({
        name: 'selectedPrice',
        initialState,
        reducers: {
            setSelectedPrice: (state, action) => {
                state.selected = action.payload;
            },
        },
    })

//** Export the actions to be used in other components */
    export const { setSelectedPrice } = selectedPriceSlice.actions;

//** Export the slice itself to add it to redux store */
    export default selectedPriceSlice.reducer;