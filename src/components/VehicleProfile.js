import React from 'react'
import VehicleProfileCard from './VehicleProfileCard'

const VehicleProfile = ({garage}) => {


    return (
        <div id="vehicle-profile">
            <form>
            <h4>Vehicle Profile</h4>
            <h6>{garage[0] ? garage[0].year : null}</h6>
            <h6>{garage[0] ? garage[0].make : null}</h6>
            <h6>{garage[0] ? garage[0].model : null}</h6>
                <button>Delete Vehicle</button>
            </form>
        
        </div>
    )


}
export default VehicleProfile