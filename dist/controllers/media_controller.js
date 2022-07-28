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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeMedia = exports.updateMedia = exports.createMedia = exports.findMediaById = exports.findAllMedias = void 0;
const database_1 = __importDefault(require("../database"));
const firestore_1 = require("firebase/firestore");
const findAllMedias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const colletionRef = (0, firestore_1.collection)(database_1.default, 'medias');
    const data = yield (0, firestore_1.getDocs)(colletionRef);
    const medias = data.docs.map(doc => {
        const media = Object.assign({ id: doc.id }, doc.data());
        return media;
    });
    try {
        res.send(medias);
    }
    catch (e) {
        res.send(e);
    }
});
exports.findAllMedias = findAllMedias;
const findMediaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const colletionRef = (0, firestore_1.collection)(database_1.default, 'medias');
    const docRef = (0, firestore_1.doc)(colletionRef, id);
    const data = yield (0, firestore_1.getDoc)(docRef);
    if (!data.exists()) {
        return res.status(404).send('Documentao não encontrado');
    }
    const media = Object.assign({ id: data.id }, data.data());
    res.send(media);
});
exports.findMediaById = findMediaById;
const createMedia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const colletionRef = (0, firestore_1.collection)(database_1.default, 'medias');
    try {
        const newDoc = yield (0, firestore_1.addDoc)(colletionRef, data);
        res.send(newDoc.id);
    }
    catch (e) {
        res.send(e);
    }
});
exports.createMedia = createMedia;
const updateMedia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    const colletionRef = (0, firestore_1.collection)(database_1.default, 'medias');
    const docRef = (0, firestore_1.doc)(colletionRef, id);
    try {
        yield (0, firestore_1.updateDoc)(docRef, data);
        res.send('Documento atualizado');
    }
    catch (e) {
        res.status(404).send('Documento não encontrado');
    }
});
exports.updateMedia = updateMedia;
const removeMedia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const colletionRef = (0, firestore_1.collection)(database_1.default, 'medias');
    const docRef = (0, firestore_1.doc)(colletionRef, id);
    const data = yield (0, firestore_1.getDoc)(docRef);
    if (!data.exists()) {
        return res.status(404).send('Documento não encontrado');
    }
    yield (0, firestore_1.deleteDoc)(docRef);
    res.send('Documento excluído');
});
exports.removeMedia = removeMedia;
