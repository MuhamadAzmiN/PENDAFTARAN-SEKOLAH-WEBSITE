import supertest from "supertest";
import { web } from "../src/app/web";

import { createTestDaftar, createTestDaftarAdmin, createTestTransaksiAdmin, createTestUserAdmin, getTestDaftar, getTestDaftarAdmin, getTestTransaksiAdmin, getTestUser, getTestUserAdmin, removeAllTextDaftar, removeAllTextDaftarAdmin, removeAllTextTransaksiAdmin, removeTestUserAdmin } from "./test-utils";
import { remove } from "winston";
import { prismaClient } from "../src/app/database";




// describe('GET /users/admin/daftar', () => {
//     beforeEach(async () => {
//         await createTestUserAdmin()
//     })


//     afterEach(async () => {
//         await removeTestUserAdmin();
//     })


//     it('should get', async () => {
//         const result = await supertest(web).get('/users/admin/daftar').set('Authorization', 'test')
//         console.log(result.body)
//         expect(result.status).toBe(200)
//     })
// })




// describe('PUT /users/admin/daftar/:id', () => {
//     beforeEach(async () => {
//         await createTestUserAdmin()
//         await createTestDaftarAdmin()
//     })


//     afterEach(async () => {
//         await removeAllTextDaftarAdmin();
//         await removeTestUserAdmin();
//     })



//     it('should update', async () => {
//         const testDaftar =  await getTestDaftarAdmin()
//         const result = await supertest(web).put('/users/admin/daftar/' + testDaftar.id).set('Authorization', 'test').send({
//             nama_lengkap : "admin1",
//             asal_sekolah : "test baru",
//             jurusan      : "test baru",
//             no_hp        : "08123456789", // Diganti agar valid    
//             alamat       : "test"
//         })

//         expect(result.status).toBe(200)
//         expect(result.body.data.id).toBe(testDaftar.id)
//         expect(result.body.data.nama_lengkap).toBe("admin1")
//         expect(result.body.data.asal_sekolah).toBe("test baru")
//         expect(result.body.data.jurusan).toBe("test baru")
//         expect(result.body.data.no_hp).toBe("08123456789")
//         expect(result.body.data.alamat).toBe("test")
//     })
// })



// describe('DELETE /users/admin/daftar/delete/:id', () => {
//     beforeEach(async () => {
//         await createTestUserAdmin()
//         await createTestDaftarAdmin()
//     })


//     afterEach(async () => {
//         await removeAllTextDaftarAdmin();
//         await removeTestUserAdmin();
//     })



//     it('should delete', async () => {
//         let testDaftar = await getTestDaftarAdmin()
//         const result = await supertest(web).delete('/users/admin/daftar/delete/' + testDaftar.id).set('Authorization', 'test')
//         expect(result.status).toBe(200)

//             // expect(result.body.data.id).toBe(testDaftar.id)


//         testDaftar = await getTestDaftarAdmin()
//         expect(testDaftar).toBeNull()
//     })
// })




// //USER


// describe('GET /users/admin/daftar-user', () => {
//     beforeEach(async () => {
//         await createTestUserAdmin()
//         await createTestDaftarAdmin()
//     })


//     afterEach(async () => {
//         await removeAllTextDaftarAdmin();
//         await removeTestUserAdmin();
//     })


//     it('should get', async () => {
//         const result = await supertest(web).get('/users/admin/daftar-user').set('Authorization', 'test')
//         expect(result.status).toBe(200)
//     })
// })


// describe('PUT /users/admin/daftar/keterangan-lulus/:id', () => {
//     beforeEach(async () => {
//         await createTestUserAdmin()
//         await createTestDaftarAdmin()
//     })


//     afterEach(async () => {
//         await removeAllTextDaftarAdmin();
//         await removeTestUserAdmin();
//     })


//     it('should update', async () => {
//         const testUser =  await getTestUserAdmin()
//         const result = await supertest(web).put('/users/admin/daftar/keterangan-lulus/' + testUser.id).set('Authorization', 'test').send({
//             keterangan_lulus : true
//         })



//         expect(result.status).toBe(200)
//         expect(result.body.data.id).toBe(testUser.id)
//         expect(result.body.data.keterangan_lulus).toBe(true)
//     })
// })



// // TRANSAKSI


describe('GET /users/admin/daftar-transaksi', () => {
    beforeEach(async () => {
        await createTestUserAdmin()
        await createTestDaftarAdmin()
        await createTestTransaksiAdmin()
    })



    afterEach(async () => {
        await removeAllTextDaftarAdmin();
        await removeAllTextTransaksiAdmin();
        await removeTestUserAdmin();
    })


    it('should get', async () => {
        
        const result = await supertest(web).get('/users/admin/daftar-transaksi').set('Authorization', 'test')
        expect(result.status).toBe(200)

    })
})




// describe('PUT /users/admin/daftar-transaksi/:id', () => {
//     beforeEach(async () => {
//         await createTestUserAdmin()
//         await createTestDaftarAdmin()
//         await createTestTransaksiAdmin()
//     })



//     afterEach(async () => {
//         await removeAllTextDaftarAdmin();
//         await removeAllTextTransaksiAdmin();
//         await removeTestUserAdmin();
//     })


//     it('should update', async () => {
//         const testTransaksi =  await getTestTransaksiAdmin()
//         parseInt(testTransaksi.id)
//         const result = await supertest(web).put('/users/admin/daftar-transaksi/' + testTransaksi.id).set('Authorization', 'test').send({
//             jumlah_pembayaran : 1000,
//             metode_pembayaran : "test baru",
//             deskripsi : "test",
//             tanggal_transaksi : new Date()
//         })



//         expect(result.status).toBe(200)
//         expect(result.body.data.id).toBe(testTransaksi.id)
//         expect(result.body.data.jumlah_pembayaran).toBe("1000")
//         expect(result.body.data.metode_pembayaran).toBe("test baru")
//         expect(result.body.data.deskripsi).toBe("test")
//     })
// })



