import React, { useEffect, useState } from "react";
import axios from "axios"
import {
  TextField,
  Button,
  Stack,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  MenuItem,
  Menu,
} from "@mui/material";

export const AdminPage = () => {
  const [data,setData]=useState([])
  const [Branches, setBranches] = useState(null);
  const [Courses, setCourses] = useState(null);
  const [Batches, setBatches] = useState(null);
  const openBranches = Boolean(Branches);
  const openCourses = Boolean(Courses);
  const openBatches = Boolean(Batches);

  const handleBranches = (e) => {
    setBranches(e.currentTarget);
  };
  const handleCourses = (e) => {
    setCourses(e.currentTarget);
  };
  const handleBatches = (e) => {
    setBatches(e.currentTarget);
  };

  const handlecloseBranches = () => {
    setBranches(null);
  };
  const handlecloseCourses = () => {
    setCourses(null);
  };
  const handlecloseBatches = () => {
    setBatches(null);
  };
  useEffect(()=>{
  axios.get("http://localhost:8080/Studentdetails").then(({data})=>{
    setData(data)
    console.log(data)
  })
  },[])

  const handleFilter=(name)=>{
    axios.get(`http://localhost:8080/getfilter?sorttype=branch&sortdirection=${name}`).then(({data})=>{
      setData(data)
      console.log(data)
    }).catch((e)=>{
      console.log(e.message)
    })
    
  }
  const handleFilterCourse=(name)=>{
    axios.get(`http://localhost:8080/getfilter?sorttype=course&sortdirection=${name}`).then(({data})=>{
      setData(data)
      console.log(data)
    }).catch((e)=>{
      console.log(e.message)
    })
    
  }
  const handleFilterBatch=(name)=>{
    axios.get(`http://localhost:8080/getfilter?sorttype=batch&sortdirection=${name}`).then(({data})=>{
      setData(data)
      console.log(data)
    }).catch((e)=>{
      console.log(e.message)
    })
    
  }


  return (
    <div>
      <Stack spacing={3} direction="row" sx={{marginTop:'20px'}}>
        <Stack sx={{ marginLeft: "400px" }}>
          <Menu
            id="Branches-menu"
            anchorEl={Branches}
            open={openBranches}
            onClose={handlecloseBranches}
          >
            <MenuItem onClick={()=>handleFilter("Kota")}>Kota</MenuItem>
            <MenuItem onClick={()=>handleFilter("Indore")}>Indore</MenuItem>
            <MenuItem onClick={()=>handleFilter("New Delhi")}>New Delhi</MenuItem>
            <MenuItem onClick={()=>handleFilter("Bhopal")}>Bhopal</MenuItem>
            <MenuItem onClick={()=>handleFilter("Jabalpur")}>Jabalpur</MenuItem>
            <MenuItem onClick={()=>handleFilter("Kolkata")}>Kolkata</MenuItem>
          </Menu>
          <Button color="primary" id="Branches-button" onClick={handleBranches}>
            Branches
          </Button>
        </Stack>
        <Stack sx={{ marginLeft: "400px" }}>
          <Menu
            id="courses-menu"
            anchorEl={Courses}
            open={openCourses}
            onClose={handlecloseCourses}
          >
            <MenuItem onClick={()=>handleFilterCourse("JEE")}>JEE</MenuItem>
            <MenuItem onClick={()=>handleFilterCourse("AIPMT")}>AIPMT</MenuItem>
            <MenuItem onClick={()=>handleFilterCourse("UPSC")}>UPSC</MenuItem>
            <MenuItem onClick={()=>handleFilterCourse("STATE PSC")}>STATE PSC</MenuItem>
            <MenuItem onClick={()=>handleFilterCourse("PCM")}>PCM</MenuItem>
          </Menu>
          <Button color="primary" id="Course-button" onClick={handleCourses}>
            Courses
          </Button>
        </Stack>
        <Stack sx={{ marginLeft: "400px" }}>
          <Menu
            id="batches-menu"
            anchorEl={Batches}
            open={openBatches}
            onClose={handlecloseBatches}
          >
            <MenuItem onClick={()=>handleFilterBatch("1")}>Batch 1</MenuItem>
            <MenuItem onClick={()=>handleFilterBatch("2")}>Batch 2</MenuItem>
            <MenuItem onClick={()=>handleFilterBatch("3")}>Batch 3</MenuItem>
            <MenuItem onClick={()=>handleFilterBatch("4")}>Batch 4</MenuItem>
          </Menu>
          <Button color="primary" id="Batches-button" onClick={handleBatches}>
            Batches
          </Button>
        </Stack>
      </Stack>
      <div style={{ marginTop: "20px" }}>
        <TableContainer component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                
                <TableCell sx={{ fontWeight: "bold" }}>Student Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Mobile</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Branch</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}> Course</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Batch</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="centre">
                  Fees
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((e)=>{
                return(
                  <TableRow key={e._id}>
                  
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{e.mobile}</TableCell>
                  <TableCell align="centre">{e.branch}</TableCell>
                  <TableCell>{e.course}</TableCell>
                  <TableCell>{"Batch" +" " +e.batch}</TableCell>
                  <TableCell align="centre" >{ e.Fees } </TableCell>
                </TableRow>
                )
              })}
              
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
