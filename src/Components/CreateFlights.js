import { useState } from "react";
import "../index.css"
import axios, { Axios } from "axios"
const Create = () => {
    const [FlightNumber, setFlightNumber] = useState(0);
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
    const [isAvailable, setAvailable] = useState("ww")
    let message = "";
    const [Message, setMessage] = useState('')
    const obj = {
        flightN: FlightNumber,
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

    function handleClick(event) {
        event.preventDefault()
        console.log(obj.flightN)
        console.log(obj.economy)
        console.log(obj.business)
        console.log(obj.Airport)
        console.log(obj.ArrivalTerminal)
        console.log(obj.DepartureTerminal)
        console.log(obj.arrivalT)
        console.log(obj.DepartureTime)
        console.log(obj.DepartureDate)
        console.log(obj.ArrivalDate)

        if (obj.flightN == 0 || obj.arrivalT == 0
            || obj.DepartureTime == 0 || obj.DepartureDate == 0
            || obj.ArrivalDate == 0 || obj.economy == 0 || obj.business == 0
            || obj.Airport == 0 || obj.ArrivalTerminal == 0 || obj.DepartureTerminal == 0

        ) {
            setAvailable(false)
            setMessage("Cannot be created")
            axios.get('http://localhost:3001/createflight').then(response => {
                console.log(response.data + "asdasdas")
            }).catch(err => {
                console.log(err)
            })

        } else {
            axios.post('http://localhost:3001/createflight', obj)
            console.log(obj)
            setAvailable(true)
            setMessage("The Flight has been created")
        }

    }
    return (
        <div className="create">
            <h2>Create a new Flight</h2>
            <form>
                <label>flight number </label>
                <input
                    type="text"

                    // value={flightNumber}
                    name="flightnumber"
                    onChange={(e) => setFlightNumber(e.target.value)}
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
                    required
                    // value={flightNumber}
                    name="departureterminal"
                    onChange={(e) => setdepartureTerminal(e.target.value)}
                />


                <label>Arrival Terminal </label>
                <input
                    type="text"
                    required
                    // value={flightNumber}
                    name="arrivalterminal"
                    onChange={(e) => setArrivalTerminal(e.target.value)}
                />

                <label>Arrival Date </label>
                <input
                    type="text"
                    required
                    // value={flightNumber}
                    name="arrivaldate"
                    onChange={(e) => setArrivalDate(e.target.value)}
                />



                <label>airport</label>
                <textarea
                    required
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
                <button onClick={handleClick}>create</button>




            </form>
        </div>
    );
}

export default Create;