import express from "express";
import { publicRouter } from "../router/public-api.js"
import { userRouter } from "../router/api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { admin } from "../router/admin.js";
import cors from "cors"


export const web = express()
web.use(express.json())

web.use(cors())
web.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
}))




web.use(publicRouter)

web.use(userRouter)

web.use(admin)

web.use(errorMiddleware)
