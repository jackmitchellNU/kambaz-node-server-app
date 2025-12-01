import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export default function UsersDao() {
 const createUser = (user) => {
   const newUser = { ...user, _id: uuidv4() };
   users = [...users, newUser];
   return newUser;
 };
  const findAllUsers = () => model.find();
  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };
  const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i");
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};
  const findUserByUsername = (username) =>  model.findOne({ username: username });
  const findUserByCredentials = (username, password) =>  model.findOne({ username, password });
  const updateUser = (userId, user) =>  model.updateOne({ _id: userId }, { $set: user });
  const deleteUser = (userId) => model.deleteOne({ _id: userId });
  return { createUser, findAllUsers, findUserById, findUsersByPartialName, findUserByUsername, findUserByCredentials, updateUser, deleteUser };
}