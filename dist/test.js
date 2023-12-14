"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const url = "https://www.example.com";
const len = 8;
const uniqueRandomString = (0, index_1.generateUniqueRandomString)(url, len);
console.log(uniqueRandomString);
