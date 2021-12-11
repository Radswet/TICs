import { Router } from "express";
import {
  renderTask,
  createTask,
  renderSpecificTask,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/task/:id", renderSpecificTask);
export default router;
