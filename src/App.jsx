import { useState } from 'react';
import Body from './components/Body';
import Login from './components/Login';
import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<><Body/></>}>
             <Route path="/login" element={<><Login /></>} />
             <Route path="/profile" element={<><Profile /></>} />
          </Route>
        </Routes>
     </BrowserRouter>

    
    </>
  )
}

export default App
