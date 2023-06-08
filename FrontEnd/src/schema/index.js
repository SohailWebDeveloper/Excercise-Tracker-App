import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your First name"),
  lName: Yup.string().min(2).max(25).required("Please enter your Last Name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
 
});



export const activitySchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your First name"),
  description: Yup.string().min(2).max(25).required("Please enter your Description"),
  activity: Yup.string().min(2).max(25).required("Please enter your Activity"),
  duration: Yup.string().min(2).max(25).required("Please enter your  Duration"),
  date:Yup.string().min(2).max(25).required("Please enter your  Date")
});

