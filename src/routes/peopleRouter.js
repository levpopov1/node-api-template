import { Router } from "express";
import { getAll, getOne, post } from "../controllers/peopleController.js";
import { PersonModel as Person } from "../schema/Person/model.js";
import findByID from "../middleware/findById.js";
import findAll from "../middleware/findAll.js";

const router = Router();

router.get("/", findAll(Person), getAll);
router.get("/:id", findByID(Person), getOne);

router.post("/", post);

export default router;
