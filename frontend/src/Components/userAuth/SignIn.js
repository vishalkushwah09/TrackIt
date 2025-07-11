
// // import React, { useState } from "react";
// // import {
// //   Box,
// //   Paper,
// //   TextField,
// //   Button,
// //   Radio,
// //   RadioGroup,
// //   FormControlLabel,
// //   FormControl,
// //   FormLabel,
// //   Backdrop,
// //   CircularProgress,
// //   Typography,
// // } from "@mui/material";
// // import { GoogleLogin } from "@react-oauth/google";
// // import { jwtDecode } from "jwt-decode";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { useDispatch } from "react-redux";
// // import Apis from "../../Apis";
// // import { setUser } from "../../redux/LoginSlice";

// // const AdminSignin = () => {
// //   const [open, setOpen] = useState(false);
// //   const [email, setEmail] = useState("");
// //   const [institute, setInstitute] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [role, setRole] = useState("admin");

// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     setOpen(true);
// //     try {
// //       if (role === "admin") {
// //         const { data } = await axios.post(Apis.ADMIN_SIGNIN, {
// //           email,
// //           institute,
// //           password,
// //         });
// //         dispatch(setUser(data));
// //         navigate("/admin");
// //       } else {
// //         const { data } = await axios.post(Apis.USER_SIGNIN, {
// //           email,
// //           uniquekey: institute,
// //           password,
// //         });
// //         dispatch(setUser(data));
// //         navigate("/user");
// //       }
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Sign-in failed");
// //     } finally {
// //       setOpen(false);
// //     }
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "100vh",
// //         background: "linear-gradient(to right, #e0f7fa, #b2ebf2)",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         px: 2,
// //         py: 6,
// //       }}
// //     >
// //       <Paper
// //         elevation={10}
// //         sx={{
// //           display: "flex",
// //           flexDirection: { xs: "column", md: "row" },
// //           borderRadius: 4,
// //           maxWidth: "900px",
// //           width: "100%",
// //           overflow: "hidden",
// //         }}
// //       >
// //         {/* Left Image Section */}
// //         <Box
// //           sx={{
// //             width: { xs: "100%", md: "45%" },
// //             background: "#e3f2fd",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             py: 4,
// //           }}
// //         >
// //           <img
// //             src="/images/s.png"
// //             alt="QR Visual"
// //             style={{
// //               width: "85%",
// //               maxHeight: "360px",
// //               objectFit: "contain",
// //             }}
// //           />
// //         </Box>

// //         {/* Right Form Section */}
// //         <Box
// //           sx={{
// //             width: { xs: "100%", md: "55%" },
// //             p: 4,
// //             background: "rgba(255,255,255,0.96)",
// //             backdropFilter: "blur(8px)",
// //           }}
// //         >
// //           <Typography
// //             variant="h4"
// //             fontWeight={700}
// //             textAlign="center"
// //             gutterBottom
// //             sx={{
// //               background: "linear-gradient(to right, #1565c0, #42a5f5)",
// //               WebkitBackgroundClip: "text",
// //               WebkitTextFillColor: "transparent",
// //             }}
// //           >
// //             {role === "admin" ? "Admin Sign In" : "User Sign In"}
// //           </Typography>

// //           <form onSubmit={handleSubmit}>
// //             <TextField
// //               fullWidth
// //               label="Email"
// //               type="email"
// //               variant="outlined"
// //               margin="normal"
// //               required
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />

// //             <TextField
// //               fullWidth
// //               label={role === "admin" ? "Institute" : "Unique Key"}
// //               variant="outlined"
// //               margin="normal"
// //               required
// //               value={institute}
// //               onChange={(e) => setInstitute(e.target.value)}
// //             />

// //             <TextField
// //               fullWidth
// //               label="Password"
// //               type="password"
// //               variant="outlined"
// //               margin="normal"
// //               required
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />

