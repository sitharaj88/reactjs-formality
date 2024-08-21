/// <reference types="react" />
import { FormField, FormState } from './types';
/**
 * Custom hook to manage the state and validation of a form.
 * @param initialValues - The initial values of the form fields.
 * @returns The current form state, a function to set the form state, and a submit handler.
 */
export declare function useForm<T extends Record<string, any>>(initialValues: {
    [K in keyof T]: FormField<T[K]>;
}): {
    formState: FormState<T>;
    setFormState: import("react").Dispatch<import("react").SetStateAction<FormState<T>>>;
    handleSubmit: (onSubmit: () => void) => Promise<void>;
};
