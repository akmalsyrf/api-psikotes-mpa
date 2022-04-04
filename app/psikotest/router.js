const express = require("express");
const router = express.Router();

const { getAllPsikotest, addPsikotest } = require("./controller");

router.get("/psikotest", getAllPsikotest);
router.post("/psikotest", addPsikotest);

module.exports = router;
