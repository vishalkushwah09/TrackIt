import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import "./db/dbConfi.js";
import AdminRoute from "./routes/admin.routes.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";



dotenv.config();

const server = express();
server.use(cors());
server.use(cookieParser(    ))

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

server.use("/",()=>{
    console.log("backend live");
})
server.use("/admin",AdminRoute);
server.use("/user",userRouter);

server.listen(process.env.PORT,"0.0.0.0",()=>{
    console.log("server started");
})

