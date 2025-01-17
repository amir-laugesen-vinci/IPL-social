const isMinimalPassword = require('../passwordChecker');

describe("it should verify all steps of the password to meet expectation for the password to be ok", () => {
    it("should return false for an empty password", () => {
        
        expect(isValidPassword("")).toBe(false);
    });
});
