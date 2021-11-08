// External variables
const express = require("express");
const mongoose = require('mongoose');
// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
const MongoURI = "mongodb+srv://mariamheshamaly:mrrobot@cluster0.w6ioz.mongodb.net/Cluster0?retryWrites=true&w=majority";

const router = express.Router();
//App variables
const app = express();
const cors = require('cors')
const port = process.env.PORT || "3001";
const User = require('./models/User');
const Flights = require('./Models/Flights');
const Admin = require('./models/Adminstrator'); app.use(express.json());
// #Importing the userController
app.use(cors())
const obj = {}
const updateObj = {}
app.use("/", require("./Routes/flightsRoute"))
// app.use("/", require("./Routes/searchFlightRoute"))
// configurations
// Mongo DB
mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => console.log("MongoDB is now connected"))
  .catch(err => console.log(err));

/*
                                                    Start of your code
*/
app.get("/Home", (req, res) => {
  res.status(200).send("You have everything installed !");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});






// router.route("/searchflight").post((req, res) => {
//   const FlightNumber = req.body.FlightNumber;
//   const DepartureTime = req.body.DepartureTime;
//   const ArrivalTime = req.body.ArrivalTime;
//   const ArrivalDate = req.body.ArrivalDate;
//   const DepartureDate = req.body.DepartureDate;
//   const ArrivalTerminal = req.body.ArrivalTerminal;
//   const DepartureTerminal = req.body.DepartureTerminal;

//   global.newFlight = new Flight({
//     FlightNumber,
//     DepartureTime,
//     ArrivalTime,
//     ArrivalDate,
//     DepartureDate,
//     ArrivalTerminal,
//     DepartureTerminal,
//   })
//   console.log(newFlight)

// })






app.post("/searchflight", (req, res) => {
  console.log("i have entered here")

  //db.payments.find({ $where: function() { var value =  isString(this._id) && hex_md5(this._id) == '57fee1331906c3a8f0fa583d37ebbea9'; return value; }}).pretty()
  var flightNumber = req.body.FlightNumber;
  var arrivalTime = req.body.ArrivalTime
  var departuretime = req.body.DepartureTime
  var departuredate = req.body.DepartureDate
  var arrivaldate = req.body.ArrivalDate
  var arrivalterminal = req.body.ArrivalTerminal
  var departureterminal = req.body.DepartureTerminal
  console.log(departureterminal)

  if (flightNumber != "") {
    obj['FlightNumber'] = flightNumber
  }
  if (arrivalTime != "") {
    obj['ArrivalTime'] = arrivalTime
  }
  if (departuretime != "") {
    obj['DepartureTime'] = departuretime
  }
  if (departuredate != "") {
    obj['DepartureDate'] = departuredate
  }
  if (arrivaldate != "") {
    obj['ArrivalDate'] = arrivaldate
  }
  if (departureterminal != "") {
    obj['DepartureTerminal'] = departureterminal
  }

  if (arrivalterminal != "") {
    obj['ArrivalTerminal'] = arrivalterminal
  }




  Flights.find(obj, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
      console.log("Hamassaaa")
      console.log(result)
    }
  })

});
app.get("/getResults", (req, res) => {
  //res.status(200).send(User.find({ Job: 'Avenger' }))
  Flights.find(obj, (req, result) => {
    res.send(result)
  })
});


app.put('/update', (req, res) => {
  console.log(req)
  const flightN = req.body.flightN
  const newFlightNumber = req.body.newFlight
  const arrivalT = req.body.arrivalT
  const DepartureTime = req.body.DepartureTime
  const DepartureDate = req.body.DepartureDate
  const ArrivalDate = req.body.ArrivalDate
  const economy = req.body.economy
  const business = req.body.business
  const Airport = req.body.Airport
  const ArrivalTerminal = req.body.ArrivalTerminal
  const DepartureTerminal = req.body.DepartureTerminal


  if (newFlightNumber != "") {
    updateObj['FlightNumber'] = newFlightNumber
  }
  if (arrivalT != "") {
    updateObj['ArrivalTime'] = arrivalT
  }
  if (DepartureTime != "") {
    updateObj['DepartureTime'] = DepartureTime
  }
  if (DepartureDate != "") {
    updateObj['DepartureDate'] = DepartureDate
  }
  if (ArrivalDate != "") {
    updateObj['ArrivalDate'] = ArrivalDate
  }
  if (DepartureTerminal != "") {
    updateObj['DepartureTerminal'] = DepartureTerminal
  }

  if (ArrivalTerminal != "") {
    updateObj['ArrivalTerminal'] = ArrivalTerminal
  }

  if (economy != "") {
    updateObj['ArrivalTerminal'] = economy
  }
  if (business != "") {
    updateObj['ArrivalTerminal'] = business
  }
  if (Airport != "") {
    updateObj['ArrivalTerminal'] = Airport
  }






  // Flights.findById(900, (error, flightToUpdate) => {


  //   console.log(flightToUpdate + "nksnkjdnjn")
  //   // flightToUpdate.ArrivalTime = arrivalT
  //   // flightToUpdate.DepartureTime = DepartureTime
  //   // flightToUpdate.DepartureDate = DepartureDate
  //   // flightToUpdate.ArrivalDate = ArrivalDate
  //   // flightToUpdate.EconomySeats = economy
  //   // flightToUpdate.BusinessClassSeats = business
  //   // flightToUpdate.Airport = Airport
  //   // flightToUpdate.ArrivalTerminal = ArrivalTerminal
  //   // flightToUpdate.DepartureTerminal = DepartureTerminal
  //   // flightToUpdate.save();

  // })

  Flights.updateOne({ FlightNumber: flightN }, updateObj, (error, doc) => {
    if (error) {
      console.log(error);
      // res.redirect(‘/’);
      return;
    }
  })
  res.send('updated')
})

app.get("/viewFlights", (req, res) => {

  //res.status(200).send(User.find({ Job: 'Avenger' }))
  Flights.find({}, (req, values) => {
    res.json({ message: values });

  })
});

app.get("/getAdmin", (req, res) => {
  //res.status(200).send(User.find({ Job: 'Avenger' }))
  Admin.find({ Name: 'Mohamed Ashraf' }, (req, values) => {
    res.json({ message: values });

  })
});




app.post("/createFlight", (req, res) => {
  const flight = new Flights({
    "Name": "Mohamed Ashraf",
    "Email": "mashrafelsaeed@gmail.com",
    "id": 1,
  })
  personDocument.save(function (err) {
    if (err) {
      console.log(err + "hello");
      throw err;

    } else {
      console.log("Saved")
    }
  })
});


app.post("/addAdmin", (req, res) => {
  const personDocument = new Admin({
    "Name": "Mohamed Ashraf",
    "Email": "mashrafelsaeed@gmail.com",
    "id": 1,
  })
  personDocument.save(function (err) {
    if (err) {
      console.log(err + "hello");
      throw err;

    } else {
      console.log("Saved")
    }
  })
});




// #Routing to usercontroller here




/*
                                                    End of your code
*/

// Starting server
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
