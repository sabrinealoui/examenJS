import express from "express";

import { addOnce, getpaper} from "../controllers/scientificPaper.js";

const router = express.Router();

router.route("/:conferences/:idConference").get(getpaper);
router.route("/:idStudent/:idConference").post(addOnce);

export default router;