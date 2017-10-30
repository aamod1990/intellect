var mongoose 	= require('mongoose');
	Schema 		= mongoose.Schema
var todos 	    = mongoose.Schema({
	id         : {type:String},
	userid 	   : {type : String},
	text       : {type : String},
	email  	   : {type : String},
	done       : {type : String},
	targetDate : {type : String}
});
//methods ======================
//create the model for users and expose it to our app
module.exports = mongoose.model('todos', todos);