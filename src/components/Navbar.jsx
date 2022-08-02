import { Button } from "@mui/material";
import React, { useEffect,useState } from "react";
import "./styles/Navbar.css";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
  const navigate = useNavigate();
const [isAdmin,setisAdmin]=useState(false)
  const handlesubmit = () => {
    navigate("/Register");
  };


useEffect(()=>{

  admin()
})
const admin=()=>{
  if(localStorage.getItem("isAdmin") === "true"){
    setisAdmin(true)
  }else{
    setisAdmin(false)
  }
}

const logout = localStorage.getItem("token")

  const handleLogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("isAdmin")
    admin()
    navigate("/")
  }

  return (
    <div className="navbar">
      <h1 onClick={() => navigate("/")}>Allen</h1>
      {isAdmin ?   <Button
        variant="contained"
        className="button"
        sx={{ marginTop: "20px", marginRight: "-550px" }}
        onClick={() => navigate("/admin")}
      >
        Admin
      </Button> : ""}
    
      <Button
        variant="contained"
        className="button"
        sx={{ marginTop: "20px", marginRight: "-550px" }}
        onClick={() => navigate("/Admission")}
      >
        Apply
      </Button>

{logout === null ?    <Button
        variant="contained"
        className="button"
        sx={{ marginTop: "20px", marginRight: "50px" }}
        onClick={() => navigate("/Login")}
      >
        LogIn
      </Button> :    <Button
        variant="contained"
        className="button"
        sx={{ marginTop: "20px", marginRight: "50px" }}
        onClick={handleLogout}
      >
        Logout
      </Button>}
  
      
    </div>
  );
};
