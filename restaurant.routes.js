
import Quote from "../Controllers/restaurant.controller.js";
import { Users , Pizza,Restaurants} from "../Controllers/restaurant.controller.js";

export default function restaurantRoutes(app){
    app.get("/quote",Quote);
    app.get("/users",Users);
    app.get("/pizza",Pizza);
    app.get("/api/restaurants",Restaurants)
}
