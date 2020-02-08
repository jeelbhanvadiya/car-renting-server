import { Buyer } from "./buyer.model"


export const createBuyer= async (req, res) => {
  try {
    const data = req.body
    if(!data.name && !data.icon){
      return res.status(422).send({done: false, message: "Some params are missing."})
    }
    const isExists = await Buyer.aggregate([{
      $match: {
        "name": {$regex: `^${data.name}$`, $options:"i"}
      }
    }])
    if(isExists && isExists.length && (!data._id || isExists[0]._id.toString() !== data._id.toString())){
      return res.status(422).send({done: false, message: "This category already exists."})
    }
    const query = {name:data.name, image:data.icon}
    const create = await Buyer.create(query)
    res.status(200).send({done: true, data: create })
  } catch (err) {
    console.log(err)
    res.status(422).send({done: false, message: err.message, error: "Error in create category!"})
  }
}

export const getFilterBuyer= async (req, res) => {
  try {
    const query = req.body
    if(!query.value){
      return res.status(422).send({done: false, message: "value is missing."})
    }
    let video = {}
    if( !query._id ){
      video = await Buyer.find({ $text: { $search: query.value } })
    }
    res.status(200).send({done: true, data: video })
  } catch (err) {
    console.log(err)
    res.status(422).send({done: false, message: err.message, error: "Error in search video!"})
  }
}

export const getBuyer = async (req, res) => {
  try {
    const pageSize = req.body
    if(!pageSize.size){
      return res.status(422).send({done: false, message: "page-size is not found"})
    }
    const getBuyer = await Buyer.find().limit(pageSize.size);
    res.status(200).send({done: true, data: getBuyer})
  } catch (err) {
    console.log(err)
    res.status(422).send({done: false, message: err.message, error: "Error in get category!"})
  }
}

export const getBuyerList = async (req, res) => {
  try {
    const create = await Buyer.distinct("name")
    res.status(200).send({done: true, data: create })
  } catch (err) {
    console.log(err)
    res.status(422).send({done: false, message: err.message, error: "Error in create category!"})
  }
}
// export const countBuyer = async (req, res) => {
//   try {
//     const create = await  Buyer.aggregate( [{ $count: "categoriesCount" }])
//     res.status(200).send({done: true, data: create })
//   } catch (err) {
//     console.log(err)
//     res.status(422).send({done: false, message: err.message, error: "Error in create category!"})
//   }
// }



