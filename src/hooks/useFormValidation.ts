import { useState, useCallback, ChangeEvent } from 'react';

export function useEmailValidation() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | boolean>(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(false);
  }, [error]);

  const handleBlur = useCallback(() => {
    // Optional: add validation here if needed, but usage suggests external validation
  }, []);

  return { email, handleChange, handleBlur, error, setError };
}

export function useVerificationCodeValidation() {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | boolean>(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    if (error) setError(false);
  }, [error]);

  const handleBlur = useCallback(() => {}, []);

  const reset = useCallback(() => {
    setCode('');
    setError(false);
  }, []);

  return { code, handleChange, handleBlur, error, setError, reset };
}

export function usePasswordValidation() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | boolean>(false);
  const [touched, setTouched] = useState(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError(false);
  }, [error]);

  const setTouchedFn = useCallback(() => setTouched(true), []);

  return { password, handleChange, handleBlur: setTouchedFn, error, setError, touched, setTouched: setTouchedFn };
}

export function usePasswordConfirmValidation(password: string) {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | boolean>(false);
  const [touched, setTouched] = useState(false);

  const updateError = useCallback((value: string) => {
    setConfirmPassword(value);
    if (error) setError(false);
  }, [error]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    updateError(e.target.value);
  }, [updateError]);
  
  const setTouchedFn = useCallback(() => setTouched(true), []);

  return { confirmPassword, updateError, handleChange, handleBlur: setTouchedFn, error, setError, touched, setTouched: setTouchedFn };
}
