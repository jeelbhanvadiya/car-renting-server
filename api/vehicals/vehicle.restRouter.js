import express from "express"
import { getCarDetail,registerCar,getCarList} from "./vehicle.controller"

export const vehicleRouter = express.Router()

vehicleRouter.route("/")
    .post(getCarList)

vehicleRouter.route("/registercar")
    .post(registerCar)

vehicleRouter.route("/find")
    .post(getCarDetail)
