process.env.NODE_ENV = 'test';

import chai from 'chai';
const expect = chai.expect;
chai.should();
import chaiHttp from 'chai-http';
import app from '../index.js';
// import { app } from '../index.js';

chai.use(chaiHttp);

before((done) => {
    done();
});

after((done) => {
    done();
});


describe('Signin Test', () => {

    it('Signin user', (done) => {
        const task = {
            username: "pratham",
            password: "pratham"
        }
        // console.log(task);
        chai.request(app)
        .post('/login')
        .send(task)
        .end((err, res) => {
            res.should.have.status(200);
            if (err) console.log('Unable to signin user: ', err);
            done();
        });
    });

});

  