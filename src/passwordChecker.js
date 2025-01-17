export class Main {
    passwordChecker(password) {
        const hasMinLength = password.length >= 8;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return hasMinLength && hasSpecialChar;
    }
}
