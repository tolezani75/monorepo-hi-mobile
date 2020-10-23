import { ValidationError } from "yup";
import { Alert } from "react-native";

export function GetValidationErrors(err = ValidationError) {
  const validationErrors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return Alert.alert(JSON.stringify(validationErrors));
}
