import Result from './pages/Result'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/result'
          element={<Result />}
        />
      </Routes>
    </>
  )
}

export default App
