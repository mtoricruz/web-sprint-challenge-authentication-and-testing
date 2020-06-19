const supertest = require("supertest");

const jokes = require('../jokes/jokes-router');

describe('jokes endpoint', () => {
    it('GET /', () => {
        return supertest(jokes)
            .get('/')
            .then(res => {
                expect(res.body.api).toHaveLength('23')
            })
    })
})