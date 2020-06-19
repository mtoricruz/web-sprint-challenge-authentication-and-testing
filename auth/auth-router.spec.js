const supertest = require("supertest");

const dbConfig = require('../database/dbConfig')
const server = require("../api/server");

describe('auth-router endpoints', () => {
    beforeAll(async ()=> {
        await dbConfig("users").truncate();
    })

    describe('POST Register', () => {
        it('registers a user', () => {
            return supertest(server)
                .post('/api/auth/register')
                .send({ username: 'hello', password: 'helloagain' })
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })

        it('should throw error 500 because no password', () => {
            return supertest(server)
                .post('/api/auth/register')
                .send({ username: 'hello', password: '' })
                .then(res => {
                    expect(res.status).toBe(400)
                })
        })
    })

    describe('POST Login', () => {
        it('should see if message property shows up', () => {
            const username = 'newaccount'
            const password = 'newpassword'

            return supertest(server)
                .post('/api/auth/login')
                .send({ username: username, password: password })
                .then((res) => {
                    expect(res.body).toHaveProperty('message');
                })
        }) 
        it('should throw a 401 since theres no user data', () => {
            return supertest(server)
                .post('/api/auth/login')
                .send({ username: 'newaccount', password: 'newpassword' })
                .then((res) => {
                    expect(res.status).toBe(401);
                })
        }) 
    })
})