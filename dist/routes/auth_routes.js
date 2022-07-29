"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth_controller");
const user_input_validation_1 = require("../middlewares/validation/user_input_validation");
const router = (0, express_1.Router)();
router.post('/register', user_input_validation_1.UserInputValidation, auth_controller_1.createUser);
exports.default = router;
