const express = require('express');
const app = express();
app.listen(3010,() => console.log("listining at port 3000"));
app.use(express.static('public'));