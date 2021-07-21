import './App.css';
import { BrowserRouter as Router, Route } from 'react'

function App() {


  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/ItemLookup" component={ItemLookup} />
        <Route exact path="/Orders" component={Orders} />
        <Route exact path="/About" component={About} />
      </div>
    </Router>
  );
}

export default App;
