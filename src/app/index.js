import express from 'express';
import {ProductsRouter} from '../routes/products.js'

export const initApp = ()=>{

    const app = express();
    app.use('/', ProductsRouter)
   
   

    return app
}