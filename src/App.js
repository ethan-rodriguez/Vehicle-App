
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import Login from "./components/Login";
import Garage from "./components/Garage";
import CreateVehicleProfile from './components/CreateVehicleProfile';
import UpdateMaintenance from './components/UpdateMaintenance';
import VehicleProfile from './components/VehicleProfile';
import Signup from './components/Signup';




function App() {

  const [owner, setOwner] = useState({})
  const [garage, setGarage] = useState([])
  const [ownerName, setOwnerName] = useState("")
  const [vehicleId, setVehicleId] = useState(0)

    const fetchOwner = () => {
        fetch(`http://localhost:9292/owners/search?q=${ownerName}`)
            .then(res => res.json())
            .then(data => {
              setGarage(data.ownerVehicles)
              setOwner(data.owner)
            })
            // .then(data => console.log(data))
    }

    const fetchGarage = () => {
        fetch(`https://localhost:9292/vehicles`)
        .then(res => res.json())
        // .then(data => setGarage(data))
        .then(data=> console.log(data))
    }

    useEffect(() => {
        fetchOwner()
        fetchGarage()
    }, [ownerName])


    // const handleDelete = (vehicleId) => {

    // }


  return (
      <div>
          <Navbar bg="primary" variant="dark" className = 'navbar'>
                <Container>
                <Navbar.Brand href="/">Vehicle Maintenance App</Navbar.Brand>
                </Container>
          </Navbar>
          <Router>
              <Switch>
              {/* <NavBar /> */}
              <Route exact path="/" component={Signup} />
              <Route exact path="/Login" component={()=><Login ownerName={ownerName} setOwnerName={setOwnerName}/>}/>
              <Route exact path="/Garage" component={()=><Garage ownerName={ownerName} owner={owner.ownerVechicles} garage={garage} setGarage={setGarage}/>}/>
              <Route exact path="/UpdateMaintenance" component={UpdateMaintenance} />
              <Route exact path="/VehicleProfile" component={VehicleProfile}  />
              </Switch>
          </Router>
      </div>
  );
}

export default App;
