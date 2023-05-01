import "../styles/styles.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page </h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe ser de 3 caracteres o mas")
            .max(15, "El nombre debe ser menor de 15 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("Revise el formato del correo")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Minimo 3 letras")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="Nombre"
              type="text"
              name="name"
              placeholder="Daniel"
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="daniel@gmail.com"
            />
            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="********"
            />
            <MyTextInput
              label="Password"
              name="password2"
              type="password"
              placeholder="********"
            />

            <button type="submit"> Create </button>
            <button type="reset"> Reset Form </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
