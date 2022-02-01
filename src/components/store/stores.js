import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './OrderCart-Slice';

import btnClick from './TotalOrderClick-Slice';

const store =configureStore({
    reducer:{btn:btnClick.reducer,cartsl:CartSlice.reducer}
});

export default store;