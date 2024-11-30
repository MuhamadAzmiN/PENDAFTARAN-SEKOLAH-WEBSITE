import express from "express";
import { publicRouter } from "../router/public-api.js";
import { userRouter } from "../router/api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { admin } from "../router/admin.js";
import cors from "cors";

export const web = express();

// Middleware CORS dengan konfigurasi yang diperbarui
web.use(cors({
    origin: 'http://localhost:5173', // Origin frontend Anda
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'], // Metode yang diizinkan
    allowedHeaders: ['Content-Type', 'Authorization'], // Header yang diizinkan
    credentials: true, // Izinkan pengiriman credentials (cookies/token)
}));

// Middleware untuk logging request
web.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});


web.use(express.json());


web.use(publicRouter);
web.use(userRouter);
web.use(admin);

web.use(errorMiddleware);
