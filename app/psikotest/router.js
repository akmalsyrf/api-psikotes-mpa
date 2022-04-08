const express = require("express");
const router = express.Router();

const { getGradePrecision, speedTest, speedTestAccumulation, accuracyTest, accuracyTestAccumulation, enduranceTest, sendAnswerPsikotest, enduranceTestAccumulation, intelligenceTest } = require("./controller");

router.get("/psikotes/grade-precision", getGradePrecision);
router.post("/psikotes/kecepatan/send-answer", speedTest);
router.post("/psikotes/kecepatan/calculate", speedTestAccumulation);
router.post("/psikotes/ketelitian/send-answer", accuracyTest);
router.post("/psikotes/ketelitian/calculate", accuracyTestAccumulation);
router.post("/psikotes/ketahanan/send-answer", enduranceTest);
router.post("/psikotes/ketahanan/calculate", enduranceTestAccumulation);
router.post("/psikotes/kecerdasan/send-answer", intelligenceTest);
router.post("/psikotes/send-answer", sendAnswerPsikotest);
module.exports = router;
