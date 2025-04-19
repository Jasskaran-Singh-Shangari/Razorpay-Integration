import crypto from "crypto"
import Razorpay from "razorpay";
import { Payment } from "../models/payment.model.js"

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
})

export const orderAPI=(req, res)=>{
    const {amount}=req.body;

    try {
        const options={
            amount: Number(amount * 100),
            receipt: crypto.randomBytes(10).toString("hex"),
            currency: "INR"
        }

        instance.orders.create(options, (error, order)=>{
            if (error){
                return res.status(500).json({message: error.message || "Something went wrong1...."})
            }
            return res.status(200).json({data: order})
        })
        
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong2..."
        })
    }
}

export const verifyAPI=async (req, res)=>{
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // console.log("req.body", req.body);

    try {
        // Create Sign
        const sign = razorpay_order_id + "|" + razorpay_payment_id;

        // Create ExpectedSign
        const expectedSign = crypto.createHmac("sha256", ({}).RAZORPAY_SECRET)
            .update(sign.toString())
            .digest("hex");

        // console.log(razorpay_signature === expectedSign);

        // Create isAuthentic
        const isAuthentic = expectedSign === razorpay_signature;

        // Condition 
        if (isAuthentic) {
            const payment = new Payment({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature
            });

            // Save Payment 
            await payment.save();

            // Send Message 
            res.json({
                message: "Payement Successfully"
            });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
        console.log(error);
    }
}

