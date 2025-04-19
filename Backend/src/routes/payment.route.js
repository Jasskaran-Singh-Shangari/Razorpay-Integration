import { Router } from "express";
import Razorpay from "razorpay"
import { orderAPI, verifyAPI } from "../controllers/payment.controller.js"

const router=Router()


router.route("/order").post(orderAPI)
router.route("/verify").post(verifyAPI)

export default router;