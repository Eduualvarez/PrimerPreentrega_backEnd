import { Router } from "express";
import path from 'path'
import { config } from '../config/config.js';
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'




//const id = uuidv4();
// para tipar el objeto producto
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


export const ProductsRouter = Router();

const pathToProducts = path.join(config.dirname, './src/data/products.json');

ProductsRouter.get('api/products/', async (req, res)=>{
   try {
    let ProductsToString = await fs.promises.readFile(pathToProducts, 'utf-8');
    const products =  JSON.parse(ProductsToString);
    res.status(200).send({products})
    console.log({products})
    
   } catch (error) {
    res.status(400).send({mesagge:`ah ocurrido un error${error}`})
   }
   
    let ProductsToString = await fs.promises.readFile(pathToProducts, 'utf-8');
    const products =  JSON.parse(ProductsToString);
    res.status(200).send({products})
    console.log({products})
})

