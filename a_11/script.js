const express = require("express");
const fs = require('fs')
const path = require("path");
let app = express();
app.listen(3000,() => console.log("listining at port 3000"));
app.use(express.static("public"));   // it will go to public and look for index.html
const data={
    "key1": "value1",
    "key2": "value2",
    "key3": "value3",
    "key4": 7,
    "key5": null,
    "favFriends": ["Kolade", "Nithya", "Dammy", "Jack"],
    "favPlayers": {"one": "Kante", "two": "Hazard", "three": "Didier"},
    "Author": "Ankit Kumar Mishra",
    "Date": "17-04-2022"
}

const jsondata = JSON.stringify(data)
fs.writeFileSync('./public/data.json',jsondata)