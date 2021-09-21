import "./style.css";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";

function Form() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Nome deve ter apenas letras")
      .required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("E-mail obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo 8 caracteres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-zA-Z]){1}).*$/,
        "Senha deve conter letras, números e ao menos um caracter especial"
      )
      .required("Senha obrigatória"),
    passwordconfirm: yup
      .string()
      .min(8, "Mínimo 8 caracteres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-zA-Z]){1}).*$/,
        "Senha deve conter letras, números e ao menos um caracter especial"
      )
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
      .required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleForm = (data) => {
    console.log(data);
    history.push(`/home/${data.name}`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            label="Nome"
            margin="normal"
            variant="standard"
            size="small"
            color="secondary"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </div>
        <div>
          <TextField
            label="E-mail"
            margin="normal"
            variant="standard"
            size="small"
            color="secondary"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>
        <div>
          <TextField
            label="Senha"
            margin="normal"
            variant="standard"
            size="small"
            color="secondary"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>
        <div>
          <TextField
            label="Confirmar senha"
            margin="normal"
            variant="standard"
            size="small"
            color="secondary"
            {...register("passwordconfirm")}
            error={!!errors.passwordconfirm}
            helperText={errors.passwordconfirm?.message}
          />
        </div>
        <div className="buttonContainer">
          <Button type="submit" variant="contained" color="secondary">
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}
export default Form;
