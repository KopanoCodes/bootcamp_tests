describe('isFromBelville function', function () {
    it('return True if Number plate starts with CY', function () {
        assert.equal(isFromBelville('CY 123'), true);
    });
    it('return False if Number plate does not starts with CY', function () {
        assert.equal(isFromBelville('CJ 123'), false);
    });
});
