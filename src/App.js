import './App.css';
import { BrowserRouter as Router, Route } from 'react'
import Garage from "./components/Garage"
import Login from "./components/Login"

function App() {


  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Garage" component={Garage} />
        <Route exact path="/Orders" component={Orders} />
        <Route exact path="/About" component={About} />
      </div>
    </Router>
  );
}

export default App;
