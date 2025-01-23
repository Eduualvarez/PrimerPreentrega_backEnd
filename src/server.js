import { initApp } from "./app/index.js";


const app = initApp();

const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.info(`server is active listen on http://localhost:${PORT}`)
})

