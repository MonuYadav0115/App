import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './Navbar'
import Home from './Home'
import Add from './Add'
import './App.css'
import Search from './Search'

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App