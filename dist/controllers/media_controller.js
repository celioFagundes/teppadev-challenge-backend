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
exports.removeMedia = exports.updateMedia = exports.createMedia = exports.findMediaById = exports.findAllMedias = void 0;
const database_1 = require("../database");
const findAllMedias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const colletionRef = database_1.db.collection('medias');
    const data = yield colletionRef.get();
    const medias = data.docs.map(doc => {
        const media = Object.assign({ id: doc.id }, doc.data());
        return media;
    });
    try {
        res.status(200).send(medias);
    }
    catch (e) {
        res.send(e);
    }
});
exports.findAllMedias = findAllMedias;
const findMediaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const colletionRef = database_1.db.collection('medias');
    const docRef = colletionRef.doc(id);
    const data = yield docRef.get();
    if (!data.exists) {
        return res.status(404).send('Document not found');
    }
    const media = Object.assign({ id: data.id }, data.data());
    res.status(200).send(media);
});
exports.findMediaById = findMediaById;
const createMedia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const colletionRef = database_1.db.collection('medias');
    try {
        const newDoc = yield colletionRef.add(data);
        res.status(200).send(newDoc.id);
    }
    catch (e) {
        res.send(e);
    }
});
exports.createMedia = createMedia;
const updateMedia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    const colletionRef = database_1.db.collection('medias');
    const docRef = colletionRef.doc(id);
    try {
        yield docRef.update(data);
        res.status(200).send('Document updated');
    }
    catch (e) {
        res.status(404).send('Document not found');
    }
});
exports.updateMedia = updateMedia;
const removeMedia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const colletionRef = database_1.db.collection('medias');
    const docRef = colletionRef.doc(id);
    const data = yield docRef.get();
    if (!data.exists) {
        return res.status(404).send('Document not found');
    }
    yield docRef.delete();
    res.status(200).send('Document deleted');
});
exports.removeMedia = removeMedia;
