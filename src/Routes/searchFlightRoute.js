// const express = require('express');
// const router = express.Router();
// const Flight = require("../Models/Flights");
// let newFlight = null

// router.route("/searchflight").post((req, res) => {
//     const FlightNumber = req.body.FlightNumber;
//     const DepartureTime = req.body.DepartureTime;
//     const ArrivalTime = req.body.ArrivalTime;
//     const ArrivalDate = req.body.ArrivalDate;
//     const DepartureDate = req.body.DepartureDate;
//     const ArrivalTerminal = req.body.ArrivalTerminal;
//     const DepartureTerminal = req.body.DepartureTerminal;

//     newFlight = new Flight({
//         FlightNumber,
//         DepartureTime,
//         ArrivalTime,
//         ArrivalDate,
//         DepartureDate,
//         ArrivalTerminal,
//         DepartureTerminal,
//     })

//     const findResult = Flight.find(newFlight);
//     // console.log(findResult)

// })


// module.exports = { newFlight };
// module.exports = router;