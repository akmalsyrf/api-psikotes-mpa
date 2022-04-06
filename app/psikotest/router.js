const express = require("express");
const router = express.Router();

const { getAllPsikotest, speedTest, speedTestAccumulation, accuracyTest, accuracyTestAccumulation, enduranceTest, sendAnswerPsikotest, enduranceTestAccumulation } = require("./controller");

router.get("/psikotes", getAllPsikotest);
router.post("/psikotes/kecepatan/send-answer", speedTest);
router.post("/psikotes/kecepatan/calculate", speedTestAccumulation);
router.post("/psikotes/ketelitian/send-answer", accuracyTest);
router.post("/psikotes/ketelitian/calculate", accuracyTestAccumulation);
router.post("/psikotes/ketahanan/send-answer", enduranceTest);
router.post("/psikotes/ketahanan/calculate", enduranceTestAccumulation);
router.post("/psikotes/send-answer", sendAnswerPsikotest);

module.exports = router;
