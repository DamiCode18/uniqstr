# uniqstr

[![npm version](https://badge.fury.io/js/uniqstr.svg)](https://www.npmjs.com/package/uniqstr)
[![GitHub license](https://img.shields.io/github/license/damicode18/uniqstr)](https://github.com/damicode18/uniqstr/blob/main/LICENSE)

`uniqstr` is a Node.js package that provides a function for generating unique random strings based on the SHA-256 hash of a given URL.

## Installation

```bash
npm install uniqstr
```



### Usage

import { generateUniqueRandomString } from 'uniqstr';

const url = 'https://www.example.com';
const length = 8;

const uniqueRandomString = generateUniqueRandomString(url, length);
console.log(uniqueRandomString);


## API

generateUniqueRandomString(url: string, length: number): string
Generates a unique random string of the specified length based on the SHA-256 hash of the provided URL.

url (string): The input URL.
length (number): The desired length of the generated string.
Returns a unique random string.


# License
This project is licensed under the MIT License - see the LICENSE file for details.

# Contributing
If you'd like to contribute to this project, please follow the Contributing Guidelines.

# Issues
If you encounter any issues or have questions, please open an issue at https://github.com/damicode18/uniqstr/issues