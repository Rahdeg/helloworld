const router = require("express").Router();
const {solve} = require('../controller/solve');


router.post("/solve", signUpValidation, solve);