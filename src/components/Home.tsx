import { useContext } from 'react';
import { styled, Grid, Skeleton, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import SignIn from './Auth/Authenticator';
import AppName from './common/AppName';
import ShowSignInContext from '../contexts/ShowSignInContext';
import { heightWithoutBar } from './theme';

function Home() {
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
        <GeneralSection sx={{ background: '#8f4805' }}>
          <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={6}>
              <div>Details here</div>
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="rounded" width="100%" height="100%" />
            </Grid>
          </Grid>
        </GeneralSection>
        <GeneralSection sx={{ }}>
          <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={6}>
              <div>Details here</div>
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="rounded" width="100%" height="100%" />
            </Grid>
          </Grid>
        </GeneralSection>
        <GeneralSection sx={{ background: '#0B1340' }}>
          <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={6}>
              <div>Details here</div>
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="rounded" width="100%" height="100%" />
            </Grid>
          </Grid>
        </GeneralSection>
      </Page>
    );
}

const Page = styled('article')({ textAlign: 'center' });

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
  });
});

const GeneralSection = styled(Box)({ height: 400, padding: 16 });

// eslint-disable-next-line @typescript-eslint/no-unused-vars

// const searchForMedia = (
//   obj: CSSProperties,
//   searchProperty: keyof CSSProperties,
//   action: (o: CSSProperties) => CSSProperties,
// ): CSSProperties => {
//   const mediaQuerys = (Object.keys(obj) as (keyof CSSProperties)[])
// .filter((k) => k.startsWith('@media'));

//   const subObjects = mediaQuerys.map((q) => searchForMedia(
//     obj[q] as CSSProperties,
//     searchProperty,
//     action,
//   ));
//   return ({ ...action(obj), ...subObjects }) as CSSProperties;
// };

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
