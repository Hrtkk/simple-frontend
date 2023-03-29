import { IApp, ICounterState, IHome, IUserProfile } from "./state-skel-interface";

export const userProfile: IUserProfile = {
  guid: 'guest-guid',
  email: 'guest@gmail.com',
  user_name: 'guest',
  first_name: 'guest',
  last_name: 'guest',
  access_token: 'guest-access-token'
};

export const app: IApp = {

};

export const home: IHome = {

};

export const CounterState: ICounterState = {
  value: 1,
};

export const StateSkel = {

};
