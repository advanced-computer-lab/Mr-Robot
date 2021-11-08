const express = require('express');
const router = express.Router();
const Flight = require("../Models/Flights");

router.route("/createFlight").post((req, res) => {
    console.log(req + "sds")
    const FlightNumber = req.body.flightN;
    const DepartureTime = req.body.DepartureTime;
    const ArrivalTime = req.body.arrivalT;
    const ArrivalDate = req.body.ArrivalDate;
    const DepartureDate = req.body.DepartureDate;
    const ArrivalTerminal = req.body.ArrivalTerminal;
    const DepartureTerminal = req.body.DepartureTerminal;
    const EconomySeats = req.body.economy;
    const BusinessClassSeats = req.body.business;
    const Airport = req.body.Airport;



    const newFlight = new Flight({
        FlightNumber,
        DepartureTime,
        ArrivalTime,
        ArrivalDate,
        DepartureDate,
        ArrivalTerminal,
        DepartureTerminal,
        EconomySeats,
        BusinessClassSeats,
        Airport,

    })
    Flight.find({ FlightNumber: FlightNumber }, (req, result) => {
        if (result.length == 0) {
            newFlight.save();
        } else {
            res.send("Cannot be created")
        }
    })



})


router.route('/delete').post((req, res, next) => {
    const ID = req.body.flightN;
    if (ID === 0) {
        res.send('no such flight!')
    }
    console.log("id:" + ID);
    Flight.deleteOne({ FlightNumber: ID }, (error, doc) => {
        if (error) {
            console.log(error);
            // res.redirect('/');
            return;
        }
    })
})

module.exports = router;