import express from "express";
import { body } from "express-validator";
import multer from "../middlewares/multer-config.js";
import { getAll, addOnce} from "../controllers/phdStudent.js";

const router = express.Router();
router
  .route("/")
  .post(
    multer("image", 5 * 1024 * 1024),
    body("fullname").isLength({ min: 5 }),
    body("phone").isLength({ min: 8, max: 8 }).isNumeric(),
    addOnce
  )
  .get(getAll);

export default router;
