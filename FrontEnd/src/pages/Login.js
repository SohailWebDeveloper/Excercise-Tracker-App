import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { TextField, Stack, Box } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Login = () => {
  const defaultTheme = createTheme();
    const navigate = useNavigate();


    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const postingData =async(e)=>{
        e.preventDefault();
        let result = await fetch("http://localhost:5000/api/v1/loginuser/login",{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        localStorage.setItem('user',JSON.stringify(result))
        console.log(result);
        if(result.success === false){
          toast.error(result.message)
        }
        if(result.success){
          toast.success(result.message);
          setTimeout(() => {
            // Perform navigation after 5 seconds
            navigate("/");
          }, 6000);
        }
      
    }
  return (
    <div> 
      {/* <div className="container h-100">
    <div className="row h-100">
      <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
        <div className="d-table-cell align-middle">
          <div className="text-center mt-4">
            <h1 className="h2">User Registration Form</h1>
            <p className="lead">
              Please provide the necessary information to get register with
              Learning Management System
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="m-sm-4">
                <form> 
                  <div className="form-group">
                    <label>Email</label>
                    <input
                    onChange={(e)=>setEmail(e.target.value)}
                      className="form-control form-control-lg"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                    onChange={(e)=>setPassword(e.target.value)}
                      className="form-control form-control-lg"
                      type="password"
                      name="password"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <button onClick={postingData}
                   className="btn btn-lg btn-primary">
                     Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
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
  <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
           
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
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
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={postingData}
            >
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signup" className='nav-link' variant="body2">
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
      </section>
      <ToastContainer />
  </div>

  )
}

export default Login