import { Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import RouteingPages from './components/Routing/RoutingPages'
import SignIn from './components/Users/Sign-in/SignIn'
import SignUp from './components/Users/Sign-up/SignUp'

function App() {

  return (
    <div className="App">
    <RouteingPages />
    </div>
  )
}

export default App
