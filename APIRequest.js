/**Useing Request Module to Call API
   How to Use API
To call the API Useing the Following Details
Base URL  = "http://localhost:3000",
end-point = "Mention in the url after base url"
**/

var request = require('request');
var baseURL = "http://localhost:3000" ;

//1) Get User Details 
var getUserDetails = {
    url     : baseURL + "/getUsersDetails?userid=111",
    method  : 'get',
    Json    : true
}

//2) Get Specific Todo
var getSpecificTodo = {
    url     : baseURL + "/getSpecificTodo?todoID=todo111",
    method  : 'get',
    Json    : true
}
//3 Get Active Users
var getActiveUsers = {
    url     : baseURL + "/getActiveUsers",
    method  : 'get',
    Json    : true
}
// 4 get Active todo which has tasgetDate
var getActiveTodo = {
    url     : baseURL + "/getActiveTodo?userid=444",
    method  : 'get',
    Json    : true
}
// Comman Request Call Change The First Parameeter for API  ex. you want to get users detils set the users api details
request.get(getUserDetails,function(err,res,body){
 console.log(body);
})