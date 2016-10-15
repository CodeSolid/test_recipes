import { expect } from 'chai';

describe('Sample', () => {
    describe('#hello world test', () => {
        it('Hello world should say hello world', () => {
            var actual : string = "Hello world";
            expect(actual).to.equal("Hello world");            
        });
    });

    describe('#test something else', () => {
        it('Another test should work', () => {
            expect(1).to.not.equal(9);
        });
    });

});


