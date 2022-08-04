import React from 'react'   //use state
import "../auth.styles.css"
import { useFormik } from 'formik'
import { useNavigate, Link } from "react-router-dom"
import * as Yup from "yup"

const FormikLogin = () => {

    const initialValues = {
        email: "",
        password: ""
    }

    const onSubmit = ()=>{ 
        localStorage.setItem("logged", "yes") 
        navigate("/", {replace: true})
    }

    const validationSchema = Yup.object().shape({
            email: Yup.string().email().required("Campo obligatorio"),
            password: Yup.string()
                .min(6, "La cantidad minima son 6")
                .required("Campo obligatorio")
        });

    const navigate = useNavigate();

    

    const formik = useFormik( {initialValues, validationSchema, onSubmit} )
    const { handleSubmit, handleChange, handleBlur, touched, errors} = formik

  return (
    <div className="auth">
        <form onSubmit={handleSubmit}> 
            <h1>Iniciar Sesion</h1>

            <div> 
                <label>Email</label>
                <input name="email" onChange={handleChange} onBlur={handleBlur}/>
            </div>
            {errors.email && touched.email && <span className="error-message"> {errors.email}</span>}
            <div>     
                <label>Password</label>
                <input onChange={handleChange} type="password" name="password" />
            </div>
            {errors.password && <div> {errors.password} </div>}
            <div> 
                <button type="submit">Enviar</button>
            </div>

            <div>
                <Link to="/register">Don´t have an account? Make One! </Link>
            </div>
        </form> 
    </div>
  )
}

export default FormikLogin