// //             <FormControl component="fieldset" sx={{ my: 2 }}>
// //               <FormLabel component="legend">Role</FormLabel>
// //               <RadioGroup
// //                 row
// //                 value={role}
// //                 onChange={(e) => setRole(e.target.value)}
// //               >
// //                 <FormControlLabel
// //                   value="admin"
// //                   control={<Radio />}
// //                   label="Admin"
// //                 />
// //                 <FormControlLabel
// //                   value="user"
// //                   control={<Radio />}
// //                   label="User"
// //                 />
// //               </RadioGroup>
// //             </FormControl>

// //             <Button
// //               type="submit"
// //               fullWidth
// //               sx={{
// //                 mt: 1,
// //                 py: 1.2,
// //                 fontWeight: 700,
// //                 fontSize: "1rem",
// //                 borderRadius: 3,
// //                 background: "linear-gradient(to right, #0069c0, #00bcd4)",
// //                 color: "#fff",
// //                 "&:hover": {
// //                   background: "linear-gradient(to right, #00bcd4, #0069c0)",
// //                   boxShadow: "0 4px 15px rgba(0,188,212,.4)",
// //                 },
// //               }}
// //             >
// //               Sign In
// //             </Button>
// //           </form>

// //           <Box mt={3} display="flex" justifyContent="center">
// //             <GoogleLogin
// //               onSuccess={(credentialResponse) => {
// //                 const decoded = jwtDecode(credentialResponse.credential);
// //                 alert(`Welcome ${decoded.name}`);
// //               }}
// //               onError={() => {
// //                 console.log("Google sign-in failed");
// //               }}
// //             />
// //           </Box>
// //         </Box>
// //       </Paper>

// //       <Backdrop
// //         sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
// //         open={open}
// //       >
// //         <CircularProgress color="inherit" />
// //       </Backdrop>
// //     </Box>
// //   );
// // };

// // export default AdminSignin;
// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   TextField,
//   Button,
//   ToggleButton,
//   ToggleButtonGroup,
//   InputAdornment,
//   Backdrop,
//   CircularProgress,
//   Typography,
// } from "@mui/material";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import Apis from "../../Apis";
// import { setUser } from "../../redux/LoginSlice";
// import EmailIcon from "@mui/icons-material/Email";
// import LockIcon from "@mui/icons-material/Lock";
// import SchoolIcon from "@mui/icons-material/School";

// const AdminSignin = () => {
//   const [open, setOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [institute, setInstitute] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("admin");

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setOpen(true);
//     try {
//       const api = role === "admin" ? Apis.ADMIN_SIGNIN : Apis.USER_SIGNIN;
//       const body =
//         role === "admin"
//           ? { email, institute, password }
//           : { email, uniquekey: institute, password };
//       const { data } = await axios.post(api, body);
//       dispatch(setUser(data));
//       navigate(role === "admin" ? "/admin" : "/user");
//     } catch (err) {
//       alert(err.response?.data?.message || "Sign‑in failed");
//     } finally {
//       setOpen(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "linear-gradient(to right, #f0f4ff, #e0f7fa)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         px: 2,
//         py: 6,
//       }}
//     >
//       <Paper
//         elevation={12}
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           borderRadius: 5,
//           maxWidth: 800,
//           width: "90%",
//           overflow: "hidden",
//         }}
//       >
//         {/* Left visual panel */}
//         <Box
//           sx={{
//             width: { xs: "100%", md: "45%" },
//             background: "linear-gradient(to bottom right,#fce4ec,#e1f5fe)",
//             color: "#333",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             p: 4,
//           }}
//         >
//           <img
//             src="/images/s.png"
//             alt="QR Visual"
//             style={{ width: "80%", maxHeight: 340, objectFit: "contain", marginBottom: 20 }}
//           />
//           <Typography variant="h5" fontWeight={700} textAlign="center">
//             Smart Attendance Portal
//           </Typography>
//           <Typography textAlign="center" mt={1}>
//             Track • Manage • Simplify
//           </Typography>
//         </Box>

