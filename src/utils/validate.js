export const checkValidData = (isSignedIn, name, email, password) => {
  if (!isSignedIn && !name) {
    return "Name is Required";
  }
  if (!email) {
    return "Email is Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid Email";
  }
  if (!password) {
    return "Password is Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    )
  ) {
    return "Password is not valid";
  }
  return null;
};
