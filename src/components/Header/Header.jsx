import React from 'react'
import "./Header.styles.css"
import { useNavigate } from "react-router-dom"



export const Header = () => {
    const Navigate = useNavigate()

    const handleOutput = () => {
        localStorage.removeItem("logged")
        Navigate("/", { replace:true })
    }

  return (
    <header className="header">
        <img src="../../public/logo512.png" />
        <div onClick={handleOutput}>Header</div>
    </header>
    
  )
}