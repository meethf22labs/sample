import './App.css'
import HomePage from './Components/HomePage'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <div className=' mx-auto flex justify-center w-full max-w-[1440px]'>
      <HomePage />
      <Dashboard />
    </div>
  )
}

export default App
