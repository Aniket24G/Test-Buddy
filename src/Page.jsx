import React from 'react'
import { Header} from './Components/index'
import {Outlet} from 'react-router-dom'
import UserNameProvider from './Contexts/UsernameProvider'


function Page() {
  return (
    <UserNameProvider>
        <Header />
        <Outlet />
    </UserNameProvider>
  )
}

export default Page