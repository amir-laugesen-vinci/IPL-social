export class Main {
    passwordChecker(password) {
        const hasMinLength = password.length >= 8;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasDigit = /\d/.test(password);
        return hasMinLength && hasSpecialChar && hasDigit;
    }
}
