import express from 'express';
import {ProductsRouter} from '../routes/products.js'

export const initApp = ()=>{

    const app = express();

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('/', ProductsRouter)
   
   

    return app
}