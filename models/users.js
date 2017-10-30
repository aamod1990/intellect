var mongoose 	= require('mongoose');
	Schema 		= mongoose.Schema
var users 	    = mongoose.Schema({
	id        : {type:String},
	fname 	  : {type : String},
	lname     : {type : String},
	email  	  : {type : String},
	pinCode   : {type : String},
	birthDate : {type : String},
	isActive  : {type : Boolean}
});
//methods ======================
//create the model for users and expose it to our app
module.exports = mongoose.model('users', users);