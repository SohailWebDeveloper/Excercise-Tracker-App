import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Stack, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUpSchema } from "../schema/index";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
const initialValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
};
const Signup = () => {
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");
  const defaultTheme = createTheme();
  // const postingData = async (e) => {
  //   e.preventDefault();
  //   let result = await fetch(
  //     "http://localhost:5000/api/v1/registeruser/register",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({ name, email, password, phone }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   result = await result.json();
  //   localStorage.setItem("user", JSON.stringify(result));
  //   console.log(result);
  //   if(result.userAvailable === true){
  //     toast.error(result.message)
  //   }
  //   if(result.userAvailable==false){
  //     toast.success(result.message);
  //     setTimeout(() => {
  //       // Perform navigation after 5 seconds
  //       navigate("/login");
  //     }, 6000);
  //   }
  //   // navigate("/");
  // };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      action.resetForm();
      let result = await fetch(
        "http://localhost:5000/api/v1/registeruser/register",
        {
          method: "POST",
          body: JSON.stringify({
            name: values.name,
            lName: values.lName,
            email: values.email,
            password: values.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      result = await result.json();
      localStorage.setItem("user", JSON.stringify(result));
      console.log(result);
      if (result.userAvailable === true) {
        toast.error(result.message);
      }
      if (result.userAvailable == false) {
        toast.success(result.message);
        setTimeout(() => {
          // Perform navigation after 5 seconds
          navigate("/login");
        }, 6000);
      }
      //           localStorage.setItem("name",values.name)
      //           localStorage.setItem("lName",values.lName)
      // localStorage.setItem("email",values.email)
      // localStorage.setItem("password",values.password)
      // localStorage.setItem("confirm_password",values.confirm_password)
      // {values,errors,touched,handleBlur,handleChange,handleSubmit}
    },
  });
  return (
    //   <div> <div className="container h-100">
    //   <div className="row h-100">
    //     <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
    //       <div className="d-table-cell align-right">
    //         {/* <div className="text-center mt-4">
    //           <h1 className="h2">User Registration Form</h1>
    //           <p className="lead">
    //             Please provide the necessary information to get register with
    //             Learning Management System
    //           </p>
    //         </div> */}
    //         <div className="card">
    //         <h5 class="card-title mx-auto">SignUp</h5>
    //           <div className="card-body">
    //             <div className="m-sm-4">
    //               <form>
    //                 <div className="form-group">

    //                   <input
    //                   onChange={(e)=>setName(e.target.value)}
    //                     className="form-control form-control-lg"
    //                     type="text"
    //                     name="name"
    //                     placeholder="Enter your name"
    //                   />
    //                 </div>
    //                 <div className="form-group">
    //                   <label>Phone</label>
    //                   <input
    //                   onChange={(e)=>setPhone(e.target.value)}
    //                     className="form-control form-control-lg"
    //                     type="text"
    //                     name="address"
    //                     placeholder="Enter your address"
    //                   />
    //                 </div>
    //                 <div className="form-group">
    //                   <label>Email</label>
    //                   <input
    //                   onChange={(e)=>setEmail(e.target.value)}
    //                     className="form-control form-control-lg"
    //                     type="email"
    //                     name="email"
    //                     placeholder="Enter your email"
    //                   />
    //                 </div>
    //                 <div className="form-group">
    //                   <label>Password</label>
    //                   <input
    //                   onChange={(e)=>setPassword(e.target.value)}
    //                     className="form-control form-control-lg"
    //                     type="password"
    //                     name="password"
    //                     placeholder="Enter password"
    //                   />
    //                 </div>
    //                 <div className="text-center mt-3">
    //                   <button onClick={postingData}
    //                  className="btn btn-lg btn-primary">
    //                     Sign up
    //                   </button>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div></div>
    <>
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "lightGray" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img
                  src="./Images/Cover-23.jpg"
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
                        <Avatar
                          sx={{ m: 1, bgcolor: "secondary.main" }}
                        ></Avatar>
                        <Typography component="h1" variant="h5">
                          Sign up
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={formik.handleSubmit}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                // onChange={(e)=>setName(e.target.value)}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.errors.name && formik.touched.name ? (
                                <span className="form-error"style={{color:"red",paddingTop:"10px",fontSize:"11px"}}>
                                  {formik.errors.name}
                                </span>
                              ) : null}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                autoComplete="family-name"
                                name="lName"
                                // onChange={(e)=>setPhone(e.target.value)}
                                value={formik.values.lName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.errors.lName && formik.touched.lName ? (
                                <span className="form-error"style={{color:"red",paddingTop:"10px",fontSize:"11px"}}>
                                  {formik.errors.lName}
                                </span>
                              ) : null}
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoComplete="email"
                                name="email"
                                // onChange={(e)=>setEmail(e.target.value)}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.errors.email && formik.touched.email ? (
                                <span className="form-error"style={{color:"red",paddingTop:"10px",fontSize:"11px"}}>
                                  {formik.errors.email}
                                </span>
                              ) : null}
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                // onChange={(e)=>setPassword(e.target.value)}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.errors.password &&
                              formik.touched.password ? (
                                <span className="form-error"style={{color:"red",paddingTop:"10px",fontSize:"11px"}}>
                                  {formik.errors.password}
                                </span>
                              ) : null}
                            </Grid>
                            <Grid item xs={12}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    value="allowExtraEmails"
                                    color="primary"
                                  />
                                }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                              />
                            </Grid>
                          </Grid>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            // onClick={postingData}
                          >
                            Sign Up
                          </Button>
                          <Grid container justifyContent="flex-end">
                            <Grid item>
                              <Link to="/login" >
                                Already have an account? Sign in
                              </Link>
                            </Grid>
                          </Grid>
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
    </>
  );
};

export default Signup;
