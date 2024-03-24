import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/login'
import Profile from './component/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider >
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
