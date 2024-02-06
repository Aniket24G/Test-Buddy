import React from 'react'
import { useState } from 'react'
import UserName from './UserName'

function UserNameProvider({children}) {
    const [username,setUsername] = useState(null)
  return (
    <UserName.Provider value={{username,setUsername}}>
        {children}
    </UserName.Provider>
  )
}

export default UserNameProvider;