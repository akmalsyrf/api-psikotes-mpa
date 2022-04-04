var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const psikotestRouter = require("./app/psikotest/router");
const questionRouter = require("./app/question/router");
const examRouter = require("./app/exam/router");
const categoryTestRouter = require("./app/category_test/router");

var app = express();
const baseUrl = "/api/v1";

app.use(logger("dev"));
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false, limit: "100mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//router
app.use(baseUrl, psikotestRouter);
app.use(baseUrl, questionRouter);
app.use(baseUrl, examRouter);
app.use(baseUrl, categoryTestRouter);

module.exports = app;
