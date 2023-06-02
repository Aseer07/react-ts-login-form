import { useState } from "react";
import { FormValues } from "../../types/ILogin";
type LoginErrors = {
  email?: string;
  password?: string;
};

function useForm(initialValues: FormValues) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<LoginErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (): void => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: LoginErrors = {};

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email.trim())) {
      newErrors.email = "Email is invalid";
    }

    if (!values.password.trim()) {
      newErrors.password = "Password is required";
    } else if (values.password.trim().length < 6) {
      newErrors.password = "Password should be at least 6 characters long";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Form is valid, submit the data:", values);
      // Perform additional form submission logic here
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    showPassword,
    toggleShowPassword,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export default useForm;
