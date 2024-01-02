
import './App.css'
import UserContextProvider from './context/UserContext'

function App() {

  return (
   <UserContextProvider>
   <h1>This is It</h1>
   </UserContextProvider>
  )
}

export default App