//         {/* Right form panel */}
//         <Box sx={{ width: { xs: "100%", md: "55%" }, p: 4, background: "rgba(255,255,255,.98)" }}>
//           <Typography
//             variant="h4"
//             fontWeight={800}
//             textAlign="center"
//             sx={{
//               mb: 2,
//               background: "linear-gradient(to right,#1565c0,#42a5f5)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             {role === "admin" ? "Admin Sign In" : "User Sign In"}
//           </Typography>

//           {/* Role selector */}
//           <ToggleButtonGroup
//             value={role}
//             exclusive
//             onChange={(e, val) => val && setRole(val)}
//             fullWidth
//             sx={{
//               mb: 3,
//               ".MuiToggleButton-root": {
//                 textTransform: "none",
//                 fontWeight: 600,
//                 border: "1px solid #cfd8dc",
//               },
//               ".Mui-selected": {
//                 color: "#1565c0",
//                 backgroundColor: "#e3f2fd",
//               },
//             }}
//           >
//             <ToggleButton value="admin">Admin</ToggleButton>
//             <ToggleButton value="user">User</ToggleButton>
//           </ToggleButtonGroup>

//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               label="Email"
//               type="email"
//               margin="normal"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start" sx={{ mr: 1.5 }}>
//                     <EmailIcon />
//                   </InputAdornment>
//                 ),
//                 sx: { pl: 1 },            // extra space after icon
//               }}
//             />

//             <TextField
//               fullWidth
//               label={role === "admin" ? "Institute" : "Unique Key"}
//               margin="normal"
//               required
//               value={institute}
//               onChange={(e) => setInstitute(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start" sx={{ mr: 1.5 }}>
//                     <SchoolIcon />
//                   </InputAdornment>
//                 ),
//                 sx: { pl: 1 },
//               }}
//             />

//             <TextField
//               fullWidth
//               label="Password"
//               type="password"
//               margin="normal"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start" sx={{ mr: 1.5 }}>
//                     <LockIcon />
//                   </InputAdornment>
//                 ),
//                 sx: { pl: 1 },
//               }}
//             />

//             <Button
//               type="submit"
//               fullWidth
//               sx={{
//                 mt: 2,
//                 py: 1.3,
//                 fontWeight: 700,
//                 fontSize: "1rem",
//                 borderRadius: 3,
//                 background: "linear-gradient(to right,#0077c2,#00bcd4)",
//                 color: "#fff",
//                 "&:hover": {
//                   background: "linear-gradient(to right,#00bcd4,#0077c2)",
//                   boxShadow: "0 4px 15px rgba(0,188,212,.4)",
//                 },
//               }}
//             >
//               Sign In
//             </Button>
//           </form>

//           <Box mt={3} display="flex" justifyContent="center">
//             <GoogleLogin
//               onSuccess={(cred) => {
//                 const { name } = jwtDecode(cred.credential);
//                 alert(`Welcome ${name}`);
//               }}
//               onError={() => console.log("Google sign‑in failed")}
//             />
//           </Box>
//         </Box>
//       </Paper>

//       {/* loader */}
//       <Backdrop
//         sx={{ color: "#fff", zIndex: (t) => t.zIndex.drawer + 1 }}
//         open={open}
//       >
//         <CircularProgress color="inherit" />
//       </Backdrop>
//     </Box>
//   );
// };

// export default AdminSignin;

import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  InputAdornment,
  Backdrop,
  CircularProgress,
  Typography,
} from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import Apis from "../../Apis";
import { setUser } from "../../redux/LoginSlice";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import SchoolIcon from "@mui/icons-material/School";
 import { ToastContainer, toast } from 'react-toastify';

