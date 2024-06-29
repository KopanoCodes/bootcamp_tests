describe('isWeekday function', function () {
    it('return False if Weekend', function () {
        assert.equal(isWeekday('Saturday'), false);
    });
    it('return True if Weekday', function () {
        assert.equal(isWeekday('Monday'), true);
    });
});
assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Monday'), true);