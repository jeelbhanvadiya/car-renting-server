import { Vehicle } from "./vehicle.model"




export const getCarList = async (req, res) => {
    try {
        const data = req.body
        const getCategories = await Vehicle.find(data);
        res.status(200).send({done: true, data: getCategories})
    } catch (err) {
        console.log(err)
        res.status(422).send({done: false, message: err.message, error: "Error in get vehicle!"})
    }
}

export const getCarDetail = async (req, res) => {
    try {
        const data = req.body
        const result = await Vehicle.find({_id:data.id});
        return res.status(200).send({done: true, data: result})
    } catch (err) {
        console.log(err)
        res.status(422).send({done: false, message: err.message, error: "Error in get vehicle!"})
    }
}

export const registerCar = async (req, res) => {
    try {
        const data = req.body
        const create = await  Vehicle.create(data)
        res.status(200).send({done: true, data: create })
    } catch (err) {
        console.log(err)
        res.status(422).send({done: false, message: err.message, error: "Error in create users!"})
    }
}

