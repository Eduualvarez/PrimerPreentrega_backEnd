import express from 'express';
import {ProductsRouter} from '../routes/products.js'

 const initApp = ()=>{

    const app = express();

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('/api/products', ProductsRouter)
   
   

    return app
};


export default initApp