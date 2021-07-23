import React from 'react'
import CreateVehicleProfile from './CreateVehicleProfile'
import CreateVehicleProfileCard from './CreateVehicleProfileCard'
import VehicleHistory from './VehicleHistory'
import VehicleProfile from './VehicleProfile'

const Garage = ({ownerName, garage}) => {


    return (
        <div className="garage-div">
            <p>{garage[0] ? garage[0].make : null}</p>
            <h1 id='welcome'>{`Welcome to ${ownerName}'s garage`}</h1>
            <br/>
            <div id='vehicle-history'>
            </div>

            <div>
                {/* <VehicleProfile /> */}
            </div>

            <div className='create-vehicle'>
            <CreateVehicleProfile />
            <VehicleProfile garage={garage}/>
            </div>
        </div>
    )


}
export default Garage