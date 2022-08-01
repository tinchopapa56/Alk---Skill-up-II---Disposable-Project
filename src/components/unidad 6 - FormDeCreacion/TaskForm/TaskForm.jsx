import { useFormik } from 'formik/dist/Formik';
import * as Yup from "yup"
import React from 'react'

function TaskForm() {
    const initialValues = {
        title:"",
        status: "",
        priority: "",
        description:"",
    }
    const onSubmit = () => {
        alert();
    }

    const required = "Campo obligatorio"
    const validationSchema = ()=> {
        Yup.object().shape({
        title: Yup.string().required(required),
        // password: Yup.string()
        //         .min(8, "minimo 8 caracteres para la contraseña")
        //         .required(required)
        status: Yup.string().required(required),
        status: Yup.string().required(required)
        })
    }
    const formik = useFormik({ initialValues , onSubmit });
    const {handleSubmit, handleChange, errors, touched, handleBlur} = formik;

  return (
    <section>
        <h2>Crear Tarea</h2>
        <p> Anota la tarea que desees </p>
        <form onSubmit={handleSubmit}>
            <div>
                <input name="title" 
                className= {errors.title ? "error" : "" }
                onChange={handleChange} 
                onBlur={handleBlur} 
                placeholder="Titulo"/>
            </div>
            {errors.title && touched.title && <span className="error-message"> {errors.title}</span>}
            <div>
                <select 
                name="status" 
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
                <select 
                name="priority"
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
            <div><textarea name="description" onChange={handleChange} /></div>
            <button type="submit">Create</button>
        </form>
    </section>
  )
}

export default TaskForm