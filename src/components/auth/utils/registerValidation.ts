
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const validateForm = (
  name: string,
  email: string,
  phone: string,
  password: string,
  confirmPassword: string
): { isValid: boolean; error: string } => {
  if (!name || !email || !phone || !password || !confirmPassword) {
    return { isValid: false, error: "All fields are required" };
  }

  if (password !== confirmPassword) {
    return { isValid: false, error: "Passwords do not match" };
  }

  if (!validatePassword(password)) {
    return { isValid: false, error: "Password must be at least 6 characters" };
  }

  if (!validatePhone(phone)) {
    return { 
      isValid: false, 
      error: "Please enter a valid 10-digit Indian phone number" 
    };
  }

  return { isValid: true, error: "" };
};
