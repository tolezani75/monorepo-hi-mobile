import * as Yup from "yup";

export const Schema = Yup.object().shape({
  email: Yup.string()
    .required("E-mail Obrigatório")
    .email("Digite um E-mail válido"),

  password: Yup.string().required("Senha Obrigatória"),
});
