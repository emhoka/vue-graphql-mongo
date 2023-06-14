const Users = require("../models/users");

exports.all = async (_, res, next) => {
  try {
    const docs = await Users.all();
    res.send(docs);
  } catch (err) {
    return next(err);
  }
};

exports.findById = async (req, res, next) => {
  try {
    const doc = await Users.findById(req.params.id);
    res.send(doc);
  } catch (err) {
    return next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      phone: req.body.phone,
      jobTitle: req.body.jobTitle,
      country: req.body.country,
      city: req.body.city,
      zipcode: req.body.zipcode,
      profile: req.body.profile,
    };
    const doc = await Users.create(user);
    res.send(doc);
  } catch (err) {
    return next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const doc = await Users.update(req.params.id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      phone: req.body.phone,
      jobTitle: req.body.jobTitle,
      country: req.body.country,
      city: req.body.city,
      zipcode: req.body.zipcode,
      profile: req.body.profile,
    });
    res.send(doc);
  } catch (err) {
    return next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await Users.delete(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    return next(err);
  }
};
