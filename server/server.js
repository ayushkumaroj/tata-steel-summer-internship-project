import express from 'express';
import router from './routes/location.route.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { VerifySignature } from './middlewares/Signature.js';
import {dbConnect} from './connection/db.connect.js'
dotenv.config();

const app = express();

dbConnect()
app.use(cors()); 
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(express.json({ limit: "1mb" }));


app.use('/api/v1', router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
