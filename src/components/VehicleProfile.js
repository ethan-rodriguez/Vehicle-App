import React from 'react'
import VehicleProfileCard from './VehicleProfileCard'

const VehicleProfile = ({vehicle, setGarage, garage}) => {



 const handleDelete = () => {

     const configOb = {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
     }}

    fetch('http://localhost:9292/vehicles/'+ vehicle.id, configOb)
        // .then(resp => resp.json())
        // .then(data => console.log(data))
    
    // invoke callback comming from app
    // setState by passing the setter and the variable to set from app
     const newGarage = garage.filter(v => {
        return v.id !== vehicle.id
     })
     setGarage(newGarage)
 }


    return (
        <div id='vehicle-profile'>
            <h4>Vehicle profile</h4>
                
                <p>{vehicle.year}</p>
                <p>{vehicle.make}</p>
                <p>{vehicle.modle}</p>
                <p>{vehicle.vin}</p>
                <p>{vehicle.mileage}</p>
                <p>{vehicle.oil_type}</p>
                <button onClick={handleDelete}>Delete Vehicle</button>
                
            
        </div>
    )


}
export default VehicleProfile