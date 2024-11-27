import express from 'express';
import userController  from '../controller/userController.js';
const publicRouter = new express.Router();
import { prismaClient } from "../app/database.js"

// Rute untuk mengambil data pengguna
// publicRouter.get('/users', userController.get);
publicRouter.post('/users/register', userController.register);
publicRouter.post('/users/login', userController.login);
publicRouter.get('/users/test', async (req, res) => {
    const result = await prismaClient.daftar.findMany({
        select: {
            nama_lengkap: true,
            asal_sekolah: true,
            jurusan: true,
            no_hp: true,
            alamat: true,
        }
    })
    res.status(200).json({
        data : result
    })
});



export {
    publicRouter
}
