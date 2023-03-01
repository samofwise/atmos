/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

const NavLinkComponent = React.forwardRef<HTMLAnchorElement, NavLinkProps>((itemProps, ref) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  (<NavLink ref={ref} {...itemProps} role={undefined} />));

export default NavLinkComponent;
