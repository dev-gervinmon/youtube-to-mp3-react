import './App.css';
import Main from './pages/Main';
import LoadingScreen from './components/LoadingScreen';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true)

  if (isLoading) {
    setTimeout(() =>{
      setIsLoading(false)
    }, 2000)
  }

  return (
    <>
      {isLoading ?
        <div>
          <LoadingScreen/>
          <div className='invisible'><Main/></div>
        </div>:
        <Main/>
      }
    </>
  )
}

export default App;
