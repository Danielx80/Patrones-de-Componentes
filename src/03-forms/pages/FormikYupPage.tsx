import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikYupPage = () => {
  const { handleSubmit, handleReset, errors, touched, getFieldProps } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "Debe tener almenos 15 caracteres o menos")
          .required("Requerido"),
        lastName: Yup.string()
          .max(15, "Debe tener almenos 15 caracteres o menos")
          .required("Requerido"),
        email: Yup.string()
          .email("El correo no tiene un formato válido")
          .required("Requerido"),
      }),
    });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        {/* Ejemplo sin el getFieldProps */}
        {/* <label htmlFor="firstName">First Name</label>
				<input
					type="text"
					name='firstName'
					value={values.firstName}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{touched.firstName && errors.firstName && <span>{errors.firstName}</span>} */}

        {/* Ejemplo con el getFieldProps */}
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        {/* Ejemplo con el getFieldProps */}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        {/* Ejemplo con el getFieldProps */}
        <label htmlFor="email">Email</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
        <button type="submit" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};
