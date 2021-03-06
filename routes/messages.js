const express = require("express");
const router = express.Router();

const MessageController = require("../controllers/messages")

router.get("/all", MessageController.All)
router.get("/room/:roomId", MessageController.Room)
router.post("/new", MessageController.New)
router.get("/delete", MessageController.Delete)

module.exports = router
