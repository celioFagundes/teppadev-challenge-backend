"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const UserSchema = joi_1.default.object({
    email: joi_1.default.string()
        .email()
        .required()
        .messages({
        'string.base': 'Email inválido',
        'string.empty': 'Email é obrigatório',
        'string.email': 'Email inválido',
        'any.required': 'Email é obrigatório',
    }),
    password: joi_1.default.string().min(8).required().messages({
        'string.base': 'Senha inválida',
        'string.empty': 'Senha deve ter no mínimo de 8 caracteres',
        'string.min': 'Senha deve ter no mínimo de 8 caracteres',
        'any.required': 'Senha é obrigatória',
    }),
});
exports.default = UserSchema;
