const City = require("../models/city.model");

    module.exports = {

        findAllCities: (req, res)=>{
            City.find({}).collation({ locale: "en" }).sort({ type: 1 })
            //Pet.find()
                .then((allCities)=>{
                    console.log(allCities);
                    res.json(allCities)
                })
                .catch((err)=>{
                    console.log("Find all pets has failed!");
                    res.json({ message: "Something went wrong in findAllCities()", error: err })
                })
        },

        createNewCity: (req, res)=>{
            City.create(req.body)
                .then((newCity)=>{
                    console.log(newCity);
                    res.json(newCity);
                })
                .catch((err)=>{
                    console.log("Something went wrong in createNewCity()");
                    res.status(400).json(err)
                })
        },

        findOneCity: (req, res)=>{
            City.findOne({ _id: req.params.id })//the params id MUST MATCH how we write it in our routes!!!
                .then((oneCity)=>{
                    console.log(oneCity);
                    res.json(oneCity);
                })
                .catch((err)=>{
                    console.log("findOneCity() failed");
                    res.json({ message: "Something went wrong in findOneCity()", error: err })
                })
        },

        deleteOneCity: (req, res)=>{
            City.deleteOne({_id: req.params.id})
                .then((deletedCity)=>{
                    console.log(deletedCity);
                    res.json(deletedCity);
                })
                .catch((err)=>{
                    console.log("deleteOneCity() failed");
                    res.json({ message: "Something went wrong in deleteOneCity()", error: err })
                })
        },

        updateCity: (req, res)=>{
            City.findOneAndUpdate({_id: req.params.id},
                req.body,
                {new: true, runValidators: true}
                )
                .then((updatedCity)=>{
                    console.log(updatedCity)
                    res.json(updatedCity)
                })
                .catch((err)=>{
                    console.log("Something went wrong in updateCity()");
                    res.status(400).json(err) 
                })
        }


    }
