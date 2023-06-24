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

  const validateForm = (user: FormValues): LoginErrors => {
    const newErrors: LoginErrors = {};

    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(user.email.trim())) {
      newErrors.email = "Email is invalid";
    }

    if (!user.password.trim()) {
      newErrors.password = "Password is required";
    } else if (user.password.trim().length < 6) {
      newErrors.password = "Password should be at least 6 characters long";
    }

    return newErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validateForm(values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert(JSON.stringify(values, null, 2));
      setValues({ email: "", password: "" });
    }
  };

  return {
    values,
    errors,
    showPassword,
    toggleShowPassword,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
