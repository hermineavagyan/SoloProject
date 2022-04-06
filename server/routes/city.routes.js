const CityController = require("../controllers/city.controller");

module.exports = (app)=> {
app.get("/api/cities", CityController.findAllCities);
app.post("/api/cities", CityController.createNewCity);
app.get("/api/cities/:id", CityController.findOneCity);
app.delete("/api/cities/:id", CityController.deleteOneCity);
app.put("/api/cities/:id", CityController.updateCity);
}