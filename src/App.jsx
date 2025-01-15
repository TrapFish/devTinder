import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
      <h1 className="text-3xl font-bold ">
        Hello world!
      </h1>
    </>
  )
}

export default App
