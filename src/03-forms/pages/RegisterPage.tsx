import { useForm } from "../hooks/useForm";
import { FormEvent } from "react";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    onChange,
    formData,
    resetForm,
    isValidEmail,
    name,
    password,
    email,
    password1,
  } = useForm({
    name: "",
    email: "",
    password: "",
    password1: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page </h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(ev) => onChange(ev)}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(ev) => onChange(ev)}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es valido</span>}
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(ev) => onChange(ev)}
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña debe tener 6 caracteres</span>
        )}
        <input
          type="password"
          placeholder="Repeat Password"
          name="password1"
          value={password1}
          onChange={(ev) => onChange(ev)}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length > 0 && password !== password1 && (
          <span>Las contraseñas deben ser iguales</span>
        )}
        <button type="submit">Create</button>
        <button type="reset" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
