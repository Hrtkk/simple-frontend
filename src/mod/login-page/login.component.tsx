import { Box, Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../config/state/hooks";
import { IUserProfile } from "../../state-slices/state-skel-interface";
import { setUserAccessToken, setUserProfile } from "../../state-slices/user-profile.slice";
import { LoginAction } from "./login.action";

interface ILogin {

};

export const LoginComponent: React.FunctionComponent = (props: ILogin) => {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, signup } = LoginAction.getInstance();

  const handleLogin = (e: any) => {
    login(username, password).then((response: any) => {
      if (response.token.access_token) {
        const userProfile: IUserProfile = {
          ...response.user,
          access_token: response.token.access_token
        }
        dispatch(setUserProfile(userProfile));
      }
    });
    setUsername(''); setPassword('');
  };

  const handleSignup = (e: any) => {
    signup(username, password);
  };

  return <>
    <Box>
      <Card sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'space-around',
          width: '20rem',
          height: '20rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          margin: '3rem'
          }}>
        <TextField 
          id="filled-basic1"
          label="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="filled"
        />
        <TextField
          id="filled-basic2"
          label="Password"
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '5.5rem'
        }}>
          <Button
            sx={{ width: '7rem' }}
            variant="contained"
            onClick={handleSignup}
          >
            Sign up
          </Button>
          <Button
            sx={{ width: '7rem' }}
            variant="contained"
            onClick={handleLogin}
          >
            Log in
          </Button>
        </div>
      </Card>
    </Box>
  </>
};
