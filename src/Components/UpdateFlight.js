import React from 'react';
import { useState } from "react";
import "../index.css"
import axios, { Axios } from "axios"

function UpdateFlight() {
    const [FlightNumber, setFlightNumber] = useState(0);
    const [NewFlightNumber, setNewlightNumber] = useState(0);
    const [ArrivalTime, setArrivalTime] = useState(0);
    const [DepartureTime, setDeparturetime] = useState(0);
    const [DepartureDate, setDepartureDate] = useState(0);
    const [EconomySeats, setEconomySeats] = useState(0);
    const [BusinessClassSeats, setBusinessSeats] = useState(0);
    // const [date, setDate] = useState(0);
    const [ArrivalDate, setArrivalDate] = useState(0);
    const [Airport, setAirport] = useState("");
    const [ArrivalTerminal, setArrivalTerminal] = useState("");
    const [DepartureTerminal, setdepartureTerminal] = useState("");
    function handleClick() {

        if (obj.flightN === 0) {
        } else {
            axios.put('http://localhost:3001/update', obj)
            console.log(obj)
        }
    }

    const obj = {
        flightN: FlightNumber,
        newFlight: NewFlightNumber,
        arrivalT: ArrivalTime,
        DepartureTime: DepartureTime,
        DepartureDate: DepartureDate,
        ArrivalDate: ArrivalDate,
        economy: EconomySeats,
        business: BusinessClassSeats,
        Airport: Airport,
        ArrivalTerminal: ArrivalTerminal,
        DepartureTerminal: DepartureTerminal,
    }


    return (
        <div className="create">
            <h2>Update Flight</h2>
            <form>
                <label>Enter Flight Number to be Updated </label>
                <input
                    type="text"
                    required
                    // value={flightNumber}
                    name="flightnumber"
                    onChange={(e) => setFlightNumber(e.target.value)}
                />



                <label>Enter The New Flight Number </label>
                <input
                    type="text"

                    // value={flightNumber}
                    name="flightnumber"
                    onChange={(e) => setNewlightNumber(e.target.value)}
                />
                <label>arrival time </label>
                <input

                    type="text"

                    //  value={arrivalTime}
                    name="arrivaltime"
                    onChange={(e) => setArrivalTime(e.target.value)}
                />
                <label>Departure Time</label>
                <textarea


                    //  value={departure}
                    name="departuretime"
                    onChange={(e) => setDeparturetime(e.target.value)}
                ></textarea>

                <label>Departure Date</label>
                <textarea


                    //  value={departure}
                    name="departuredate"
                    onChange={(e) => setDepartureDate(e.target.value)}
                ></textarea>



                <label>number of economy seats</label>
                <textarea


                    //  value={economySeats}
                    name="economyseats"
                    onChange={(e) => setEconomySeats(e.target.value)}
                ></textarea>
                <label>number of business seats</label>
                <textarea

                    //    value={businessSeats}
                    name="businessseats"
                    onChange={(e) => setBusinessSeats(e.target.value)}
                ></textarea>






                <label>Departure Terminal </label>
                <input
                    type="text"

                    // value={flightNumber}
                    name="departureterminal"
                    onChange={(e) => setdepartureTerminal(e.target.value)}
                />


                <label>Arrival Terminal </label>
                <input
                    type="text"

                    // value={flightNumber}
                    name="arrivalterminal"
                    onChange={(e) => setArrivalTerminal(e.target.value)}
                />

                <label>Arrival Date </label>
                <input
                    type="text"

                    name="arrivaldate"
                    onChange={(e) => setArrivalDate(e.target.value)}
                />
                <label>airport</label>
                <textarea

                    //   value={airport}
                    name="airportterminal"
                    onChange={(e) => setAirport(e.target.value)}
                ></textarea>
                {/* <select
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
    >
      <option value="business">business</option>
      <option value="economy">economy</option>
    </select> */}
                <button onClick={handleClick}>Update</button>
            </form>
        </div>
    );
}

export default UpdateFlight;