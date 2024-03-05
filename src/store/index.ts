import { configureStore } from '@reduxjs/toolkit';
import orderModalSlice from './order-modal/slice';
import lowerModalSlice from './lower-modal/slice';
import thanksSlice from './thanks/thanks.slice';

export const store = configureStore({
  reducer: {
    orderModalSlice,
    lowerModalSlice,
    thanksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
