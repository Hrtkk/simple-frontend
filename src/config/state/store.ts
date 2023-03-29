import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../state-slices/counter-slice';
import userProfileReducer from '../../state-slices/user-profile.slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    userProfile: userProfileReducer

  }
});

export type RootState = ReturnType<typeof store.getState >;
export type AppDispatch =  typeof store.dispatch;
export default store;