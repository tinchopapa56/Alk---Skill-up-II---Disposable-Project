import React from 'react'
import {Link} from "react-router-dom"
import {useFormik} from "formik"
import * as Yup from "yup"

function Register() {

  

  const initialValues = {
    userName: "",
    password: "",
    email: "",
    teamID: "",
    role: "",
    contintent: "",
    region: "",
  }

  

  const required = "* Campo obligatorio"
    const validationSchema = ()=> {
        Yup.object().shape({
        userName: Yup.string() 
          .min(4, "La cantidad minima de caracteres es 4")
          .required(required) ,
        password: Yup.string().required(required),
        email: Yup.string().email("Debe ser un email válido").required(required),
        teamId: Yup.string().required(required),
        role: Yup.string().required(required),
        contintent: Yup.string().required(required),
        region: Yup.string().required(required)
        })
    }
  const onSubmit = () => { return alert("Registration completed") }  

  const formik = useFormik({initialValues, validationSchema, onSubmit})
  const {handleSubmit, handleChange, handleBlur, errors, touched, values} = formik


  return (
    <section>
      <h2>Register</h2>
        <form onSubmit={handleSubmit}>
           <div>
            <label>Nombre de usuario</label>
                <input name="userName" 
                className= {errors.userName ? "error" : "" }
                onChange={handleChange} 
                onBlur={handleBlur} 
                placeholder="Nombre de usuario"/>
            </div>
            {errors.title && touched.title && <span className="error-message"> {errors.title}</span>}
            <div>
            <label>Password</label>
                <input name="password" 
                className= {errors.password ? "error" : "" }
                onChange={handleChange} 
                onBlur={handleBlur} 
                placeholder="password"/>
            </div>
            {errors.title && touched.title && <span className="error-message"> {errors.title}</span>}
            <div>
            <label>Email</label>
                <input name="email" 
                className= {errors.email ? "error" : "" }
                onChange={handleChange} 
                onBlur={handleBlur} 
                placeholder="Email"/>
            </div>
            {errors.title && touched.title && <span className="error-message"> {errors.title}</span>}
            <div>
              <label>Role</label>
                <select 
                name="role" 
                className= {errors.status ? "error" : "" }
                onChange={handleChange} 
                onBlur={handleBlur}>
                    <option value="">Seleccionar Estado</option>
                        <option value="new">Nuevo</option>    
                        <option value="inProcess">En proceso</option>
                        <option value="finished">Terminado</option>
                    </select>
            </div>
            {errors.status && touched.status && <span className="error-message">{errors.status}</span>}
            <div>
            <label>Continente</label>
                <select 
                name="continent"
                className= {errors.priority ? "error" : "" }
                onChange={handleChange}
                onBlur={handleBlur}>
                    <option value="">Seleccionar Prioridad</option>
                    <option value="low">Baja</option>    
                    <option value="medium">Media</option>
                    <option value="high">Alta</option>
                </select>
            </div>
            {errors.priority && touched.priority && <span className="error-message"> {errors.priority}</span>}
            <div>
              <label>Region</label>
                <select 
                name="region" 
                className= {errors.region ? "error" : "" }
                onChange={handleChange} 
                onBlur={handleBlur}>
                    <option value="">Seleccionar Estado</option>
                        <option value="new">Nuevo</option>    
                        <option value="inProcess">En proceso</option>
                        <option value="finished">Terminado</option>
                    </select>
            </div>
            {errors.region && touched.region && <span className="error-message">{errors.region}</span>}
            <div> 
              <button type="submit"> Crear </button>
            </div>
          <div>
            <Link to="/login"> Already have an account? Log in! </Link>
          </div>
        </form>
    </section>
  )
}

export default Register