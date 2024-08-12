import CRUD from '../Models/userModel.js'
import mongoose from 'mongoose';

export const fetch = async(req,res) => {
    try{
        const users= await CRUD.find();
        if(users.legnth===0)
        {
            return res.status(404).json({message:"No user found"})
        }
        res.status(200).json(users);
    }
    catch (error){
        res.status(400).json({error:"internal error"});
    }
}

export const update = async(req,res) => {
    try{
        const id=req.params.id;
        const userExist=await CRUD.findOne({_id:id});
        if(!userExist)
            {
                return res.status(404).json({message:"user not foudn"})
            }
            const upd=await CRUD.findByIdAndUpdate(id,req.body,{new:true});
            res.status(200).json(upd);
        }
        catch(error)
        {
            req.status(500).json({error:"internet error"});
        }
    }
    export const deletes = async(req,res) => {
        try{
            const id=req.params.id;
            const userExist=await CRUD.findOne({_id:id});
            if(!userExist)
                {
                    return res.status(404).json({message:"user not foudn"})
                }
                const upd=await CRUD.findByIdAndDelete(id);
                res.status(200).json({message : "deleted"});
            }
            catch(error)
            {
                req.status(500).json({error:"internet error"});
            }
        }
        
         const create = async(req,res) => {
            try{
             const userDetails = new CRUD(req.body);
             const {email} = userDetails;
             const isExist = await CRUD.findOne({email})
             if(isExist)
             {
                res.status(400).json({message:"user already exists"})
             }
             const newUser = await userDetails.save();
             res.send(200).json(newUser)
            }
            catch
            {
                // console.log((err)=>console.log(err));
                res.status(505).json({message:"Internal server error"})
            }
        
        }
        export default create
        

