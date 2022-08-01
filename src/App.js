import './App.css';
import {Route, Routes, Navigate, useLocation} from "react-router-dom"
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

    const pageTransition = {
        in: {
            opacity: 1
        },
        out: {
            opacity: 0
        }
    }

export const App =() => {
    const location = useLocation();
    return (
    <AnimatePresence>
        <Routes> 
            <Route 
                path="/" 
                element={
                <RequireAuth> 
                    <motion.div 
                    className="page" 
                    initial="out" 
                    animate ="in" 
                    exit="out"
                    variants={pageTransition}
                    >
                        <Tasks />
                    </motion.div>
                </RequireAuth> 
                    }
                />
            {/* <Route path="/login" element={<FormikLogin />} /> */}
            <Route 
                path="/login" 
                element={
                <motion.div 
                    className="page" 
                    initial="out" 
                    animate ="in" 
                    exit="out"
                    variants={pageTransition}
                >
                <FormikLogin />
                </motion.div>
                } 
            />
            <Route path="*" element={
            <motion.div 
            className="page"
            initial = "out"
            animate = "in"
            exit="out"
            variants={pageTransition}
            >
                <Error404 />
            </motion.div>
            } />
        </Routes>
    </AnimatePresence>
    )
}
