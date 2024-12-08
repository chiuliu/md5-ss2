import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/B1/Header'
import ListCategory from './components/B1/ListCategory'
import Sum from './components/B2/Sum'
import NewDate from './components/B3/NewDate'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Bai 1</h1>
    <Header>
        
        </Header>
        <ListCategory>
            
          </ListCategory>
    </div>
     <div>
     <h1>Bai 2</h1>
     <Sum></Sum>
     </div>
     <div>
      
     <h1>Bai 3</h1>
     <NewDate></NewDate>
     </div>
    </>
  )
}

export default App
