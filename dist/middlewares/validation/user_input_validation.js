"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInputValidation = void 0;
const user_model_1 = __importDefault(require("../../models/user_model"));
const UserInputValidation = (request, response, next) => {
    const { error } = user_model_1.default.validate(request.body);
    if (error) {
        const { details } = error;
        const message = details.map(i => i.message).join(',');
        return response.status(422).json({ error: message });
    }
    next();
};
exports.UserInputValidation = UserInputValidation;
