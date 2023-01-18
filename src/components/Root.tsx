import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderNav from './HeaderNav/HeaderNav'

const Root = () => {
  return (
    <>
      <HeaderNav />
      <Outlet />
    </>
  )
}

export default Root