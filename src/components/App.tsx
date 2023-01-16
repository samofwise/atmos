import HeaderNav from './HeaderNav/HeaderNav';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PlaylistEdit from './Playlists/PlaylistEdit';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './Home';
import Playlists from './Playlists/Playlists';
import { useContext } from 'react';
import { ShowSignInProvider } from './contexts/ShowSignInContext';
import AuthContext, { AuthContextProvider } from './contexts/AuthContext';
import styled from '@emotion/styled';

const App = () => {
  const auth = useContext(AuthContext)
  
  const router = createBrowserRouter([
    { path: "/", element: auth?.authenticated ? <Playlists />  : <Home /> },
    { path: "/playlists/:id", element: <PlaylistEdit /> },
  ]);

  return (
  <ThemeProvider theme={theme}>
    <ShowSignInProvider>
      <CssBaseline />
      <HeaderNav />
      {auth && <RouterProvider {...{ router }} />}
    </ShowSignInProvider>
  </ThemeProvider>
)};

const AppAuthWrapper = () => (
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);

const StyledApp = styled(AppAuthWrapper)`
`

export default StyledApp;



// 