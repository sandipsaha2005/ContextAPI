import React from 'react'
import UserContextProvider from '../context/UserContextProvider'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext);
    if(!user) return <div> not data</div>
    return (
        <div>
            user: {user.username}
        </div>
    )
}

export default Profile