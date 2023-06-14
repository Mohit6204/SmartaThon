import Team from "../models/team.js";
import User from "../models/user.js";

// Get all Teams

export const allTeams=async (req,res)=>{
    try {
        const teams=await Team.find();
        res.status(200).json(teams)
    } catch (error) {
        res.status(404).json({error:error.message});
    }
}

// Get my Team

export const myTeams=async (req,res)=>{
    try {
        const userId=req.user;
        const newuser= await User.findById({userId});
        const teams=newuser.teams;
        res.status(200).json(teams);
    } catch (error) {
        res.status(404).json({error:error.message});
    }
}

// Create Team

export const createTeam=async (req,res)=>{
    try {
        const userId=req.user;
        const newuser= await User.findById({userId});
        const {description,title,intake}=req.body;
        const newpost= new Team({
            userId,
            description,
            title,
            intake,
            remaining:intake,
            members:[],
        });
        const savedPost=await newpost.save();
        newuser.teams.push(savedPost);
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

// Delete Team

export const deleteTeam =async (req,res)=>{
    try {
        const {id}=req.params;
        const userId=req.user;
        const newpost= await Team.findById(id);
        if(userId!==newpost.userId){
            res.status(403).json("Access Denied!!");
        }
        
    } catch (error) {
        
    }
}