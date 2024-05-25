"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var peluquero_1 = require("../controllers/peluquero");
var router = (0, express_1.Router)();
router.get('/', peluquero_1.getPeluqueros);
exports.default = router;
