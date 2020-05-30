import { generateControllers } from "../../modules/query";
import { ShareJourney } from "./shareJourney.model";

const getAllShareJourney = async (req, res) => {
  try {
    const result = await ShareJourney.find({"journeyDetails.seat": { $gt: 0 }});
    res.status(200).send(result);
  } catch (err) {
    console.log("Error", err);
    res.status(422).send({error: "Error in getting user time info"});
  }
};

const updateDetails = async (req, res) => {
  try {
    const data = req.body;
    const result = await ShareJourney.findByIdAndUpdate(req.params.Journey_id,{
        $addToSet: {
            joinUserDetails: data
        }
    });
    if(Object.keys(result).length > 0){
        console.log("sakjdkajshdk",result.journeyDetails.seat)
        if(result.journeyDetails.seat  !== 0){
            const av = result.journeyDetails.seat - data.seat
            await ShareJourney.findByIdAndUpdate(req.params.Journey_id,{
                "journeyDetails.seat":av
            })
        }
    }
    res.status(200).send(result);
  } catch (err) {
    console.log("Error", err);
    res.status(422).send({error: "Error in getting user time info"});
  }
};

export default generateControllers(ShareJourney, {
    updateDetails,getAllShareJourney
});
