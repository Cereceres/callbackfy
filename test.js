const callby = require('./index');

const assert = require('assert');

describe('test to calbackyfy', () => {
    it('shoudl return a function', (done) => {
        const withCallback = callby((param) => {
            assert(param === 'param');
            return Promise.resolve('testing');
        });
        withCallback('param', (err, res) => {
            assert(!err);
            assert(res === 'testing');

            done();
        });
    });

    it('shoudl catch the error', (done) => {
        const withCallback = callby((param) => {
            assert(param === 'param');
            return Promise.reject('error');
        });
        withCallback('param', (err, res) => {
            assert(err === 'error');
            assert(!res);

            done();
        });
    });
});
