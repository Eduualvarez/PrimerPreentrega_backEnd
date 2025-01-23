import { Router } from "express";

const id = uuidv4();

/** 
* @typedef {Object} product 
* @property {string} title 
* @property {string} description 
* @property {string} code
* @property {number} price 
* @property {boolean} status 
* @property {number} stock
* @property {string} category
* @property {array<string>} thumbnails
*/