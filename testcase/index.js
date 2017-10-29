var apiCall = require('../api.js');
var request = require('request');
var expect  = require('chai').expect; 
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
 describe('apiCall', function(done) { 
 	it('Get User Details', function(done) {
     	 request.get(getUserDetails,function(err,res,body){
           if(res.statusCode ==200 && body){
            done();
           }
        }) 
   	});
   	it('get Specific Todo', function(done) { 
     	request.get(getSpecificTodo,function(err,res,body){
           if(res.statusCode ==200 && body){
            done();
           }
        }) 
 	}); 
 	it('Get Active Users', function(done) { 
     	request.get(getActiveUsers,function(err,res,body){
           if(res.statusCode ==200 && body){
            done();
           }
        }) 
 	}); 
 	it('Get Active Todo', function(done) { 
     	request.get(getActiveTodo,function(err,res,body){
           if(res.statusCode ==200 && body){
            done();
           }
        }) 
 	}); 
 }); 
