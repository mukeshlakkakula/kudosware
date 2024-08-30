import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controler.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router
  .route("/profile/update")
  .post(isAuthenticated, singleUpload, updateProfile);

export default router;
