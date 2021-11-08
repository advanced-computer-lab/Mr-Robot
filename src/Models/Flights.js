const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    FlightNumber: {
        type: Number,
        required: true,
        unique: true
    },
    DepartureTime: {
        type: String,
        required: false
    },
    ArrivalTime: {
        type: String,
        required: false,
    },
    ArrivalDate: {
        type: String,
        required: false,
    },
    DepartureDate: {
        type: String,
        required: false,
    },
    ArrivalTerminal: {
        type: String,
        required: false,
    },
    DepartureTerminal: {
        type: String,
        required: false,
    },
    EconomySeats: {
        type: Number,
        required: true,
    },
    BusinessClassSeats: {
        type: Number,
        required: true,
    },
    Airport: {
        type: String,
        required: false,
    },
    Cabin: {
        type: String,
        required: false,
    }
}, { timestamps: true });


let Flight
try {
    Flight = mongoose.model('flights')
} catch (error) {
    Flight = mongoose.model('flights', flightSchema)
}
// const Flight = mongoose.model('flights', flightSchema);
module.exports = Flight;