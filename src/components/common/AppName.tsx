import styled from '@emotion/styled';
import Typography, { TypographyTypeMap } from '@mui/material/Typography'
import React from 'react'

type Props = TypographyTypeMap<object, "span">['props'] & {component?: React.ElementType };

const AppName = ({component, ...props}:Props) => (<Typography component={component ?? 'h1'} {...props}>atmos</Typography>)

const Styled = styled(AppName)({
  fontFamily: 'Comfortaa'
})

export default Styled