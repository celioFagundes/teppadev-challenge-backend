"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const UserSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().messages({
        'string.base': 'Invalid email',
        'string.empty': 'Email is required',
        'string.email': 'Invalid email',
        'any.required': 'Email is required',
    }),
    password: joi_1.default.string().min(8).required().messages({
        'string.base': 'Invalid password',
        'string.empty': 'Password must have at least 8 caracters',
        'string.min': 'Password must have at least 8 caracters',
        'any.required': 'Password is required',
    }),
});
exports.default = UserSchema;
