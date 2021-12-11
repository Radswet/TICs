import { Mongoose } from "mongoose";
import Task from "../models/Task";

export const renderTask = async (req, res) => {
  if (req.oidc.isAuthenticated()) {
    const time = await Task.find({ email: req.oidc.user.email })
      .sort([["fecha", -1]])
      .lean();
    const graph = await Task.find({ email: req.oidc.user.email }).lean();
    res.render("index", { data: { time, graph } });
    //res.send(graph);
  } else {
    res.render("login");
  }
};

export const renderSpecificTask = async (req, res) => {
  if (req.oidc.isAuthenticated()) {
    var mongoose = require("mongoose");
    var o_id = mongoose.Types.ObjectId(req.params);
    const time = await Task.find({ email: req.oidc.user.email })
      .sort([["fecha", -1]])
      .lean();
    const graph = await Task.find({ _id: o_id }).lean();
    res.render("index", { data: { time, graph } });
  } else {
    res.render("login");
  }
};

export const createTask = async (req, res) => {
  try {
    const record = new Task({
      email: req.oidc.user.email,
      fecha: req.body.fecha,
      huevos: {
        blanco: {
          tercera: req.body.terceraB,
          segunda: req.body.segundaB,
          primera: req.body.primeraB,
          extra: req.body.extraB,
          super: req.body.superB,
          jumbo: req.body.jumboB,
        },
        color: {
          tercera: req.body.terceraC,
          segunda: req.body.segundaC,
          primera: req.body.primeraC,
          extra: req.body.extraC,
          super: req.body.superC,
          jumbo: req.body.jumboC,
        },
      },
    });

    await record.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
