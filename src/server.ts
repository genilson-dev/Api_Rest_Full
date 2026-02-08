import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import router from "./routes/auth.routes.js";
// import { bankPrisma } from "./prisma/index.js";

// const users = await bankPrisma.user.findMany()
// console.log(users)

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(router)
const PORT = Number(process.env.PORT) || 3001;



app.listen(PORT, () => {
    console.log(`The server is running in the port ${PORT}`)
})

