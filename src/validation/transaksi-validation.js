import  Joi from "joi";



const transaksiValidation = Joi.object({
    jumlah_pembayaran: Joi.number().required(),
    metode_pembayaran: Joi.string().required(),
    deskripsi: Joi.string().required(),
})



export {
    transaksiValidation
}