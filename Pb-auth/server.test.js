const server = require('./server');

describe('Server Should load', () => {
    it('server is defined', () => {
        expect(server).toBeDefined();
    });
});