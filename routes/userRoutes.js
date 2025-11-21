const experss = require('express');
const { addUser, updateUser, updateUserByParts, deleteUser, getAllUsers } = require('../controllers/userController');
// const app = experss();

const userRouter = experss.Router();

userRouter.get("/", getAllUsers)
userRouter.post("/", addUser)
userRouter.put("/:id", updateUser)
userRouter.patch("/:id", updateUserByParts)
userRouter.delete("/:id", deleteUser)


module.exports = userRouter;