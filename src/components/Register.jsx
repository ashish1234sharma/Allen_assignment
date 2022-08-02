import { TextField, Button, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./styles/entryform.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const navigate = useNavigate();
  const [showerr, setShowerr] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });
  //  console.log(user.Password)

  const handleChange = (e) => {
    const { id, value } = e.target;

    setUser({
      ...user,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    if (
      user.username == "" ||
      user.email == "" ||
      user.mobile == "" ||
      user.password == ""
    ) {
      setShowerr(true);
    }
    const Payload = {
      username: user.username,
      email: user.email,
      mobile: user.mobile,
    password: user.password,
    };

     axios.post("http://localhost:8080/register",Payload).then((res)=>{
      navigate("/login")

     }).catch((e)=>{
      console.log(e.message)
     })

    // console.log(Payload);
  };

  return (
    <div>
      <h1>Register</h1>
      <Box
        width="400px"
        sx={{ margin: "auto", width: "400px", marginTop: "20px" }}
      >
        <TextField
          variant="outlined"
          size="medium"
          id="username"
          error={showerr}
          InputLabelProps={showerr ? { style: { color: "red" } } : null}
          label={showerr ? "" : "username"}
          helperText={showerr ? "Enter valid Username" : null}
          onChange={handleChange}
          sx={{ width: "400px" }}
          placeholder="Enter UserName"
        />
        <TextField
          variant="outlined"
          size="medium"
          id="email"
          error={showerr}
          InputLabelProps={showerr ? { style: { color: "red" } } : null}
          label={showerr ? "" : "Email"}
          helperText={showerr ? "Enter valid email" : null}
          onChange={handleChange}
          sx={{ width: "400px", marginTop: "20px" }}
          placeholder="Enter Email"
        />
        <TextField
          variant="outlined"
          size="medium"
          error={showerr}
          InputLabelProps={showerr ? { style: { color: "red" } } : null}
          label={showerr ? "" : "Mobile"}
          helperText={showerr ? "Enter valid Mobile" : null}
          onChange={handleChange}
          id="mobile"
          sx={{ width: "400px", marginTop: "20px" }}
          placeholder="Enter Mobile"
        />
        <TextField
          variant="outlined"
          size="medium"
          error={showerr}
          InputLabelProps={showerr ? { style: { color: "red" } } : null}
          label={showerr ? "" : "Password"}
          helperText={
            showerr
              ? "Enter valid Password"
              : "Password should have one uppercase alphabet, one special character and one numeric value"
          }
          onChange={handleChange}
          id="password"
          sx={{ width: "400px", marginTop: "20px", marginBottom: "20px" }}
          placeholder="Enter Password"
        />
        <span className="warning">If You are register ? </span>
        <span className="click-here" onClick={() => navigate("/Login")}>
          click here
        </span>

        <Button
          varient="contained"
          sx={{
            marginTop: "20px",
            bgcolor: "orange",
            color: "black",
            width: "400px",
          }}
          onClick={handleSubmit}
        >
          Register
        </Button>
      </Box>
    </div>
  );
};
