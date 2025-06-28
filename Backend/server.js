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
   server.use(cors({
  origin: "https://trackit-frontend-tauz.onrender.com",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
  }));
   server.options("*", cors());
   

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended:true}));


    server.use("/admin",AdminRoute);
    server.use("/user",userRouter);
    server.get("/",(req,res)=>{
        console.log("backend live");
    })

    server.listen(process.env.PORT || 4000,"0.0.0.0",()=>{
        console.log("server started");
    })

