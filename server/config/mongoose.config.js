const mongoose = require("mongoose");

const cityDB = "cityDB";

mongoose.connect(`mongodb://127.0.0.1:27017/${cityDB}`,{
    // below two options are to handle deprecation warnings 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        //to know if connected to the db
        console.log(`You are connected to the database called ${cityDB}`)
    })
    .catch((err)=>{
        console.log(`You are not connected to the database ${dbName}. Error:`, err)
    })
