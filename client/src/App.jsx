import './App.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import HomePage from './pages/home'
import DataPage from './pages/data'
function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <HomePage />
    },
    {
      path : "/data",
      element : <DataPage />
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
