// Steg 1: Skapa upp projekt med "npm init -y"
console.log("Hello World!");

// Steg 2: Läs in name, och printName från name.js och print.js
// ES6
import name from './name.js';
import printName from './print.js';

// CommonJS
// const name = require('./name');
// const printName = require('./print');

printName(name);