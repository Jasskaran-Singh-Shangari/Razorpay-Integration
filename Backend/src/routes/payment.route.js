import { Router } from "express";
import Razorpay from "razorpay"
import crypto from "crypto"

const router=Router()
var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });

router.route("/").get()

export default router;