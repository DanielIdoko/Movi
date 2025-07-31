import { Router ,Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import SavedPage from './pages/Saved/SavedPage'
import ErrorPage from './pages/ErrorPage'
import Layout from './pages/Layout'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/search' element={<SearchPage />}/>
            <Route path='/savedpage' element={<SavedPage />}/>
            <Route path='*' element={<ErrorPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
