import React from 'react'   //use state
import "../auth.styles.css"
import { useFormik } from 'formik'
import { useNavigate, Link } from "react-router-dom"

const FormikLogin = () => {
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: ""
    }
    const validate = values=>{
        const errors= [];
        if(!values.email){ errors.email = 'email is required'  }
        if(!values.password){ errors.password = 'password is required' }
        return errors;
    }
    const onSubmit = ()=>{ 
        localStorage.setItem("logged", "yes") 
        navigate("/", {replace: true})
    }

    const formik = useFormik( {initialValues, validate, onSubmit} )

  return (
    <div>
        <form onSubmit = {formik.handleSubmit}> 
            <h1>Iniciar Sesion</h1>
            <div> 
                <label>email</label>
                <input onChange={formik.handleChange} value={formik.values.email} type="email" name="email"  required />
            {formik.errors.email && <div> {formik.errors.email} </div>}
            </div>
            <div>     
                <label>Password</label>
                <input onChange={formik.handleChange} value={formik.values.password} type="text" name="password" required />
            {formik.errors.password && <div> {formik.errors.password} </div>}
            </div>
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