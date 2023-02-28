import { useContext, useEffect } from 'react';
import { styled, Grid, Box } from '@mui/material';

import Typography from '@mui/material/Typography';
import SignIn from './Auth/Authenticator';
import AppName from './common/AppName';
import ShowSignInContext from '../contexts/ShowSignInContext';
import { heightWithoutBar } from './theme';

function Home() {
  const { showSignIn: signIn } = useContext(ShowSignInContext);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = (event: Event) => {
    const target = event.target as Document | HTMLElement;
    const scrollTarget = 'scrollingElement' in target ? target.scrollingElement : target;
    const scroll = scrollTarget?.scrollTop ?? 0;

    const starsOffset = 0.4 * (scroll);
    const stars = document.getElementById('stars');
    if (stars) stars.style.backgroundPositionX = `${-starsOffset}px`;

    const backgroundOffset = 2 * (scroll);
    const backgroundElement = document.getElementById('sunsetBackground');
    if (backgroundElement) (
      backgroundElement.style.background = getBackgroundGradient(backgroundOffset)
    );

    const sunOffset = 0.7 * (scroll);
    const sun = document.getElementById('sun');
    if (sun) sun.style.transform = `translate(-50%, ${sunOffset}px)`;

    const reflectionOffset = 1.45 * (scroll);
    const reflection = document.getElementById('reflection');
    if (reflection) reflection.style.backgroundPositionY = `-${reflectionOffset}px`;

    const waterOffset = 1 * (scroll);
    const water = document.getElementById('water');
    if (water) water.style.background = getWaterGradient(waterOffset);
  };

  return signIn ? (<SignIn />)
    : (
      <Page>
        {/* {backgroundStyle} */}
        <SectionOne id="sunsetBackground">
          <Stars id="stars" />
          <TitleWrapper>
            <Typography component="h2">Welcome to</Typography>
            <StyledTitle />
          </TitleWrapper>
          <Sun id="sun" />
          <Water id="water" />
          <Reflection id="reflection" />
        </SectionOne>
        <GeneralSection sx={{ background: '#F27048' }}>
          <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={6}>
              Music for every moment
            </Grid>
            <Grid item xs={6}>
              <img src="audio-wave.png" alt="Audio Wave" height={200} />
            </Grid>
          </Grid>
        </GeneralSection>
        <GeneralSection sx={{ }}>
          <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={6}>
              <FadingMusicNotes src="music-notes.png" alt="Music Notes" height={200} />
            </Grid>
            <Grid item xs={6}>
              Let it fade into the background
            </Grid>
          </Grid>
        </GeneralSection>
        <GeneralSection sx={{ background: '#0B1340' }}>
          <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={6}>
              Integrated with Spotify
            </Grid>
            <Grid item xs={6}>
              <img src="spotify.png" alt="Spotify Logo" height={200} />
            </Grid>
          </Grid>
        </GeneralSection>
      </Page>
    );
}

const Page = styled('article')({ textAlign: 'center' });

const getBackgroundGradient = (offset?: number) => `radial-gradient(100vw 70vh at 50vw calc(60vh + ${offset ?? 0}px), #F5B92C 20%, #F27048, #C04B5E, #7B3362, #121212)`;
const SectionOne = styled('section')((p) => {
  const { theme } = p;
  return ({
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    position: 'relative',
    ...heightWithoutBar(theme),
    // [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {},
    background: getBackgroundGradient(),
  });
});

const GeneralSection = styled(Box)({
  height: 400,
  padding: 16,
  fontSize: '40px',
  '.MuiGrid-container': { alignItems: 'center' },
});

const TitleWrapper = styled('article')({ zIndex: 10 });

const StyledTitle = styled(AppName)({ fontSize: 100 });

const oceanHeight = 40;

const Stars = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundImage: 'url(\'stars.png\')',
  backgroundRepeat: 'repeat',
  backgroundSize: '500px',
});

const getWaterGradient = (offset?: number) => `radial-gradient(100vw 45vh at 50vw calc(-70px - ${offset ?? 0}px), #F5B92C 20%, #F27048, #C04B5E, #7B3362, #121218)`;
const Water = styled('div')({
  position: 'absolute',
  top: `${100 - oceanHeight}vh`,
  left: '0',
  width: '100vw',
  height: `${oceanHeight}vh`,
  background: getWaterGradient(),
});

const Sun = styled('div')({
  backgroundImage: 'url(\'sun.svg\')',
  position: 'absolute',
  transform: 'translateX(-50%)',
  top: `calc(${100 - oceanHeight}vh - 144px)`,
  left: '50%',

  '--width': '291px',
  width: 'var(--width)',
  height: 'calc(var(--width) * 797 / 1603)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

const Reflection = styled('div')({
  backgroundImage: 'url(\'reflection.svg\')',
  position: 'absolute',
  transform: 'translateX(-50%)',
  top: `calc(${100 - oceanHeight}vh)`,
  left: 'calc(50% - 5px)',

  '--width': '320px',
  width: 'var(--width)',
  height: 'calc(var(--width) * 1278 / 1519)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

const FadingMusicNotes = styled('img')({ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 25%, transparent 80%)' });

export default Home;
