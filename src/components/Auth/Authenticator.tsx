import { Authenticator } from '@aws-amplify/ui-react'
import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { Mixins } from '@mui/material/styles';

const SignIn = () => {
    const navigate = useNavigate();

  return (
    <CenteredContent>
    <Authenticator>
      {() => {
        navigate("/");
        return (<span />)
      }}
    </Authenticator>
    </CenteredContent>
  )
}

const CenteredContent = styled('section')( ({theme}) => ({
  display:'flex',
  alignItems:'center',
  overflow:'hidden',
  justifyContent: 'center',
  height:`calc(100vh - ${(theme.mixins as Mixins).toolbar.minHeight}px)`,
}))

export default SignIn;
