import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

function Profile() {
    const {user} = useContext(AuthContext)
    if (!user) return <div>please login</div>
  return (
    <div>
      <h2>Welcome: {user.userName}</h2>
    </div>
  )
}

export default Profile
