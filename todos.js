//Dummy Data For todos
var todos = [
{"id":"todo111","userid":"111","text":"this is sample text","done":true,"targetDate" :"02-MAR-1980"},
{"id":"todo222","userid":"222","text":"this is sample text","done":false,"targetDate":"02-MAR-1980"},
{"id":"todo333","userid":"333","text":"this is sample text","done":true,"targetDate":"02-MAR-1980"},
{"id":"todo444","userid":"444","text":"this is sample text","done":true,"targetDate":"29-OCT-2017"}
]
module.exports = todos;


// Please Enter below command in mongo and todos record will be inserted
db.todos.insertMany([
{"id":"todo111","userid":"111","text":"this is sample text","done":true,"targetDate" :"02-MAR-1980"},
{"id":"todo222","userid":"222","text":"this is sample text","done":false,"targetDate":"02-MAR-1980"},
{"id":"todo333","userid":"333","text":"this is sample text","done":true,"targetDate":"02-MAR-1980"},
{"id":"todo444","userid":"444","text":"this is sample text","done":true,"targetDate":"29-OCT-2017"}
])