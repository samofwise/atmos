import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

const LinkComponent = React.forwardRef<HTMLAnchorElement, LinkProps>((itemProps, ref) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  <Link ref={ref} {...itemProps} role={undefined} />);

export default LinkComponent;
