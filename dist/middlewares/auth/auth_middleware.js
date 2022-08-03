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
exports.checkIfAuthenticated = void 0;
const database_1 = require("../../database");
const checkIfAuthenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let authToken = req.headers.authtoken;
    if (!authToken) {
        return res.status(401).send('Error: Unauthorized');
    }
    if (Array.isArray(authToken)) {
        authToken = authToken[0];
    }
    const isValid = yield database_1.admin.auth().verifyIdToken(authToken);
    if (isValid) {
        return next();
    }
    else {
        return res.status(401).send('Error: Unauthorized');
    }
});
exports.checkIfAuthenticated = checkIfAuthenticated;
