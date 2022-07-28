"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const media_routes_1 = __importDefault(require("./routes/media_routes"));
const auth_routes_1 = __importDefault(require("./routes/auth_routes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001',
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/auth', auth_routes_1.default);
app.use('/medias', media_routes_1.default);
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.listen(port, () => {
    console.log('Listening on port : ', port);
});
