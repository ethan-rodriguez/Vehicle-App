import React from 'react'

const AllVehicles = ({vehicles}) => {



    const generateAllVehicles = () => {
        return vehicles.map(vehicle => {
            return <li>{vehicle.year}, {vehicle.make}, {vehicle.model}</li>
        })
    }

    return (
        <div>
            <h3 style={{color: 'white'}}>Check out all these other vehicles...</h3>
            <ol>{generateAllVehicles()}</ol>
        </div>
    )


}
export default AllVehicles