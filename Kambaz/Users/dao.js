import { v4 as uuidv4 } from "uuid";
export default function UsersDao(db) {
 let { users } = db;
 const createUser = (user) => {
   const newUser = { ...user, _id: uuidv4() };
   users = [...users, newUser];
   return newUser;
 };
 const findAllUsers = () => users;
 const findUsersByRole = (role) => users.filter((user) => user.role === role);
 const findUserById = (userId) => users.find((user) => user._id === userId);
 const findUserByUsername = (username) => users.find((user) => user.username === username);
 const findUserByCredentials = (username, password) =>
   users.find((user) => user.username === username && user.password === password);
 const updateUser = (userId, user) => (users = users.map((u) => (u._id === userId ? user : u)));
 const findUsersByPartialName = (partialName) => {
   const regex = new RegExp(partialName, "i");
   return users.filter((user) => 
     regex.test(user.firstName) || regex.test(user.lastName) || regex.test(user.username)
   );
 };
 const deleteUser = (userId) => (users = users.filter((u) => u._id !== userId));
 return {
   createUser, findUsersByPartialName, findAllUsers, findUsersByRole, findUserById, findUserByUsername, findUserByCredentials, updateUser, deleteUser };
}
