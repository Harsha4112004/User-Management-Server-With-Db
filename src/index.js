import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/index.js';
import { router } from './routes/user.routes.js';
dotenv.config({path: './.env'});

const app = express();

app.use(express.json());
app.use("/users", router);

const port = process.env.PORT;

connectDb()
    .then(()=>{app.listen(port,()=>{console.log(`Server running on port:${port}`);
    })})
    .catch((err)=>{console.log(`MongoDb failed to connect:${err}`);
    })