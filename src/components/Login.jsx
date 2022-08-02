import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [showerror, setShowError] = useState(false);

  const [user, setUser] = useState({
    username: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };
  // console.log(user.username)
  const handleSubmit = () => {
   
      const payload = {
        username: user.username,
        password: user.Password,
      };
      console.log(payload);
      axios
        .post("http://localhost:8080/login", payload)
        .then(({ data }) => {
          console.log(data);
          setShowError(false);
          localStorage.setItem("isAdmin", data.user.isAdmin);
          localStorage.setItem("token", data.token);
          navigate("/");
        })
        .catch((e) => {
          console.log(e.message);
          setShowError(true);
        });
    
   
  };

  return (
    <div>
      <h1>Log in</h1>
      <Box
        width="400px"
        sx={{ margin: "auto", width: "400px", marginTop: "20px" }}
      >
        <TextField
          variant="outlined"
          size="medium"
          id="username"
          
          error={showerror}
          InputLabelProps={showerror ? { style: { color: "red" } } : null}
          helperText={showerror ? "Invalid username" : null}
          onChange={handleChange}
          sx={{ width: "400px" }}
          placeholder="Enter UserName"
        />

        <TextField
          variant="outlined"
          size="medium"
          id="password"
          
          error={showerror}
          InputLabelProps={showerror ? { style: { color: "red" } } : null}
          helperText={showerror ? "Invalid Password" : null}
          onChange={handleChange}
          sx={{ width: "400px", marginTop: "20px", marginBottom: "20px" }}
          placeholder="Enter Password"
        />
        <span className="warning">If You are not register ? </span>
        <span className="click-here" onClick={() => navigate("/Register")}>
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
          Login
        </Button>
      </Box>
    </div>
  );
};
