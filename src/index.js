import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);


import dotenv from 'dotenv'

import connectDB from './db/index.js'
import app from './app.js'

dotenv.config({path : './env'})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is listening on port ${process.env.PORT}` )
    })
})
.catch((err)=>{
    console.log("MONGO DB connection failed !! ",err)
})



