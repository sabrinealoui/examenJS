import ScientificPaper from "../models/scientificPaper.js";
import { validationResult } from "express-validator";

export function addOnce(req, res) {
  if (!validationResult(req).isEmpty()) {
    res.status(400).json(validationResult(req).array());
  } else {
    ScientificPaper.create({
      phdStudentId: req.params.phdStudent,
      conferenceId: req.params.conference,
    })
      .then((ScientificPaper) => {
        res.status(201).json(ScientificPaper);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
}

export function getpaper(req, res) {
    ScientificPaper.find({ conferenceId: req.params.conference})
      .then((ScientificPaper) => {
        res.status(200).json(ScientificPaper);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }