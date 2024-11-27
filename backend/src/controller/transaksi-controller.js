
import transaksiService from "../service/transaksi-service.js"

const transaksiPembayaran = async (req,res,next) => {
    try {
      const userId = req.params.id
      const { metode_pembayaran, deskripsi, bayar } = req.body
      const biaya_pendaftaran = 10000


      if (bayar < biaya_pendaftaran) {
        throw new Error("Jumlah pembayaran kurang dari biaya pendaftaran")
      }


      const result = await transaksiService.transaksiPembayaran(userId, bayar, metode_pembayaran, deskripsi)
      
      res.status(200).json({
        data : result,
        message : "Transaksi pembayaran berhasil"
      })
    } catch (error) {
        next(error)
    }
}


export default {
    transaksiPembayaran
}