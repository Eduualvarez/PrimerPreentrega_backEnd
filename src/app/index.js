import express from 'express';
import {ProductsRouter} from '../routes/products.js'

 const initApp = ()=>{

    const app = express();

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('/api/products', ProductsRouter)
   app.use('/api/products/:pid', ProductsRouter)
   app.use('/products', ProductsRouter)

    return app
};


export default initApp