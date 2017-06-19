/*---- ROUTER ----*/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//uses
router.use(bodyParser.urlencoded({extended:true}));
// angular needs this to send objects
router.use(bodyParser.json());

// connect to mongoose (27017 is the standard port for mongo)
// a '/' whack in front will create a db
mongoose.connect('localhost:27017/messageBoard'); //messageBoard is the name of the DB

// create Schema
var newMessage = new mongoose.Schema({
  name: String,
  message: String
}); // end Schema

// messageBoard model
var messages = mongoose.model('messages', newMessage); //messages is the name of the collection

router.get('/', function(req, res) {
  // get and send back all the things
  console.log('getting messages from db');
  messages.find().then(function(data) {
    res.send(data);
  }); // end find
}); // end get

router.post( '/', function( req, res ){
  console.log( 'Message post route hit:', req.body );
  // req.body property names must match up to Schema
  var newMessage = messages( req.body );
  newMessage.save();
  res.send( 'message has been sent to db.' );
}); //end post

module.exports = router;
