import { generateControllers } from "../../modules/query";
import { Payment } from "./paymentGateway.model";


const ProfileData = async (req, res) => {
    try {
        const data = req.body;
        const isExists = await Payment.find({_id: data.id});
        res.status(200).send(isExists);
    } catch (err) {
        console.log("Error", err);
        res.status(422).send({error: "Error in getting user time info"});
    }
};

const UpdateProfileData = async (req, res) => {
    try {
        const data = req.body;
        const result = await Payment.findByIdAndUpdate(req.params.Payment_id,{
            firstName:data.firstName,
            lastName:data.lastName,
            emailId:data.emailId,
            mobile:data.mobile,
            country:data.country,
            state:data.state,
            city:data.city,
            pincode:data.pincode,
            photo:data.photo
        });
        res.status(200).send(result);
    } catch (err) {
        console.log("Error", err);
        res.status(422).send({error: "Error in getting user time info"});
    }
};

const countData  = async (req, res) => {
    try {
        const create = await Payment.aggregate( [{ $count: "employeeCount" }])
        res.status(200).send({done: true, data: create })
    } catch (err) {
        console.log(err)
        res.status(422).send({done: false, message: err.message, error: "Error in create category!"})
    }
}

export default generateControllers(Payment, {
    ProfileData,UpdateProfileData,countData
});
