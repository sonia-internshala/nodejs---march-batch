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


export async function createRestaurant(req,res){
    try{
        let document=await restaurantModel.create(req.body);
        return res.status(200).json({"message":`data posted successfully ${document}`})
    }
    catch(err){
        return res.status(404).json({"message":err});
    }
}

export async function deleteRestaurant(req,res){
    try{
        let id=req.params.id;
        let deletedDocument=await restaurantModel.findByIdAndDelete(id);
        return res.status(200).json({"message":`data deleted successfully ${deletedDocument}`})
    }
    catch(err){
        return res.status(404).json({"message":err});
    }
}

export async function updateRestaurant(req,res){
    try{
        let id=req.params.id;
        let updates=req.body;
        let {coupenCode}=req.body;
        // console.log(coupenCode);


        let existingData=await restaurantModel.findById(id);
        // console.log(existingData);
        if(!existingData.coupenCode){
            res.json({"message":`coupenCode doesn't exists`});
        }

         keys.map((key)=>(
            (!existingData.key)?
            res.json({"message":`${key} doesn't exists`})
            :
            null
        ))
        let updatedDocument=await restaurantModel.findByIdAndUpdate(id,updates,{new:true});
        return res.status(200).json({"message":`data updated successfully ${updatedDocument} ${coupenCode} ${existingData}`})
    }
    catch(err){
        return res.status(404).json({"message":err});
    }
}
