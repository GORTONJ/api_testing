const supertest = require('supertest')
const app = require('./app')
const request = supertest('https://jsonplaceholder.typicode.com')

describe ('testing the GET for challenge', () => {
    test("received a response back for GET at posts/:id/comments", done => {
        request
            .get("/posts/1/comments")
            .expect(200)
            .end((err, res) => {
                done() 
            })    
    })

    test('received a response for GET at /albums/:id/photos', done => {
        request
        .get("/albums/1/photos")
        .expect(200)
        .end((err, res) => {
            done() 
        })  
    })

    test('received a response for GET at /users/:id/albums', done => {
        request
        .get("/users/1/albums")
        .expect(200)
        .end((err, res) => {
            done() 
        })  
    })
})

describe ('testing the POST for challenge', () => {
    test("/received a response back for POST at posts/:id/comments test", done => {
        request
            .post("/posts/1/comments")
            .expect(200)
            .end((err, res) => {
                done()
            })
    })

    test('received a response for POST at /albums/:id/photos', done => {
        request
        .post("/albums/1/photos")
        .expect(200)
        .end((err, res) => {
            done() 
        })  
    })

    test('received a response for POST at /users/:id/albums', done => {
        request
        .post("/users/1/albums")
        .expect(200)
        .end((err, res) => {
            done() 
        })  
    })
})
