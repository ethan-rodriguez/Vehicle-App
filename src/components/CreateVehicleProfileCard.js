import React, { useState } from 'react'


const CreateVehicleProfileCard = ({ownerId, garage, setGarage}) => {


    const [vehicle, setVehicle] = useState({
            year: 0,
            make: "",
            model: "",
            vin: "",
            mileage: "",
            oil_type: "",
            oil_qty: "",
            oil_filter: "",
            owner_id: ownerId
    })


    const handleChange = (e) => {
        setVehicle({
            ...vehicle,
            [e.target.name]: e.target.value,
        });
    };


    const createVehicle = (e) => {
        e.preventDefault()
        fetch("http://localhost:9292/vehicles", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(vehicle)
        })
        .then(res => res.json())
        .then(data => setGarage([...garage, data.vehicle]))
    //       
    }
    
    

    return (
        <div>
            <h5>This is the Create Vehicle Profile Card</h5>
            <form className="car-form" onSubmit={createVehicle}>
                <p>Add a Car</p>
                <input type="number" placeholder="year" name="year" onChange={handleChange}/>
                <input  type="text" placeholder="make" name="make" onChange={handleChange}/>
                <input type="text" placeholder="model" name="model" onChange={handleChange}/>
                <input type="text" placeholder="vin" name="vin" onChange={handleChange}/>
                <input type="number" placeholder="mileage" name="mileage" onChange={handleChange}/>
                <input type="text" placeholder="oil_type" name="oil_type" onChange={handleChange}/>
                <input type="text" placeholder="oil_qty" name="oil_qty" onChange={handleChange}/>
                <input type="text" placeholder="oil_filter" name="oil_filter" onChange={handleChange}/>
                

                <button type="submit">Add Car</button>
            </form>
        </div>
    )


}
export default CreateVehicleProfileCard