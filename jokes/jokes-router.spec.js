const supertest = require("supertest");

const dbConfig = require('../database/dbConfig')
const server = require("../api/server");

describe('jokes-router.js', () => {
    beforeAll(async ()=> {
        await dbConfig("users").truncate();
    })

    describe('GET /', () => {
        it('should return 404 since not logged in', () => {
            return supertest(server)
                .get('/')
                .then((res) => {
                    expect(res.status).toBe(404)
                })
        })

        it('says res type if error is thrown', () => {
            return supertest(server)
                .get('/')
                .then((res) => {
                    expect(res.type).toHaveLength(9)
                })
        })
    }) 
})
