const express = require("express");
const router = express.Router();

const { getAllPsikotest, speedTest, speedTestAccumulation, accuracyTest } = require("./controller");

router.get("/psikotes", getAllPsikotest);
router.post("/psikotes/kecepatan/send-answer", speedTest);
router.post("/psikotes/kecepatan/calculate", speedTestAccumulation);
router.post("/psikotes/ketelitian/send-answer", accuracyTest);

module.exports = router;
