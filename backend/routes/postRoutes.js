import express from "express";
import { allTeams,myTeams,createTeam } from "../controllers/post.js"
import { verifyToken } from "../middleware/jwtAuth.js";

const router=express.Router();

router.post("/create",verifyToken,createTeam);
router.get("/allteams",allTeams);
router.get("/myteams",verifyToken,myTeams);
router.delete("/delete/:id",verifyToken,deleteTeam);
router.patch("/editteam/:id",verifyToken,editTeam);
router.get("/team/:id",verifyToken,viewTeam);

export default router;