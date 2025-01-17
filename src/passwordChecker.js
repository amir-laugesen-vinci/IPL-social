export class Main {
    passwordChecker(password) {
        const hasMinLength = this.verifylenght(password);
        const hasSpecialChar = this.containsSpecialCharacter(password);
        const hasDigit = this.containsDigit(password);
        const noIPL = this.isIplPresent(password);
        return hasMinLength && hasSpecialChar && hasDigit && noIPL;
    }

    isIplPresent(password) {
        return !/ipl/i.test(password);
    }

    containsDigit(password) {
        return /\d/.test(password);
    }

    containsSpecialCharacter(password) {
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }

    verifylenght(password) {
        return password.length >= 8;
    }
}