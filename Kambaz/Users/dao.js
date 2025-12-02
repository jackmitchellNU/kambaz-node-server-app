import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function UsersDao() {
  const createUser = (user) => {
    const newUser = { ...user, _id: uuidv4() };
    return model.create(newUser);
  };

  const findAllUsers = async () => {
    return await model.find();
  };

  const findUsersByRole = async (role) => {
    return await model.find({ role });
  };

  const findUserById = async (userId) => {
    return await model.findById(userId);
  };

  const findUserByUsername = async (username) => {
    return await model.findOne({ username });
  };

  const findUserByCredentials = async (username, password) => {
    return await model.findOne({ username, password });
  };

  const updateUser = (userId, user) =>
    model.updateOne({ _id: userId }, { $set: user });

  const findUsersByPartialName = async (partialName) => {
    const regex = new RegExp(partialName, "i");
    return await model.find({
      $or: [
        { firstName: { $regex: regex } },
        { lastName: { $regex: regex } },
        { username: { $regex: regex } },
      ],
    });
  };

  const deleteUser = (userId) => model.findByIdAndDelete(userId);
  return {
    createUser,
    findAllUsers,
    findUsersByRole,
    findUserById,
    findUserByUsername,
    findUserByCredentials,
    updateUser,
    findUsersByPartialName,
    deleteUser,
  };
}
