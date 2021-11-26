const express = require("express")

const User = require("../models/User")
const {
    GetAllUsers,
    CreateUser,
    GetUser,
    UpdateUser,
    DeleteUser,
} = require("../controllers/user");

const router = express.Router()

router.get("/", GetAllUsers);
router.post("/", CreateUser);
router.get("/:id", GetUser);
router.patch("/:id", UpdateUser);
router.delete("/:id", DeleteUser);

module.exports = router