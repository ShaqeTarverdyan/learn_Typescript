"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbrsCollection_1 = require("./NumbrsCollection");
var numberscollection = new NumbrsCollection_1.NumbersCollection([10, -3, 5, 0]);
var sorter = new Sorter_1.Sorter(numberscollection);
sorter.sort();
console.log(numberscollection.data);
