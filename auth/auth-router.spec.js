// const supertest = require("supertest");

// const auth = require('./auth-router');
// const dbConfig = require('../database/dbConfig');
// const { request } = require("express");

// describe('auth endpoints', () => {
    // let token;

    // beforeAll((done) => {
    //     request(auth)
    //         .post('/login')
    //         .send({
    //             username: 'newaccount',
    //             password: 'newpassword'
    //         })
    //         .end((err, response) => {
    //             token = response.body.token;
    //             done();
    //         })
    // })


    // it('POST Register /', () => {
    //     const username = 'testusername'

    //     return supertest(auth)
    //         .post('/register')
    //         .send({ username: 'testusername', password: 'testpassword'})
    //         .then(res => {
    //             expect(res.body.username).toBe(username)
    //         })
    // })

    // describe('POST Login', () => {
    //     it('should log user account in', () => {
    //         const user = [ { username: 'newaccount', password: 'newpassword'} ]

    //         return supertest(auth).post('/login').send(user)
    //     })
    // })
// })