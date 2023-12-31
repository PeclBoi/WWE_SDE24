export default class FormValidation {
    
    validateForm() {
        const textInput = document.getElementById('text-input') as HTMLInputElement;
        const numberInput = document.getElementById('number-input') as HTMLInputElement;
        const passwordInput = document.getElementById('password-input') as HTMLInputElement;
        const emailInput = document.getElementById('email-input') as HTMLInputElement;
    
        const textError = document.getElementById('text-error') as HTMLSpanElement;
        const numberError = document.getElementById('number-error') as HTMLSpanElement;
        const passwordError = document.getElementById('password-error') as HTMLSpanElement;
        const emailError = document.getElementById('email-error') as HTMLSpanElement;
    
        textError.textContent = '';
        numberError.textContent = '';
        passwordError.textContent = '';
        emailError.textContent = '';
    
        const textValue = textInput.value;
        const numberValue = numberInput.valueAsNumber;
        const passwordValue = passwordInput.value;
        const emailValue = emailInput.value;
    
        if (textValue.length < 3) {
            textError.textContent = 'Text must be at least 3 characters.';
        }
    
        if (isNaN(numberValue) || numberValue < 0) {
            numberError.textContent = 'Number must be a positive number.';
        }
    
        if (passwordValue.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters.';
        }
    
        if (!this.validateEmail(emailValue)) {
            emailError.textContent = 'Invalid email format.';
        }
    }
    
    validateEmail(email: string): boolean {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    }
}