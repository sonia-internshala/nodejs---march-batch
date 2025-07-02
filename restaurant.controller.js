import restaurantModel from "../Models/restaurant.model.js";
let user=["Sonia","Anurag","Shubham"];

export default function Quote(rej,res){
    res.send("Hardwork will always pays-off");
}

export function Users(rej,res){
    res.send(user);
}

export function Pizza(rej,res){
    res.send("Oven Story");
}

export function Restaurants(rej,res){
    try{
         res.send(restaurantModel.find());
    }
    catch(err){
        res.send(err);
    }
}

