describe('triangulator', function() {
    it("check if the lengths combined could form a triangle in that case : lengths = 2-2-8", function() {
        expect(triangulator(2, 2, 8)).to.equal("not a triangle");
    });

    it("check if the lengths combined could form a equilateral triangle in that case : lengths = 2-2-2", function() {
        expect(triangulator(2, 2, 2)).to.equal("equilateral");
    });

    it("check if the lengths combined could form a isoscele triangle in that case : lengths = 2-2-3", function() {
        expect(triangulator(2, 2, 3)).to.equal("isoscele");
    });

    it("check if the lengths combined could form a scalene triangle in that case : lengths = 1-2-3", function() {
        expect(triangulator(1, 2, 3)).to.equal("scalene");
    });
    
});
