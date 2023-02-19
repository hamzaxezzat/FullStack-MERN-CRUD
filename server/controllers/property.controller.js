import mongoose from "mongoose";
import Property from "../mongodb/models/property.js";
import User from "../mongodb/models/user.js";

const getAllProperties = async(req,res)=>{};
const getPropertyDetail = async(req,res)=>{};
const createProperty = async(req,res)=>{
    const {title , description,propertyType,location,price,photo,email} = req.body

    // Start a new Session | ensure what happen here
    const session = await mongoose.startSession();
};
const updateProperty = async(req,res)=>{};
const deleteProperty = async(req,res)=>{};

export {
    getAllProperties,
    getPropertyDetail,
    createProperty,
    updateProperty,
    deleteProperty,
}