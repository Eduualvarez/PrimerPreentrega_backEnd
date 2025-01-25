import { Router } from "express";
import { config } from "../config/config.js";
import {  v4 as uuidv4,} from "uuid";
import path from 'path'
import fs from 'fs'
export const CartsRouter = Router()

const pathToCarts = path.join(config.dirname, './src/data/carts.json');


CartsRouter.post('/', async (req, res)=>{
    let cartsToString = await fs.promises.readFile(pathToCarts, 'utf-8');
        const carts =  JSON.parse(cartsToString);
      const  id = uuidv4()
        
        try {
            
            const cart =
         {
            id:id, 
            products:[]
    
         };
    carts.push(cart);

    await fs.promises.writeFile(pathToCarts, JSON.stringify(carts, null, 2));


    res.status(200).send({message: 'carrito creado con exito'})
        
    } catch (error) {
        
        res.send({message:`error ${error}`})

}})