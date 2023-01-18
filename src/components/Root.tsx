import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNav from './HeaderNav/HeaderNav';

function Root() {
  return (
    <>
      <HeaderNav />
      <Outlet />
    </>
  );
}

export default Root;
