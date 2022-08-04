import React from 'react'   //use state
import "../auth.styles.css"
import { useFormik } from 'formik'
import { useNavigate, Link } from "react-router-dom"
import * as Yup from "yup"

const FormikLogin = () => {

    const navigate = useNavigate();

    // const clearToken = ()=> {
    //     localStorage.clear()
    //     console.log(localStorage.getItem("logged"));
    // }

    const initialValues = {
        email: "",
        password: ""
    }

    const validationSchema = ()=> {
        Yup.object.shape({
            email: Yup.string().email().required("Campo obligatorio"),
            password: Yup.string()
                .min(6, "La cantidad minima son 6")
                .required("Campo obligatorio")
        })
    }
    const onSubmit = ()=>{ 
        localStorage.setItem("logged", "yes") 
        navigate("/", {replace: true})
    }

    const formik = useFormik( {initialValues, validationSchema, onSubmit} )
    const { handleSubmit, handleChange, values, errors} = formik

  return (
    <div className="auth">
        <form onSubmit={handleSubmit}> 
            <h1>Iniciar Sesion</h1>
            <div> 
                <label>Email</label>
                <input 
                    type="email" 
                    name="email"
                    onChange={handleChange} 
                    value={values.email} 
                />
                {errors.email && <div> {errors.email} </div>}
            </div>
            <div>     
                <label>Password</label>
                <input onChange={handleChange} value={values.password} type="text" name="password" />
                {errors.password && <div> {errors.password} </div>}
            </div>
            <div> 
                <button onClick={onSubmit} type="button">Enviar</button>
            </div>
            <div>
                <Link to="/register">Don´t have an account? Make One! </Link>
            </div>
        </form> 
    </div>
  )
}

export default FormikLogin