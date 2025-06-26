// import axios from "axios";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import Apis from "../../../Apis";
// import Header from "../Header";


// const ManageUser = () => {
//     const [name, setName] = useState("");
//     const [file, setFile] = useState("");
//     const { token } = useSelector((store) => store.LoginToken);
//     const [email,setEmail] = useState('');
//     const [password,setPassword] = useState('')
//     const [batchName,setBatchName] = useState('')

//     const exelUpload = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('name', name);
//         console.log(file);
//         try {
//             let response = await axios.post(Apis.ADMIN_USER_BULK, formData, { headers: { Authorization: `Bearer ${token}` } });
//             if (response.status === 200)
//                 console.log(response.data);
//             console.log(response.data);
//         }
//         catch (err) {
//             console.log(err);
//         }
//     }

//     const CreateOne =async (event) => {
//         event.preventDefault();
//         try{
//             let response =await axios.post(Apis.ADMIN_ADDONE,{name,email,password,batchName},{headers:{Authorization:`Bearer ${token}`}});
//             if(response.status===200){
//                 console.log(response.data);
//             }
//         }
//         catch(err){
//             console.log(err);
//         }
//     }

//     const deleteOne = async (event)=>{
//         event.preventDefault();
//         console.log("hello")
//         try{
//            let response = await axios.delete(`${Apis.ADMIN_USER_DELETE}/${batchName}/${email}`,{headers:{Authorization:`Bearer ${token}`}});
//            if(response.status===200){
//             console.log(response.data);
//             alert("delete success");
//            }
//         }
//         catch(err){

//         }
//     }

//     return <div className="mainContent overflow-auto" style={{maxHeight:"100vh"}}>
//         <Header heading={'Manage users'} />
//         <div className="container  bg-success-subtle">
//              <h2>Add user </h2>
//           <form>
//             <div>
//                 <label htmlFor="name" >Name Batch</label>
//                 <input onChange={(event) => setName(event.target.value)} className="mt-3" type="text" style={{ width: "auto" }} />   
//             </div>
//             <div>
//                 <label htmlFor="exel" className="btn btn-outline-success mb-3" >file upload</label>
//                 <input onChange={((event) => { setFile(event.target.files[0]) })} id="exel" type="file" accept=".xlsx" style={{ display: "none" }} />            </div>
//            <div>
//              <button onClick={exelUpload}>select</button>
//            </div>
//            </form>
//         </div>
       
//         <div className="container mt-4 bg-primary-subtle rounded-4 ">
//              <h2 className="pt-2 ">Create One User</h2>
//             <form onSubmit={CreateOne}>
//                 <div className="form-item m-3">
//                     <label htmlFor="name" >Name</label>
//                     <input  onChange={(event) => setName(event.target.value)} type="text" id="name" placeholder="enter the name" required></input>
//                 </div>
//                 <div className="form-item m-3">
//                     <label htmlFor="email" >email</label>
//                     <input onChange = {(event)=>setEmail(event.target.value)} className="form-control" type="email" placeholder="enter the email" required />
//                 </div>
//                 <div className="form-item m-3">
//                     <label htmlFor="password" >password</label>
//                     <input onChange={(event)=>setPassword(event.target.value)} className="form-control" type="password" placeholder="enter the default password" required />
//                 </div>
//                 <div className="form-item m-3">
//                     <label htmlFor="batch" />
//                     <input onChange={(event)=>{setBatchName(event.target.value)}} type="text" placeholder="batch name" className="form-control" required></input>
//                 </div>
//                 <div className="form-item">
//                     <button className="mb-3" type="submit" >Create</button>
//                 </div>
//             </form>
//         </div>

//         <div className="container bg-danger-subtle">
//               <h2 className="pt-2 ">Delete One User</h2>
//            <form onSubmit={deleteOne}>
//              <div>
//                 <label>Batch name</label>
//                 <input onChange={(event)=>{setBatchName(event.target.value)}} className="form-control" type="text" placeholder="Enter the batch name" required />
//             </div>
//             <div>
//                 <label>email</label>
//                 <input onChange={(event)=>{setEmail(event.target.value)}} className="form-control" type="email" placeholder="Enter user email" required autoComplete="false"/>
//             </div>
//             <div className="mt-3">
//                 <button type="submit" className="btn btn-outline-danger"> Delete user</button>
//             </div>
//            </form>
//         </div>



//     </div>
// }

// export default ManageUser;  

import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import Apis from "../../../Apis";
import Header from "../Header";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  InputLabel,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

const ManageUser = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [batchName, setBatchName] = useState("");

  const { token } = useSelector((store) => store.LoginToken);

  /* ---------- Handlers ---------- */
  const exelUpload = async (e) => {
    e.preventDefault();
    if (!file || !name) return alert("Please choose a file and batch name");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);

    try {
      const res = await axios.post(Apis.ADMIN_USER_BULK, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 200) alert("Bulk upload successful");
    } catch (err) {
      console.error(err);
    }
  };

  const createOne = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        Apis.ADMIN_ADDONE,
        { name, email, password, batchName },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (res.status === 200) alert("User created");
    } catch (err) {
      console.error(err);
    }
  };

  const deleteOne = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`${Apis.ADMIN_USER_DELETE}/${batchName}/${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 200) alert("User deleted");
    } catch (err) {
      console.error(err);
    }
  };

  /* ---------- UI ---------- */
  return (
    <Box className="mainContent" sx={{ minHeight: "100vh" ,marginLeft:"225px", background: "linear-gradient(to right, #e0f7fa, #b2ebf2)", p: 4 }}>
      <Header heading="Manage Users" />

      {/* Bulk Upload */}
      <Paper elevation={6} sx={{ p: 4, mb: 5, borderRadius: 4, background: "#ffffffcc" }}>
        <Typography variant="h5" fontWeight={700} mb={3} color="#006064">
          Bulk Upload
        </Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <TextField
              label="Batch Name"
              fullWidth
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              startIcon={<CloudUploadIcon />}
            >
              Choose Excel (.xlsx)
              <input
                hidden
                accept=".xlsx"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Button>
            {file && (
              <Typography variant="body2" mt={1} color="text.secondary">
                Selected: {file.name}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={exelUpload}
              sx={{ py: 1.2, fontWeight: 600 }}
            >
              Upload
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Create User */}
      <Paper elevation={6} sx={{ p: 4, mb: 5, borderRadius: 4, background: "#ffffffcc" }}>
        <Typography variant="h5" fontWeight={700} mb={3} color="#006064">
          Create Single User
        </Typography>
        <form onSubmit={createOne}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Batch Name"
                fullWidth
                value={batchName}
                onChange={(e) => setBatchName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" startIcon={<PersonAddAltIcon />} sx={{ fontWeight: 600 }}>
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Delete User */}
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4, background: "#ffffffcc" }}>
        <Typography variant="h5" fontWeight={700} mb={3} color="#bf360c">
          Delete User
        </Typography>
        <form onSubmit={deleteOne}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Batch Name"
                fullWidth
                value={batchName}
                onChange={(e) => setBatchName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="error" startIcon={<PersonRemoveIcon />} sx={{ fontWeight: 600 }}>
                Delete
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ManageUser;
