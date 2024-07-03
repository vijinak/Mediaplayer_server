// 1 .import json server
const jsonServer = require('json-server')

// 4 .create path for db.json file using router function - for storing data

const router = jsonServer.router('db.json')

// 3. create middlewarew to convert json to js - defaults

const middleware = jsonServer.defaults()

// 4.create json server

const BACKEND = jsonServer.create()

// 5.server should use middleware and router

BACKEND.use(middleware)
BACKEND.use(router)

// 6.set porrt or server 
const PORT = 3008 || process.env.PORT

// 7. run server

BACKEND.listen(PORT,()=>{
    console.log(`sever running succesfully running ${PORT}`);
})
