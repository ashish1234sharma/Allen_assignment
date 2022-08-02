import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./styles/entryform.css";
import { Branches, courses, Batches } from "./Data/data";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const EntryForm = () => {
  const [course, setCourses] = useState([]);
  const [batch, setBatch] = useState([]);
  const navigate=useNavigate()
  const [input, setInput] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    branch: "",
    course: "",
    batch: "",
    Fees: "Rs 19999 /-",
  });
  console.log(input);
  const [state, setState] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const name = e.target.value;

    setCourses(courses.filter((event) => event.branch_id === name));
    setBatch(Batches.filter((e) => e.course_id == name));
    setInput({
      ...input,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    if (
      input.name == "" ||
      input.email == "" ||
      input.mobile == "" ||
      input.gender == "" ||
      input.branch == "" ||
      input.course == "" ||
      input.batch == ""
    ) {
      alert("Please fill the credentials");
    }
    const payload = {
      name: input.name,
      email: input.email,
      mobile: input.mobile,
      gender: input.gender,
      branch: input.branch,
      course: input.course,
      batch: input.batch,
      Fees:
        input.course == "JEE"
          ? "Rs 99000 /-" 
          :  input.course == "UPSC"
          ? "Rs 89000 /-"
          :  input.course == "AIPMT"
          ? "Rs 79000 /-"
          : input.course == "STATE PSC"
          ? "Rs 69000 /-"
          : input.course == "PCM"
          ? "Rs 59000 /-"
          : "Rs 100000 /-",
    };
    console.log(payload);
    axios
      .post("http://localhost:8080/Studentdetails", payload)
      .then(({ data }) => {
        console.log(data);
        alert("You are registered")
        navigate("/")
      });
  };
  return (
    <div>
      <h2>Register for Admission</h2>
      <Box
        width="400px"
        sx={{ margin: "auto", width: "400px", marginTop: "20px" }}
      >
        <TextField
          varient="Standard"
          label="Enter Name"
          size="medium"
          id="name"
          value={input.name}
          sx={{ width: "400px" }}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <TextField
          varient="Standard"
          label="Enter Email"
          size="medium"
          id="email"
          value={input.email}
          sx={{ width: "400px", marginTop: "20px" }}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <TextField
          varient="Standard"
          label="Enter Mobile"
          size="medium"
          value={input.mobile}
          id="mobile"
          sx={{ width: "400px", marginTop: "20px" }}
          placeholder="Enter Mobile"
          onChange={handleChange}
        />
        <select
          id="gender"
          label="batches"
          className="select"
          onChange={handleChange}
        >
          <option>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select id="branch" className="select" onChange={handleChange}>
          <option>Branches</option>
          {Branches.map((e) => {
            return (
              <option value={e.branch} key={e.id}>
                {e.branch}
              </option>
            );
          })}
        </select>
        <select id="course" className="select" onChange={handleChange}>
          <option>Course</option>
          {course.map((e) => {
            return (
              <option value={e.course} key={e.id}>
                {e.course}
              </option>
            );
          })}
        </select>
        <select id="batch" className="select" onChange={handleChange}>
          <option>Batch</option>
          {batch.map((e) => {
            return (
              <option value={e.Batch} key={e.id}>
                {"Batch" + " " + e.Batch}
              </option>
            );
          })}
        </select>
        <TextField
          varient="Standard"
          label="Fee Structure"
          id="Fees"
          value={
            input.course == "JEE"
              ? "Rs 99000 /-" 
              : input.course == "UPSC"
              ? "Rs 89000 /-"
              :  input.course == "AIPMT"
              ? "Rs 79000 /-"
              :  input.course == "STATE PSC"
              ? "Rs 69000 /-"
              :  input.course == "PCM"
              ? "Rs 59000 /-"
              : "Rs 100000 /-"
          }
          sx={{ width: "400px", marginTop: "20px" }}
          size="medium"
        />
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
          Submit
        </Button>
      </Box>
    </div>
  );
};
