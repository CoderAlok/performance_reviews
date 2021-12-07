// Import all the modules 


// Add all external modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");




// App variables 
const app = express();
const port = process.env.PORT || 6003;



// App configurations






// App ROUTES
app.get('/user/login', (req, res) => {
    res.send({name: "Alok"});
});





// Server ACTIVATION
app.listen(port, () => {
    console.log(`Listening to requests on https://localhost:${port}`);
});