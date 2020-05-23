import express from "express";
import shareJourneyController from "./shareJourney.controller";

export const shareJourney = express.Router();


shareJourney
  .route("/")
  .get(shareJourneyController.getAll)
  .post(shareJourneyController.createOne);
shareJourney
  .route("/profile")
  .post(shareJourneyController.ProfileData);
shareJourney
  .route("/count")
  .get(shareJourneyController.countData);
shareJourney
  .route("/count")
  .get(shareJourneyController.countData);
shareJourney
  .route("/updateprofiledetails/:Users_id")
  .put(shareJourneyController.UpdateProfileData);


