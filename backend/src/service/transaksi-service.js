
import { prismaClient } from "../app/database.js"
import { ResponseError } from "../error/response-error.js"


const transaksiPembayaran = async (userId, jumlah_pembayaran, metode_pembayaran,deskripsi, tanggal_transaksi) => {
    userId = parseInt(userId)
    const existingUser = await prismaClient.user.findUnique({ where: { id: userId } });


    if(!existingUser) {
        throw new ResponseError(404, "User not found")
    }


    const transaksi = await prismaClient.transaksi.create({
        data : {
            jumlah_pembayaran : jumlah_pembayaran,
            metode_pembayaran : metode_pembayaran,
            deskripsi : deskripsi,
            tanggal_transaksi : new Date(),
            userId : userId
        }
    })


    await prismaClient.user.update({
        where : {
            id : userId
        },
       
        data : {
           keterangan_pembayaran : true
        }
    })


    return transaksi 
}


export default {
    transaksiPembayaran
}


