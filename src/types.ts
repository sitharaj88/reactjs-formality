/**
 * The result of a validation rule.
 * A `string` indicates an error message, while `null` means the validation passed.
 */
export type ValidationResult = string | null;

/**
 * Interface representing a validation rule.
 * Takes a value of type `T` and returns a `ValidationResult`.
 */
export interface ValidationRule<T> {
  (value: T): ValidationResult | Promise<ValidationResult>;
}

/**
 * Interface representing a form field.
 * Contains the current value, validation rules, and an optional error message.
 */
export interface FormField<T> {
  value: T;
  validationRules?: ValidationRule<T>[];
  errorMessage?: string;
}

/**
 * Interface representing the overall state of the form.
 * Includes form values, errors, and a boolean indicating form validity.
 */
export interface FormState<T> {
  values: { [K in keyof T]: FormField<T[K]> };
  errors: Partial<Record<keyof T, string>>;
  isValid: boolean;
}
