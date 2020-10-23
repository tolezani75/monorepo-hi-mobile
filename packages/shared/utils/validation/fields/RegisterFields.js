import * as Yup from "yup";

export const Schema = Yup.object().shape({
  name: Yup.string().required("Nome Obrigatório"),

  email: Yup.string()
    .required("E-mail Obrigatório")
    .email("Digite um E-mail válido"),

  password: Yup.string().required("Senha Obrigatória"),
});
