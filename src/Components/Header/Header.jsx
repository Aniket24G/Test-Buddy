import React, { useState } from 'react'

import logo from '../../assets/logo.jpg'
import { useEffect } from 'react';
import { useContext } from 'react';
import UserName from '../../Contexts/UserName';
import UserNameProvider from '../../Contexts/UsernameProvider';

function Header() {
  const [timer, setTimer] = useState(1800);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${min}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  
  const {username} = useContext(UserName);

  return (
    <UserNameProvider>
      <div className='w-full sticky top-0 left-0 text-2xl flex justify-between item-center p-2 bg-black text-blue-400 font-semibold font-mono'>
        <img src={logo} alt="logo" width={200} height={1.5} />
        <div className='p-2.5'>
          <h2>Hello, {username ? username:'User'}! {formatTime(timer)}</h2>
        </div>
      </div>
    </UserNameProvider>
  )
}

export default Header