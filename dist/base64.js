"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBase64 = void 0;
const node_buffer_1 = require("node:buffer");
const fromBase64 = (value) => {
    const buff = node_buffer_1.Buffer.from(value, 'base64');
    const key = buff.toString('ascii').replace(/\\n/g, '\n');
    return key;
};
exports.fromBase64 = fromBase64;
