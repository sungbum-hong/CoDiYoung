import { useState, useCallback } from 'react';

export function useFormValidation() {
  const [touched, setTouched] = useState({});

  const setFieldTouched = useCallback((field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  }, []);

  const resetTouched = useCallback(() => {
    setTouched({});
  }, []);

  return {
    touched,
    setFieldTouched,
    resetTouched
  };
}

export function useEmailValidation(initialValue = '') {
  const [email, setEmail] = useState(initialValue);
  const [error, setError] = useState('');
  const { touched, setFieldTouched } = useFormValidation();

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setEmail(value);
    if (!touched.email) setFieldTouched('email');
    // 실시간 검증 제거 - blurr 시에만 검증
  }, [touched.email, setFieldTouched]);

  const handleBlur = useCallback(() => {
  }, [email, setFieldTouched]);

  const reset = useCallback(() => {
    setEmail('');
    setError('');
  }, []);

  return {
    email,
    error: touched.email ? error : '',
    handleChange,
    handleBlur,
    setEmail,
    setError,
    reset,
    isTouched: touched.email
  };
}

export function useVerificationCodeValidation(initialValue = '') {
  const [code, setCode] = useState(initialValue);
  const [error, setError] = useState('');
  const { touched, setFieldTouched } = useFormValidation();

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setCode(value);
    if (!touched.code) setFieldTouched('code');
    // 실시간 검증 제거 - blur 시에만 검증
  }, [touched.code, setFieldTouched]);

  const handleBlur = useCallback(() => {
  }, [code, setFieldTouched]);

  const reset = useCallback(() => {
    setCode('');
    setError('');
  }, []);

  return {
    code,
    error: touched.code ? error : '',
    handleChange,
    handleBlur,
    setCode,
    setError,
    reset,
    isTouched: touched.code
  };
}

export function usePasswordValidation(initialValue = '') {
  const [password, setPassword] = useState(initialValue);
  const [error, setError] = useState('');
  const { touched, setFieldTouched } = useFormValidation();

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setPassword(value);
    if (!touched.password) setFieldTouched('password');
    // 실시간 검증 제거 - blur 시에만 검증
  }, [touched.password, setFieldTouched]);

  const handleBlur = useCallback(() => {
  }, [password, setFieldTouched]);

  const reset = useCallback(() => {
    setPassword('');
    setError('');
  }, []);

  return {
    password,
    error: touched.password ? error : '',
    handleChange,
    handleBlur,
    setPassword,
    setError,
    reset,
    isTouched: touched.password,
    setTouched: () => setFieldTouched('password')
  };
}

export function usePasswordConfirmValidation(originalPassword, initialValue = '') {
  const [confirmPassword, setConfirmPassword] = useState(initialValue);
  const [error, setError] = useState('');
  const { touched, setFieldTouched } = useFormValidation();

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (!touched.confirmPassword) setFieldTouched('confirmPassword');
    // 실시간 검증 제거 - blur 시에만 검증
  }, [originalPassword, touched.confirmPassword, setFieldTouched]);

  const handleBlur = useCallback(() => {
  }, [originalPassword, confirmPassword, setFieldTouched]);

  const updateError = useCallback((newOriginalPassword) => {
    if (touched.confirmPassword) {
      setError(validatePasswordConfirmation(newOriginalPassword, confirmPassword));
    }
  }, [confirmPassword, touched.confirmPassword]);

  const reset = useCallback(() => {
    setConfirmPassword('');
    setError('');
  }, []);

  return {
    confirmPassword,
    error: touched.confirmPassword ? error : '',
    handleChange,
    handleBlur,
    updateError,
    setConfirmPassword,
    setError,
    reset,
    isTouched: touched.confirmPassword,
    setTouched: () => setFieldTouched('confirmPassword')
  };
}