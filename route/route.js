const express = require("express");
const router = express.Router();

const userController = require("../controllers/siswa");

router.get("/siswa", userController.index);

//untuk ambil data berdasarkan id
router.get("/siswa/:id", userController.show);

router.post("/siswa", userController.store);

router.put("/siswa/:id", userController.update);

router.delete("/siswa/:id", userController.delete);

module.exports = router;
