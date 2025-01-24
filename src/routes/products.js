import { Router } from "express";
import path from 'path'
import { config } from '../config/config.js';
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'






export const ProductsRouter = Router();

const pathToProducts = path.join(config.dirname, './src/data/products.json');

ProductsRouter.get('/', async (req, res)=>{
  try {
    let ProductsToString = await fs.promises.readFile(pathToProducts, 'utf-8');
    const products =  JSON.parse(ProductsToString);
    res.status(200).send({products})
    console.log({products})

  } catch (error) {
    res.status(500).send({mesagge:`server internal error: ${error}`})
  }
})

ProductsRouter.post('/', async (req, res) => {
    

    // para tipar el objeto producto
    /** 
    * @typedef {Object} Product 
    * @property {string} title 
    * @property {string} description 
    * @property {string} code
    * @property {number} price 
    * @property {boolean} status 
    * @property {number} stock
    * @property {string} category
    * @property {array<string>} thumbnails
    */
    try {
        let productsString = await fs.promises.readFile(pathToProducts, 'utf-8')
        const products = JSON.parse(productsString)
      
        const id = uuidv4() 
          
    
        /** @type {Product} */
        const {
          title, description, code, price, status, stock, category, thumbnails,
        } = req.body
        
        
         /** @type {Product} */
        const product = {
          //id autogenerado
          id, title, description, code, price, status, stock, category, thumbnails,
        }
            if(!title || !description || !code || !price || !status || !stock || !category || !thumbnails)
                {
                    throw new Error(`alguno de los campos esta incompleto, o es de el tipo incorrecto`) 
                }


        products.push(product)
      
        const productsStringified = JSON.stringify(products, null, '\t')
        await fs.promises.writeFile(pathToProducts, productsStringified)
        res.status(200).send({ message: 'Producto creado', data: product })
        
    } catch (error) {
        res.status(400).send({mesagge:`error: ${error}`})
    }});


    //para obtener un producto solo mediante parametros 
    ProductsRouter.get('/:pid', async (req, res)=>{
      const paramsId = req.params.pid;
    try {

      let productsString = await fs.promises.readFile(pathToProducts, 'utf-8')
      const products = JSON.parse(productsString)
      
      const productsFiltred = products.filter((product)=>product.id === paramsId)
      if (productsFiltred.length === 0) {
        res.status(404).send({ message: 'Producto no encontrado' });
      } else {
        res.status(200).send(productsFiltred[0]);  // Enviamos el primer producto encontrado
      }
    } catch (error) {
      res.status(500).send({ message: `Error: ${error.message}` })}})