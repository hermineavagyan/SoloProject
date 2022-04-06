const express = require("express");
const cors = require("cors");
const app = express();

//to recongnize request object as a JSON object.
app.use(express.json())

//to recongnize request object as a string or  an array.
app.use(express.urlencoded({extended:true}))

//A built into the browser feature that 
//takes care of cross origin resource sharing
app.use(cors({
    origin: "http://localhost:3000"
}))

require("./config/mongoose.config")


require("./routes/city.routes")(app)
app.listen(8000, ()=>console.log("You are connected to port 8000"))