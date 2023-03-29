
export interface IApp {

};

export interface IUserProfile {
  guid?: string;
  email?: string;
  user_name?: string;
  first_name?: string;
  last_name?: string;
  access_token?: string;
  token_ttl?: number; // in milli seconds
  updated_at?: number; // in milli seconds
};

export interface IHome {

};

export interface ICounterState {
  value: number;
};

export default interface StateSkel {
  app: IApp,
  home: IHome
  userProfile: IUserProfile,
};
