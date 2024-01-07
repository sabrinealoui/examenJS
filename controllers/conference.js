import Conference from "../models/conference.js";
import { validationResult } from "express-validator";

export function addOnce(req, res) {
  if (!validationResult(req).isEmpty()) {
    res.status(400).json(validationResult(req).array());
  } else {
    Conference.create({
        name: req.body.name,
        description: req.body.description,
        nbrPaperMax: req.body.nbrPaperMax,
      })
      .then((Conference) => {
        res.status(201).json({
        name: newConference.name,
        email: newConference.email,
        phone: newConference.phone,
        });
        })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
}

export function getAll(req, res) {
  Conference.find({})
    .select("name")
    .then((Conference) => {
      res.status(200).json(Conference);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}