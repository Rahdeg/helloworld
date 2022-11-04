const router = require("express").Router();
const {solve} = require('../controller/solve');
const {solvevalidator} = require('../validators/validator')


router.post("/solve", solvevalidator, solve);

module.exports = router;