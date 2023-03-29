import {
  createBrowserRouter
} from 'react-router-dom';
import MainPageComponent from './mod/main-page/main-page.component';
import { AccountComponent } from './mod/profile-page/account.component';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPageComponent />
  },
  {
    path: '/account',
    element: <AccountComponent />
  }
])