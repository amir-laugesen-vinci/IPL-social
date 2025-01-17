import { Main } from "../src/passwordChecker.js";

describe("it should verify all steps of the password to meet expectation for the password to be ok", function() {
    const main = new Main();

    it("should return false for an empty password", function() {
        
        const result = main.passwordChecker("");
        expect(result).toBe(false);
    });

    it("should fail if password is less than 8 characters", function() {
        
        const result = main.passwordChecker("abc123");
        expect(result).toBe(false);
    });
});
