import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from '../HomePage/Home/Home';
import SignIn from '../Users/Sign-in/SignIn';
import SignUp from '../Users/Sign-up/SignUp';

const RouteingPages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/signin" element={ <SignIn />} />
      <Route  path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default RouteingPages