"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const MediaSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).max(30).required(),
    gender: joi_1.default.string(),
    additional: joi_1.default.array().items(joi_1.default.object({
        name: joi_1.default.string(),
        value: joi_1.default.string(),
    })),
    status: joi_1.default.string(),
});
exports.default = MediaSchema;
