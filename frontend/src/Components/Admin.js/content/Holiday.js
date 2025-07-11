// import axios from "axios";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import Apis from "../../../Apis";

// const Holiday = ()=>{
//     const [date,setDate] = useState('');
//     const [title,setTitle] = useState('');
//     const [batchName, setName] = useState('');
//     const [discription,setDescription] = useState('');
//     const {batchList} = useSelector((store)=>store.Batch);
//     const {token} = useSelector((store)=>store.LoginToken);

//     const submit =async (e)=>{
//         e.preventDefault();
//        try{
//           let response = await axios.post(Apis.ADMIN_HOLIDAY ,{title,date,description:discription,batchName}, {headers:{Authorization:`Bearer ${token}`}});
//           if(response.status === 200){
//             console.log(response.data);
//           }
//        }
//        catch(err){
//         console.log(err)
//        }
//     }
//     return <>
//        <div className="mainContent">
//           <div className="container mt-4 bg-primary-subtle rounded-4 ">
//              <h2 className="pt-4 ">Declare Holiday</h2>
//             <form onSubmit={submit}>
//                 <div className="form-item m-3">
//                     <select
//             id="batchSelect"
//             className="form-select mb-3 p-2"
//             value={batchName}
//             onChange={(event) => setName(event.target.value)}
//             required
//           >
//             <option  value="">-- Choose Batch --</option>
//             {batchList.map((batch, index) => (
//               <option key={index} value={batch.name}>
//                 {batch.name}
//               </option>
//             ))}
//           </select>
//                 </div>
//                 <div className="form-item m-3">
//                     <label htmlFor="Title" >Title</label>
//                     <input onChange={(event)=>setTitle(event.target.value)} type="text" id="Title" placeholder="Enter the Title of Holiday" required></input>
//                 </div>
//                 <div className="form-item m-3">
//                     <label htmlFor="description" >Description</label>
//                     <textarea onChange={(event)=>setDescription(event.target.value)} className="form-control mt-2" type="" placeholder="Description of Holiday" required />
//                 </div>
                
//                 <div className="form-item m-3">
//                     <label htmlFor="date" />
//                     <input onChange={(event)=>setDate(event.target.value)} type="date" style={{width:"150px",borderRadius : "5px" }} required></input>
//                 </div>

//                 <div className="form-item ">
//                     <button className="mb-3" type="submit" >Create</button>
//                 </div>
//             </form>
//         </div>
//        </div>  
//     </>
// }

// export default Holiday;

import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import Apis from "../../../Apis";
import {
  Box,
  Typography,
  Paper,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";

const Holiday = () => {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [batchName, setName] = useState('');
  const [discription, setDescription] = useState('');
  const { batchList } = useSelector((store) => store.Batch);
  const { token } = useSelector((store) => store.LoginToken);

  const submit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        Apis.ADMIN_HOLIDAY,
        { title, date, description: discription, batchName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        console.log(response.data);
        alert("Holiday declared successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box className="mainContent" sx={{ minHeight: "100vh", background: "linear-gradient(to right, #e0f7fa, #b2ebf2)", py: 4 }}>
      <Box maxWidth="600px" mx="auto">
        <Paper elevation={8} sx={{ p: 4, borderRadius: 5, background: "linear-gradient(to right, #ffffff, #e3f2fd)" }}>
          <Typography variant="h4" fontWeight={700} color="primary" gutterBottom textAlign="center">
            📅 Declare Holiday
          </Typography>
          <form onSubmit={submit}>
            <TextField
              select
              fullWidth
              label="Select Batch"
              value={batchName}
              onChange={(event) => setName(event.target.value)}
              sx={{ mb: 3 }}
              required
            >
              <MenuItem value="">-- Choose Batch --</MenuItem>
              {batchList.map((batch, index) => (
                <MenuItem key={index} value={batch.name}>
                  {batch.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              sx={{ mb: 3 }}
              required
            />

            <TextField
              fullWidth
              multiline
              minRows={4}
              label="Description"
              value={discription}
              onChange={(event) => setDescription(event.target.value)}
              sx={{ mb: 3 }}
              required
            />

            <TextField
              fullWidth
              type="date"
              label="Date"
              InputLabelProps={{ shrink: true }}
              value={date}
              onChange={(event) => setDate(event.target.value)}
              sx={{ mb: 3 }}
              required
            />

            <Button
  type="submit"
  fullWidth
  sx={{
    py: 1.3,
    fontWeight: 700,
    fontSize: '1rem',
    background: 'linear-gradient(to right,rgb(46, 62, 209), #4a00e0)', // purple-blue gradient
    color: 'white',
    borderRadius: '8px',
    transition: '0.3s ease',
    '&:hover': {
      background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
      boxShadow: '0 4px 20px rgba(138, 43, 226, 0.4)',
    },
  }}
>
  Declare Holiday
</Button>

          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default Holiday;
