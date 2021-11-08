import react from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory

} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios'

let i = 0;


function Flights() {
    const history = useHistory();

    const routeChange = () => {
        let path = "/UpdateFlight";
        history.push(path);
    }
    const [flights, setFlights] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/viewFlights').then((response) => {
            setFlights(response.data.message);
            console.log(flights)
        });
    }, []);
    return (
        <div>

            { flights ? flights.map(flight => {
                { console.log(flight) }
                i++;
                return <div className='flights'>
                    <ul >
                        <li>Flight Number : {flight.FlightNumber} </li>
                        <li>Arrival Time : {flight.ArrivalTime} </li>
                        <li> Departue Date : {flight.DepartureDate} </li>
                        <li> Arrival Terminal : {flight.ArrivalTerminal} </li>
                        <li> Departure Terminal : {flight.DepartureTerminal} </li>
                        <li> Economy Seats : {flight.EconomySeats}</li>
                        <li> Business Class Seats : {flight.BusinessClassSeats}</li>
                        <li>Airport : {flight.Airport}</li>

                    </ul>
                </div>
            }) : <h1>Loading</h1>}


            {/* <h1>{flights[0]}</h1> */}
        </div>

    )
}
export default Flights;