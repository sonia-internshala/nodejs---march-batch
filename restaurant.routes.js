
import Quote from "../Controllers/restaurant.controller.js";
import { Users , Pizza,Restaurants,createRestaurant,deleteRestaurant,updateRestaurant} from "../Controllers/restaurant.controller.js";

export default function restaurantRoutes(app){
    app.get("/quote",Quote);
    app.get("/users",Users);
    app.get("/pizza",Pizza);
    app.get("/api/restaurants",Restaurants);
    app.post("/api/restaurant",createRestaurant);
    app.delete("/api/restaurant/:id",deleteRestaurant);
    app.patch("/api/restaurant/:id",updateRestaurant);
}
