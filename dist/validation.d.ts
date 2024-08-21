import { FormField, ValidationResult } from './types';
/**
 * Validates a single form field by applying its validation rules.
 * @param field - The form field to validate.
 * @returns The first validation error encountered, or `null` if validation passes.
 */
export declare function validateField<T>(field: FormField<T>): Promise<ValidationResult>;
