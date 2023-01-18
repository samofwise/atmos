import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

const NavLinkComponent = React.forwardRef<HTMLAnchorElement, NavLinkProps>((itemProps,ref) =>
  <NavLink ref={ref} {...itemProps} role={undefined} />);

export default NavLinkComponent;