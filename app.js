"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Second_1 = __importDefault(require("./Second"));
const first_1 = __importDefault(require("./first"));
let sum = Second_1.default + first_1.default;
console.log(sum);
let multiplication = Second_1.default * first_1.default;
console.log(multiplication);
let division = Second_1.default / first_1.default;
console.log(division);
let substraction = Second_1.default - first_1.default;
console.log(substraction);
