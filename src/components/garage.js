import React from 'react'
import AllVehicles from './AllVehicles'
import CreateVehicleProfileCard from './CreateVehicleProfileCard'
import VehicleProfile from './VehicleProfile'

const Garage = ({ownerName, garage, setGarage, owner, vehicles}) => {






    const generateVehicleProfile = () => {
        return garage.map(vehicle => {
            return <VehicleProfile key={vehicle.id} vehicle={vehicle} setGarage={setGarage} garage={garage}/>
        })
    }

    return (
        < div className="garage-div">
            <h1 id='welcome'>{`Welcome to ${ownerName}'s garage`}</h1>
            <br/>
            <div>
                <CreateVehicleProfileCard ownerId={owner.id} garage={garage} setGarage={setGarage} />
            </div>
            
            <div className='create-vehicle'>
                <br/>
                {generateVehicleProfile()}
            </div>
            <div>
                <AllVehicles vehicles={vehicles}/>
            </div>

        </div>
    )


}
export default Garage