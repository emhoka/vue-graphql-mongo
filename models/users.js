const { ObjectId } = require("mongodb");
const db = require("../db");

exports.all = () => {
  return db.get().collection("users").find().toArray();
};

exports.findById = (id) => {
  console.log("ss", ObjectId(id));
  return db
    .get()
    .collection("users")
    .findOne({ _id: ObjectId(id) });
};

exports.create = async (user) => {
  await db.get().collection("users").insertOne(user);
  return user;
};

exports.update = async (id, newData) => {
  await db
    .get()
    .collection("users")
    .updateOne({ _id: ObjectId(id) }, { $set: newData });
  return {
    ...newData,
    _id: id,
  };
};

exports.delete = (id) => {
  return db
    .get()
    .collection("users")
    .deleteOne({ _id: ObjectId(id) });
};