const AdminSignin = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [institute, setInstitute] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(true);
    try {
      const api = role === "admin" ? Apis.ADMIN_SIGNIN : Apis.USER_SIGNIN;
      const body =
        role === "admin"
          ? { email, institute, password }
          : { email, uniquekey: institute, password };
      const { data } = await axios.post(api, body);
      dispatch(setUser(data));
      
      navigate(role === "admin" ? "/admin" : "/user");
    } catch (err) {
      alert(err.response?.data?.message || "Sign‑in failed");
    } finally {
      setOpen(false);
    }
  };

  return (

    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f0f4ff, #e0f7fa)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 6,
      }}
    >
      
      <Paper
        elevation={12}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: 5,
          maxWidth: 800,
          width: "90%",
          overflow: "hidden",
        }}
      >
        {/* Left Panel */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            background: "linear-gradient(to bottom right,#fce4ec,#e1f5fe)",
            color: "#333",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
          }}
        >
          <img
            src="/images/s.png"
            alt="QR Visual"
            style={{ width: "80%", maxHeight: 340, objectFit: "contain", marginBottom: 20 }}
          />
          <Typography variant="h5" fontWeight={700} textAlign="center">
            Smart Attendance Portal
          </Typography>
          <Typography textAlign="center" mt={1}>
            Track • Manage • Simplify
          </Typography>
        </Box>

        {/* Right Form Panel */}
        <Box sx={{ width: { xs: "100%", md: "55%" }, p: 4, background: "rgba(255,255,255,.98)" }}>
          <Typography
            variant="h4"
            fontWeight={800}
            textAlign="center"
            sx={{
              mb: 2,
              background: "linear-gradient(to right,#1565c0,#42a5f5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {role === "admin" ? "Admin Sign In" : "User Sign In"}
          </Typography>

          {/* Role Toggle */}
          <ToggleButtonGroup
            value={role}
            exclusive
            onChange={(e, val) => val && setRole(val)}
            fullWidth
            sx={{
              mb: 3,
              ".MuiToggleButton-root": {
                textTransform: "none",
                fontWeight: 600,
                border: "1px solid #cfd8dc",
              },
              ".Mui-selected": {
                color: "#1565c0",
                backgroundColor: "#e3f2fd",
              },
            }}
          >
            <ToggleButton value="admin">Admin</ToggleButton>
            <ToggleButton value="user">User</ToggleButton>
          </ToggleButtonGroup>

          {/* Form Start */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ mr: 1.5 }}>
                    <EmailIcon />
                  </InputAdornment>
                ),
                sx: { pl: 1 },
              }}
            />

            <TextField
              fullWidth
              label={role === "admin" ? "Institute" : "Unique Key"}
              margin="normal"
              required
              value={institute}
              onChange={(e) => setInstitute(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ mr: 1.5 }}>
                    <SchoolIcon />
                  </InputAdornment>
                ),
                sx: { pl: 1 },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ mr: 1.5 }}>
                    <LockIcon />
                  </InputAdornment>
                ),
                sx: { pl: 1 },
              }}
            />

        
            

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 1,
                py: 1.3,
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: 3,
                background: "linear-gradient(to right,#0077c2,#00bcd4)",
                color: "#fff",
                "&:hover": {
                  background: "linear-gradient(to right,#00bcd4,#0077c2)",
                  boxShadow: "0 4px 15px rgba(0,188,212,.4)",
                },
              }}
            >
              Sign In
            </Button>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 0.5,
                mb: 1.5,
              }}
            >
              <Button
                variant="text"
                size="small"
                sx={{ textTransform: "none", fontSize: "13px", p: 0, minWidth: 0 }}
                onClick={() => navigate("/forgot")}
              >
                Forgot password?
              </Button>
            </Box>
          </form>

          <Box mt={3} display="flex" justifyContent="center">
            <GoogleLogin
              onSuccess={(cred) => {
                const { name } = jwtDecode(cred.credential);
                alert(`Welcome ${name}`);
              }}
              onError={() => console.log("Google sign‑in failed")}
            />
          </Box>
        </Box>
      </Paper>

      <Backdrop sx={{ color: "#fff", zIndex: (t) => t.zIndex.drawer + 1 }} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default AdminSignin;
