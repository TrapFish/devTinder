import Body from './components/Body';
import Login from './components/Login';
import Feed from './components/Feed';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path="/" element={<><Body /></>}>
              <Route path="/login" element={<><Login /></>} />
              <Route path="/feed" element={<><Feed /></>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
