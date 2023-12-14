

import { generateUniqueRandomString } from "./index";

const url = "https://www.example.com";
const len = 8;

const uniqueRandomString = generateUniqueRandomString(url, len);
console.log(uniqueRandomString);