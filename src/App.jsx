import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './components/Question/Question'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
     <Header></Header>
     <Cards></Cards>
     <ToastContainer></ToastContainer>
     <Question></Question>
    
    </div>
  )
}

export default App
