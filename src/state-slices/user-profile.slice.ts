import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../config/state/store";
import { userProfile } from "./state-skel-default";
import { IUserProfile } from "./state-skel-interface";

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: userProfile,
  reducers: {
    setUserProfile: (state, action: PayloadAction<IUserProfile>) => {
      state.user_name = action.payload.user_name;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.guid = action.payload.guid;
      state.access_token = action.payload.access_token;
      state.token_ttl = action.payload.token_ttl || 300;
      state.updated_at = new Date().getTime();
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.user_name = action.payload
    },
    setUserAccessToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload
    },
  }
});

export const { setUserName, setUserAccessToken, setUserProfile } = userProfileSlice.actions;
export const getUserName = (state: RootState) => state.userProfile.user_name;
export const getAccessToken = (state: RootState) => state.userProfile.access_token;
export default userProfileSlice.reducer;