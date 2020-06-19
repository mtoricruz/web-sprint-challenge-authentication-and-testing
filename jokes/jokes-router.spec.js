const supertest = require("supertest");
const { intersect } = require("../database/dbConfig");
const { expectCt } = require("helmet");

// const jokes = require("./jokes-router");

describe('test', () => {
    it('should work', () => {
        expect()
    })
})

// describe('jokes-router.js', () => {
//     beforeAll(async ()=> {
//         await dbConfig("hobbits").truncate();
//     })

//     describe('GET /', () => {
//         it('should return 200 OK', () => {
//             return supertest(jokes)
//                 .get('/')
//                 .then(res => {
//                     expect(res.status).toBe(200)
//                 })
//         })

//     }) 
// })
