API Call
=================
1) Get Clone by typing the command

git clone https://github.com/aamod1990/intellect.git

2)cd intellect

3) Install All Dependency

4) Run API By Typeing Command
node api.js

5) Call API By Type Command
node APIRequest.js

Note:-
======
Insert The Dummy Records for users and todos collections 

Please Enter below command in mongo and users record will be inserted

db.users.insertMany([
{"id": "111","fname":"aamod","lname":"tiwari","email":"aamod@gmail.com","pinCode":"1234","birthDate":"02-MAR-1990","isActive":true},
{"id": "222","fname":"xyz","lname":"abc","email":"xyz@gmail.com","pinCode":"1234","birthDate":"02-MAR-1991","isActive":false},
{"id": "333","fname":"abc","lname":"ttt","email":"abc@gmail.com","pinCode":"1234","birthDate":"02-MAR-1992","isActive":false},
{"id": "444","fname":"fgh","lname":"jkl","email":"fgh@gmail.com","pinCode":"1234","birthDate":"02-MAR-1993","isActive":true}
])


Please Enter below command in mongo and todos record will be inserted

db.todos.insertMany([
{"id":"todo111","userid":"111","text":"this is sample text","done":true,"targetDate" :"02-MAR-1980"},
{"id":"todo222","userid":"222","text":"this is sample text","done":false,"targetDate":"02-MAR-1980"},
{"id":"todo333","userid":"333","text":"this is sample text","done":true,"targetDate":"02-MAR-1980"},
{"id":"todo444","userid":"444","text":"this is sample text","done":true,"targetDate":"29-OCT-2017"}
])


&copy; Aamod Tiwari, Licensed under the MIT-LICENSE


