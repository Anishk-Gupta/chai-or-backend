import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);


import dotenv from 'dotenv'

import connectDB from './db/index.js'

dotenv.config({path : './env'})

console.log(process.env.MONGODB_URI)
connectDB()



