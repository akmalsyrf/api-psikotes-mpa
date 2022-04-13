const express = require("express");
const router = express.Router();

const { getAllPersonalities, detailPersonality } = require("./controller");
const { getGradePrecision, sendAnswerPsikotest, accumulationPsikotest, enduranceTest } = require("./controller/kecermatan");
const { intelligenceTest } = require("./controller/kecerdasan");
const { sendAnswerKepribadian } = require("./controller/kepribadian");

//kecermatan
const kecermatan = `/psikotes/kecermatan`;
router.post(`${kecermatan}/ketahanan/send-answer`, enduranceTest);

router.get(`${kecermatan}/grade-precision`, getGradePrecision);
router.post(`${kecermatan}/send-answer`, sendAnswerPsikotest);
router.post(`${kecermatan}/calculate`, accumulationPsikotest);

//kecerdasan
const kecerdasan = `/psikotes/kecerdasan`;
router.post(`${kecerdasan}/send-answer`, intelligenceTest);

//kepribadian
const kepribadian = `/psikotes/kepribadian`;
router.post(`${kepribadian}/send-answer`, sendAnswerKepribadian);

module.exports = router;
