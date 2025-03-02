import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import Market from './components/Market/Market'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/market' Component={Market}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
