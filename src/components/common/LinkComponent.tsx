import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

const LinkComponent = React.forwardRef<HTMLAnchorElement, LinkProps>((itemProps,ref) =>
  <Link ref={ref} {...itemProps} role={undefined} />);

export default LinkComponent;