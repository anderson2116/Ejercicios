const getRoutes = require("./routes/getRoutes");
const getItineraries = require("./itineraries/getItineraries");
async function simulateFlow(){
    const routes  = await getRoutes();
    const route = routes[1]
    console.log(route)
    const itineraries  = await getItineraries(route._id)
    console.log(itineraries)
}
simulateFlow()