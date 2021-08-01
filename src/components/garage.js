import React from 'react'

import VehicleProfile from './VehicleProfile'

const Garage = ({ownerName, garage, setGarage}) => {

    const generateVehicleProfile = () => {
        return garage.map(vehicle => {
            return <VehicleProfile key={vehicle.id} vehicle={vehicle} setGarage={setGarage} garage={garage}/>
        })
    }

    return (
        < div className="garage-div">
            {/* <p>{garage[0] ? garage[0].make : null}</p> */}
            <h1 id='welcome'>{`Welcome to ${ownerName}'s garage`}</h1>
            <br/>

            <div className='create-vehicle'>
                <br/>
                {generateVehicleProfile()}
            </div>

        </div>
    )


}
export default Garage