import React from 'react'
import {Routes , Route} from 'react-router-dom'
import About from './routes/About';
import Main from './routes/Main';

function App() {
  return (
    <Routes >
      <Route path='/'  element={<Main />} />
      <Route path='/about'  element={<About />} />
    </Routes >
  )

}

export default App;
