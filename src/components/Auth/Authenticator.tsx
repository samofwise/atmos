import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material';
import { Mixins } from '@mui/material/styles';

function SignIn() {
  const navigate = useNavigate();

  return (
    <CenteredContent>
      <Authenticator>
        {/* eslint-disable-next-line arrow-body-style */}
        {() => {
          return (<span />);
        }}
      </Authenticator>
    </CenteredContent>
  );
}

const CenteredContent = styled('section')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  justifyContent: 'center',
  height: `calc(100vh - ${(theme.mixins as Mixins).toolbar.minHeight}px)`,
}));

export default SignIn;
