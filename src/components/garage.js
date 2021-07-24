import React from 'react'
import CreateVehicleProfile from './CreateVehicleProfile'
import CreateVehicleProfileCard from './CreateVehicleProfileCard'
import VehicleHistory from './VehicleHistory'
import VehicleProfile from './VehicleProfile'

const Garage = ({ownerName, garage, setGarage}) => {

    const generateVehicleProfile = () => {
        return garage.map(vehicle => {
            return <VehicleProfile key={vehicle.id} vehicle={vehicle} setGarage={setGarage} garage={garage}/>
        })
    }

    return (
        <div className="garage-div">
            {/* <p>{garage[0] ? garage[0].make : null}</p> */}
            <h1 id='welcome'>{`Welcome to ${ownerName}'s garage`}</h1>
            <br/>
            <div id='vehicle-history'>
            </div>

            <div className='create-vehicle'>
                <CreateVehicleProfile />
                <br>
                </br>
                <div>
                {generateVehicleProfile()}
                </div>

            </div>
        </div>
    )


}
export default Garage