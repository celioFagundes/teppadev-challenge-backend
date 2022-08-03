"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const database_1 = require("../database");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        database_1.admin
            .auth()
            .createUser({
            email,
            password,
        })
            .then(data => res.status(200).send({ success: true, message: 'Account registered!' }))
            .catch(error => {
            if (error.code === 'auth/email-already-exists') {
                return res
                    .status(200)
                    .send({ success: false, message: 'Email is already used by another account' });
            }
        });
    }
    catch (error) {
        return res.send({ success: false, message: 'Error, failed to create user' });
    }
});
exports.createUser = createUser;
