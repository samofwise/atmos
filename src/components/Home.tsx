import { useContext } from 'react';
import { styled, Mixins } from '@mui/material';
import Typography from '@mui/material/Typography';
import SignIn from './Auth/Authenticator';
import AppName from './common/AppName';
import ShowSignInContext from '../contexts/ShowSignInContext';
import useSpotifyReceiver from '../spotify-web-api-react/useSpotifyReceiver';

function Home() {
  useSpotifyReceiver();
  const { showSignIn: signIn } = useContext(ShowSignInContext);
  return signIn ? (<SignIn />)
    : (
      <Page>
        <SectionOne>
          <div>
            <Typography component="h2">Welcome to</Typography>
            <StyledTitle />
          </div>
          <Water />
        </SectionOne>
      </Page>
    );
}

const Page = styled('article')({ textAlign: 'center' });

const SectionOne = styled('section')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  justifyContent: 'center',
  height: `calc(100vh - ${(theme.mixins as Mixins).toolbar.minHeight}px)`,
  position: 'relative',
}));

const StyledTitle = styled(AppName)({ fontSize: 100 });

const Water = styled('div')({
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '340vmin',
  height: '50vmin',
  borderRadius: '100%',
  background: 'radial-gradient(ellipse at 50% 50%, #373B44, #4286f4 90%)',
  // &:after{
  //   position: absolute;
  //   top: 0;
  //   left: 50%;
  //   transform: translate(-50%, 0);
  //   display: block;
  //   content: '';
  //   width: 40vmin;
  //   height: 80vmin;
  //   background: radial-gradient(ellipse at 50% 0%,  rgba(255, 255, 255, 0.35), transparent 30%);
  // }
});

export default Home;
