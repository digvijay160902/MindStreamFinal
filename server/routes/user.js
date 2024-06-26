const express = require("express");
const {  getAllUser , signUp , login, getUser, makeContact } = require("../controller/user-controller");
const { auth } = require("../middleware/auth");
const userRouter = express.Router();


userRouter.post("/signup", signUp);
userRouter.post("/login" , login);
userRouter.get("/getUser/:userId",getUser);
userRouter.post("/contact",makeContact)

module.exports =  userRouter;