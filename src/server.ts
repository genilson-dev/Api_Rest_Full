import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = Number(process.env.PORT) || 1001;



app.listen(PORT, () => {
    console.log(`The server is running in the port ${PORT}`)
})

