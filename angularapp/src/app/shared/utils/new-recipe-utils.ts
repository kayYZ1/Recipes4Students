import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const isImageUrl = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const value: string = control.value;
        if (!value) {
            return null;
        }

        const regexCheck = /\.(jpg|jpeg|png)$/.test(value)

        return regexCheck ? null : { invalidImageUrl: true };
    }
}

export const isRecipeUrlValid = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const value: string = control.value;
        if (!value) {
            return null;
        }

        const regexCheck = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(value)

        return regexCheck ? null : { invalidRecipeUrl: true };
    }
}