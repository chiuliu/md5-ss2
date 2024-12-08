import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ShoppingCartUI from './components/ShoppingCartUI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoppingCartUI></ShoppingCartUI>
    </>
  )
}

export default App
