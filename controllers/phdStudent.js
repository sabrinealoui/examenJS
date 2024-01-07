import PhdStudent from "../models/phdStudent.js";
import { validationResult } from "express-validator";

export function addOnce(req, res) {
  if (!validationResult(req).isEmpty()) {
    res.status(400).json(validationResult(req).array());
  } else {
    phdStudent.create({
      fullname: req.body.fullname,
      email: req.body.email,
      phone: req.body.phone,
      image: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`,
    })
      .then((phdStudent) => {
        res.status(201).json({
        fullname: newPhdStudent.fullname,
        email: newPhdStudent.email,
        phone: newPhdStudent.phone,
        image: newPhdStudent.image,

        });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
}

export function getAll(req, res) {
  PhdStudent.find({})
    .select("fullname")
    .then((PhdStudent) => {
      res.status(200).json(phdStudent);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}