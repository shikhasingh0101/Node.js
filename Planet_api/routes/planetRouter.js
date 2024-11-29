import express from 'express'
import { addPlanet ,deletePlanet,searchPlanet ,updatePlanet } from '../controller/planetController.js';

const router = express.Router();

router.post("/add",addPlanet);
router.get("/planet/:name",searchPlanet)
router.put("/planet/:name",updatePlanet)
router.delete("/planet/:name",deletePlanet)


export default router