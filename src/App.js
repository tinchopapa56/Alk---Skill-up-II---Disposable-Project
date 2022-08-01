import './App.css';
import {Route, Routes, Navigate} from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion';

import FormikLogin from "./components/unidad 3 - formik/formik Login"
import Error404 from "./components/views/Error404/Error404"
import {Tasks} from "./components/views/Tasks/Tasks"

const RequireAuth = ( {children} )=>{
    if(!localStorage.getItem("logged")){
        return <Navigate to="/login" replace={true} />
    } else{
        return children;
    }
}

export const App =() => 
    <AnimatePresence>
        <Routes> 
            <Route 
                path="/" 
                element={
                    <RequireAuth> 
                    <Tasks />
                    </RequireAuth> 
                    }
                />
            <Route path="/login" element={<FormikLogin />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    </AnimatePresence>
