//Dummy Data For User
var users = [
{"id": "111","fname":"aamod","lname":"tiwari","email":"aamod@gmail.com","pinCode":"1234","birthDate":"02-MAR-1990","isActive":true},
{"id": "222","fname":"xyz","lname":"abc","email":"xyz@gmail.com","pinCode":"1234","birthDate":"02-MAR-1991","isActive":false},
{"id": "333","fname":"abc","lname":"ttt","email":"abc@gmail.com","pinCode":"1234","birthDate":"02-MAR-1992","isActive":false},
{"id": "444","fname":"fgh","lname":"jkl","email":"fgh@gmail.com","pinCode":"1234","birthDate":"02-MAR-1993","isActive":true},
];
module.exports = users;


// Please Enter below command in mongo and users record will be inserted
db.users.insertMany([
{"id": "111","fname":"aamod","lname":"tiwari","email":"aamod@gmail.com","pinCode":"1234","birthDate":"02-MAR-1990","isActive":true},
{"id": "222","fname":"xyz","lname":"abc","email":"xyz@gmail.com","pinCode":"1234","birthDate":"02-MAR-1991","isActive":false},
{"id": "333","fname":"abc","lname":"ttt","email":"abc@gmail.com","pinCode":"1234","birthDate":"02-MAR-1992","isActive":false},
{"id": "444","fname":"fgh","lname":"jkl","email":"fgh@gmail.com","pinCode":"1234","birthDate":"02-MAR-1993","isActive":true}
])