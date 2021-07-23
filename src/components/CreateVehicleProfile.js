import React from 'react'
import './NewVehicle.css'

const CreateVehicleProfile = () => {


    return (
        <div className='create-profile'>
            <form>
            <legend>Create a vehicle profile</legend>
            <div className="colums">
                <div className="item">
                    <label for="fname">Year<span>*</span></label>
                    <input id="fname" type="text" name="fname" />
                </div>
                <div className="item">
                    <label for="lname">Make<span>*</span></label>
                    <input id="lname" type="text" name="lname" />
                </div>
                <div className="item">
                    <label for="address">Model<span>*</span></label>
                    <input id="address" type="text" name="address" />
                </div>
                <div className="item">
                    <label for="phone">VIN Number</label>
                    <input id="phone" type="text" name="phone" />
                </div>
                <div className="item">
                    <label for="saddress">Mileage<span>*</span></label>
                    <input id="saddress" type="text" name="city" />
                </div>
                <div className="item">
                    <label for="city">Oil Type<span>*</span></label>
                    <input id="city" type="text" name="city" />
                </div>
                <div className="item">
                    <label for="zip">Oil Qty<span>*</span></label>
                    <input id="zip" type="text" name="zip" />
                </div>
                <div className="item">
                    <label for="country">Oil Filter</label>
                    <input id="country" type="text" name="text" />
                </div>
                <div>
                    <button>Create Vehicle Profile</button>
                </div>
            </div>
        </form>
        </div>
            
            )


}
            export default CreateVehicleProfile