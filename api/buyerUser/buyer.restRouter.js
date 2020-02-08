import express from "express"
import { createBuyer,getBuyer,getBuyerList,getFilterBuyer} from "./buyer.controller"

export const buyerRouter = express.Router()

buyerRouter.route("/")
    .post(getBuyer)

buyerRouter.route("/create")
    .post(createBuyer)

buyerRouter.route("/find")
    .post(getFilterBuyer)

buyerRouter.route("/list")
    .get(getBuyerList)

