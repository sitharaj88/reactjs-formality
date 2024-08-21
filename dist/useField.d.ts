/// <reference types="react" />
import { FormState } from './types';
/**
 * Custom hook to manage the state and validation of a single form field.
 * @param name - The name of the form field.
 * @param formState - The current state of the form.
 * @param setFormState - The function to update the form state.
 * @returns The current value, error message, and a change handler for the form field.
 */
export declare function useField<T>(name: keyof T, formState: FormState<T>, setFormState: React.Dispatch<React.SetStateAction<FormState<T>>>): {
    value: { [K in keyof T]: import("./types").FormField<T[K]>; }[keyof T];
    error: Partial<Record<keyof T, string>>[keyof T];
    handleChange: (value: T[keyof T]) => void;
};
