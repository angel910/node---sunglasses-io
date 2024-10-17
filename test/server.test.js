const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app/server'); // Adjust the path as needed

const should = chai.should();
chai.use(chaiHttp);



describe('Brands', () => {
  describe("/GET brands", () => {
    it("it should GET a list of all the brands", (done) => {
      chai
        .request(server)
        .get("/brands")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});

describe('Login', () => {});

describe('Cart', () => {});