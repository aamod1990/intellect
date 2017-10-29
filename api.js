var express     = require('express');
var bodyParser  = require('body-parser');
var users       = require('./users.js');
var todo        = require('./todos.js');
var app         = express();
// Parse The Request Body In The Form Of Json
app.use(bodyParser.json());

//1 API Get Userdetails (for a given userid ) and related active todos
app.get('/getUsersDetails',function(req,res){
    var userid = req.query.userid;
    if(userid){ 
        var data = [];
        for(var i=0; i<users.length; i++){
            if(userid == users[i].id && userid == todo[i].userid){
                // find active todo
                for(pro in todo[i]){
                  if(pro =="done" && todo[i][pro]){
                    var userDetails = {
                        users : users[i],
                        todo  : todo[i]
                    }
                    data.push(userDetails);
                  }
                }
            }
        }
         res.send({"status": 200,"data":data});
    }else{
         res.send({"status": 401,"message":"user id mandatory"});
    }
})

//2 API Get A Specific todo items based on it's id

app.get('/getSpecificTodo',function(req,res){
    var todoID = req.query.todoID;
    if(todoID){
        for(var i=0; i < todo.length; i++){
            if(todoID == todo[i].id){
              res.send({"status": 200,"data":todo[i]});
            }
        }
    }else{
        res.send({"status": 401,"message":"todo id mandatory"});
    }

})

// 3 API Get Active Users and Related todo Items 
app.get('/getActiveUsers',function(req,res){
    var activeUsers = [];
    for(var i=0; i < users.length; i++){
        // Active Users
        if(users[i].isActive){
            //find related todo items
            for(var j =0; j<todo.length; j++){
                if(users[i].id == todo[j].userid){
                    activeUsers.push(users[i]) ;
                }
            }
        }
    }
    res.send({"status": 200,"data":activeUsers});

})
// 4 API For Specific user (for a given user id) get get active todos which has targetDate as today or tommorow
app.get('/getActiveTodo',function(req,res){
    var userid = req.query.userid;
    if(userid){
        for(var i=0; i<todo.length;i++){
           if(userid == todo[i].userid && todo[i].done && todo[i].targetDate == "29-OCT-2017"){
               res.send({"status": 200,"data":todo[i]});
           }
        }
    }else{
        res.send({"status": 401,"message":"user id mandatory"});
    }
})
// End the process when user shut done the server 
process.on('SIGINT',function(){
    process.exit();
})
process.on('exit',function(){
    console.log("Good Byy!! - Process Has Stop");
})

app.listen(3000,function(){
    console.log("Server Is Running On Port 3000");
})