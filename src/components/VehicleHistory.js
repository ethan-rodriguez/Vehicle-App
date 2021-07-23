import React from 'react'

const VehicleHistory = ({garage}) => {


    return (
        <div>
            <p>This is Update History</p>
            <p>{garage[0] ? garage[0].make : null}</p>
        </div>
    )


}
export default VehicleHistory