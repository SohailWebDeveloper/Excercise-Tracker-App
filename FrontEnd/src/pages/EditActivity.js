import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Stack, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditActivity = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [personName, setPersonName] = useState([]);
  const[errors,setErrors]=useState("")
  const[nameErrors,setNameErrors]=useState("")
  const[descriptionErrors,setDescriptionErrors]=useState("")
  const[activityErrors,setActivityErrors]=useState("")
  const[durationErrors,setDurationErrors]=useState("")
    const params= useParams();
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [activity, setActivity] = useState("");
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");
    const names = ["Bicycle Ride", "Run", "Swim", "Walk", "Hike"];
    const defaultTheme = createTheme();
    useEffect(()=>{
        getActivity()
    },[])
    const getActivity = async()=>{
        let result = await fetch(`http://localhost:5000/api/v1/singleworkout/singleactivity/${params.id}`);
        result= await result.json();
        setName(result.name)
        setDescription(result.description)
        setActivity(result.activity)
        setDuration(result.duration)
        setDate(result.date)
    }
    const updatingActivity = async(e) =>{    
        e.preventDefault();
        if(name===""){
         return setNameErrors("name is required")
        }
        if(description===""){
          return setDescriptionErrors("description is required")
        }
        if(activity===""){
          return setActivityErrors("activity is required")
        }
        if(duration===""){
          return setDurationErrors("duration is required")
        }
        if(date===""){
          return setErrors("date is required")
        }
        else{
          try {
            let result = await fetch(`http://localhost:5000/api/v1/updateworkout/updateactivity/${params.id}`,{
              method: 'PUT',
              body: JSON.stringify({name, description, activity, duration,date}),
              headers:{
                'Content-Type': "Application/json"
              }
            })
            result = await result.json()
            console.log(result)
            toast.success(result.message);
            setTimeout(() => {
              // Perform navigation after 5 seconds
              navigate("/showactivity");
            }, 6000);
          } catch (error) {
            console.log(error)
          }
       
      }
    }
      const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === "string" ? value.split(",") : value
        );
        setActivity(event.target.value);
      };
    
  return (
  //   <div className="container h-100">
  //   <div className="row h-100">
  //     <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
  //       <div className="d-table-cell align-middle">
  //         <div className="text-center mt-4">
  //           <h1 className="h2">User Registration Form</h1>

  //         </div>
  //         <div className="card">
  //           <div className="card-body">
  //             <div className="m-sm-4">
  //               <form>
  //                 <div className="form-group">
  //                   <label>Name</label>
  //                   <input
  //                   onChange={(e)=>setName(e.target.value)}
  //                     className="form-control form-control-lg"
  //                     type="text"
  //                     name="name"
  //                     value={name}
  //                     placeholder="Enter your name"
  //                   />
  //                 </div>
  //                 <div className="form-group">
  //                   <label>Description</label>
  //                   <input
  //                   onChange={(e)=>setDescription(e.target.value)}
  //                     className="form-control form-control-lg"
  //                     type="text"
  //                     name="address"
  //                     value={description}
  //                     placeholder="Enter your Description"
  //                   />
  //                 </div>
  //                 <div className="form-group">
  //                   <label>activity</label>
  //                   <input
  //                   onChange={(e)=>setActivity(e.target.value)}
  //                     className="form-control form-control-lg"
  //                     type="text"
  //                     name="activity"
  //                     placeholder="Enter your activity"
  //                     value={activity}
  //                   />
  //                 </div>
  //                 <div className="form-group">
  //                   <label>Duration</label>
  //                   <input
  //                   onChange={(e)=>setDuration(e.target.value)}
  //                     className="form-control form-control-lg"
  //                     type="text"
  //                     name="Duration"
  //                     placeholder="Enter duration"
  //                     value={duration}
  //                   />
  //                 </div>
  //                 <div className="form-group">
  //                   <label>Date</label>
  //                   <input
  //                   onChange={(e)=>setDate(e.target.value)}
  //                     className="form-control form-control-lg"
  //                     type="text"
  //                     name="Date"
  //                     placeholder="Enter date"
  //                     value={date}
  //                   />
  //                 </div>
  //                 <div className="text-center mt-3">
  //                   <button  onClick={updatingActivity}className="btn btn-lg btn-primary">
  //                     Edit Activity
  //                   </button>
  //                 </div>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <section
  className="h-100 h-custom"
  style={{ backgroundColor: "lightGray" }}
>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <img
            src="../Images/das.jpg"
            className="w-100"
            style={{
              borderTopLeftRadius: ".3rem",
              borderTopRightRadius: ".3rem",
            }}
            alt="Sample photo"
          />
          <div className="card-body p-4 p-md-5">
            {/* <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
      <form className="px-md-2">
        <div className="form-outline mb-4">
          <input type="text" id="form3Example1q" className="form-control" />
          <label className="form-label" htmlFor="form3Example1q">Name</label>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="form-outline datepicker">
              <input type="text" className="form-control" id="exampleDatepicker1" />
              <label htmlFor="exampleDatepicker1" className="form-label">Select a date</label>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            {/* <Stack spacing={4}> */}
            {/* <Stack direction='row' spacing={2}> */}
            {/* <Box
component="form"
sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
}}
noValidate
autoComplete="off"
>
<TextField id="filled-basic" label="Filled" variant="filled"/>
<TextField id="standard-basic" label="Standard" variant="standard" />
</Box> */}
            {/* </Stack>
          </Stack> */}
            {/* </div>
        </div>
        <div className="mb-4">
          <select className="select">
            <option value={1} disabled>Class</option>
            <option value={2}>Class 1</option>
            <option value={3}>Class 2</option>
            <option value={4}>Class 3</option>
          </select>
        </div>
        <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
          <div className="col-md-6">
            <div className="form-outline">
              <input type="text" id="form3Example1w" className="form-control" />
              <label className="form-label" htmlFor="form3Example1w">Registration code</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>
      </form> */}{" "}
            <ThemeProvider theme={defaultTheme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          // helperText={!name?"Please Enter a Name":""}
                          // error={!name}
                        />
                       {nameErrors ? (
                          <span className="form-error"style={{color:"red",paddingTop:"10px",fontSize:"11px"}}>
                            {nameErrors}
                          </span>
                        ) : null}
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          required
                          fullWidth
                          id="description"
                          label="description"
                          name="description"
                          autoComplete="family-name"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </Grid>
                      {descriptionErrors ? (
                          <span className="form-error"style={{color:"red",paddingTop:"10px",fontSize:"11px"}}>
                            {descriptionErrors}
                          </span>
                        ) : null}
                      <Grid item xs={12}>
                        <FormControl sx={{ width: 420 }}>
                          <InputLabel id="demo-multiple-checkbox-label">
                            Tag
                          </InputLabel>
                          <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) =>
                              selected.join(", ")
                            }
                            MenuProps={MenuProps}
                          >
                            {names.map((name) => (
                              <MenuItem key={name} value={name}>
                                <Checkbox
                                  checked={personName.indexOf(name) > -1}
                                />
                                <ListItemText primary={name} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        {activityErrors? (
                          <span className="form-error"style={{color:"red",paddingTop:"10px",fontSize:"11px"}}>
                            {activityErrors}
                          </span>
                        ) : null}
                      </Grid>
                      <Grid item xs={12}>
                      <TextField
                          autoComplete="given-name"
                          name="duration"
                          required
                          type="number"
                          fullWidth
                          id="firstName"
                          label="Duration in Min"
                          autoFocus
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          // helperText={!name?"Please Enter a Name":""}
                          // error={!name}
                        />
                         {durationErrors? (
                          <span className="form-error"style={{color:"red",paddingTop:"10px",fontSize:"11px"}}>
                            {durationErrors}
                          </span>
                        ) : null}
                      </Grid>
                      <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DateTimePicker"]}>
                            <DateTimePicker
                              label="Date"
                              selected={date}
                              onChange={(date) => setDate(date)}
                              sx={{ width: 420 }}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Grid>
                      {errors ? (
                          <span className="form-error"style={{color:"red",paddingTop:"10px",fontSize:"11px"}}>
                            {errors}
                          </span>
                        ) : null}
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={updatingActivity}
                    >
                      Edit Activity
                    </Button>
                  </Box>
                </Box>
                {/* <Copyright sx={{ mt: 5 }} /> */}
              </Container>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ToastContainer />
</section>
  )
}

export default EditActivity