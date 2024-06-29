describe('countAllPaarl function', function () {
    it('return true if Number plate starts with CJ', function () {
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);
    });
    it('return false if otherwise', function () {
        assert.equal('CJ 67890', regNumbersForPaarl[1]);
    });
});
