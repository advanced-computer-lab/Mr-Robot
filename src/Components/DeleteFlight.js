import React from 'react'
import { useState } from "react";
import "../index.css"
import axios, { Axios } from "axios"
import Popup from './Popup';
//lama yedelete haga msh mawgooda n2ollo 
export default function DeleteFlight() {
    const [flightNumber, setFlightNumber] = useState(0);
    const [popUpBtn, setPopUpBtn] = useState(false);

    const obj = {
        flightN: flightNumber
    }
    function handleClick(event) {
        event.preventDefault()
        //axios.post('http://localhost:3001/delete', obj)
        setPopUpBtn(true);
        //console.log(obj);
    }
    return (
        <div className='create'>
            <h4>Please enter the flight number you want to delete</h4>
            <form >

                <input
                    type="text"
                    // value={flightNumber}
                    name="flightnumber"
                    onChange={(e) => setFlightNumber(e.target.value)}
                />
                <button onClick={handleClick}>delete</button>
            </form>
            <Popup flightnum={obj} trigger={popUpBtn} setTrigger={setPopUpBtn} > <h3>Are you sure you want to delete this flight? </h3></Popup>
        </div>
    )
}