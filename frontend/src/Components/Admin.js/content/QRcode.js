// import { QRCodeSVG } from "qrcode.react";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import Apis from "../../../Apis";
// import Header from "../Header";
// import AddIcon from '@mui/icons-material/Add';
// import QrCode2Icon from '@mui/icons-material/QrCode2';

// const QRcode = () => {
//     const [name, setName] = useState('');
//     const [status, setStatus] = useState(false);
//     const [location, setLocation] = useState({ lon: '', lat: '' });
//     const [time, setTime] = useState("");
//     const { batchList } = useSelector((strore) => strore.Batch);
//     const { token } = useSelector((store) => store.LoginToken);
//     const [form, setForm] = useState(false)

//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition((position) => {
//             setLocation({
//                 lon: position.coords.longitude,
//                 lat: position.coords.latitude
//             })
//         },
//             (err) => {
//                 console.log(err)
//             });

//     }, [])
//     const date = new Date().toLocaleDateString();
//     const genrate = async (e) => {
//         e.preventDefault();
//         setStatus(true);
//         try {
//             let response = await axios.post(Apis.ADMIN_QR, { name }, { headers: { Authorization: `Bearer ${token}` } })
//             if (response.status === 200) {
//                 alert(response.data)
//             }
//         }
//         catch (err) {

//         }
//     }

//     const handelgen = (e) => {
//         console.log("hello")
//         if (form) {
//             setForm(false);
//             setStatus(false);
//         }
//         if (!form) {
//             setForm(true)
//         }
//     }
//     const qrcode = {
//         Name: name,
//         date: date,
//         locationLat: location.lat,
//         locationLon: location.lon,
//         time: time
//     }
//     return <>

//         <div className="mainContent">
//             <Header heading={"QR Maker  "} />
//             <div className="row " style={{ display: form ? "flex" : 'none' }}>
//                 <div className="col-md-6">
//                     <div className="card px-4 pb-5 pt-3 round bg-light shadow text-dark">
//                         <form onSubmit={genrate}>
//                             <label htmlFor="batchSelect" className=" fs-5">Select Batch:</label>
//                             <select
//                                 id="batchSelect"
//                                 className="form-select mb-3"
//                                 value={name}
//                                 onChange={(event) => setName(event.target.value)}
//                                 required
//                             >
//                                 <option value="">-- Choose Batch --</option>
//                                 {batchList.map((batch, index) => (
//                                     <option key={index} value={batch.name}>
//                                         {batch.name}
//                                     </option>
//                                 ))}
//                             </select>

//                             <label htmlFor="timeInput" className=" m-2 fs-5">Select Time:</label>
//                             <input
//                                 type="time"
//                                 id="timeInput"
//                                 className="form-control mb-3"
//                                 value={time}
//                                 onChange={(event) => setTime(event.target.value)}
//                                 required
//                             />

//                             <button type="submit" className="btn btn-success">Generate</button>
//                         </form>
//                     </div>
//                 </div>

//                 <div className="col-md-6 mt-4 d-flex align-items-center justify-content-center">
//                   {status && <QRCodeSVG className="shadow rounded bg-white p-3" value={JSON.stringify(qrcode)} size={200}> </QRCodeSVG>}  
//                 </div>

//             </div>

//             <div class="col-md-6 card round m-4 text-dark" onClick={handelgen} style={{ border: '2px dotted #3144de', color: '#3144de ', maxWidth: '350px', cursor: 'pointer' }} >
//                 <div className="card-block">
//                     <h6 className="m-b-20"></h6>
//                     <h4 className="text-center f-14" >
//                         <AddIcon fontSize='large' />
//                         <br />
//                         <span>Generate QR  <QrCode2Icon fontSize='large' /></span>
//                     </h4>
//                     <p className="m-b-20"></p>
//                 </div>
//             </div>
//         </div>

//     </>
// }

// export default QRcode;

import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Apis from "../../../Apis";
import Header from "../Header";
import AddIcon from '@mui/icons-material/Add';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { Box, Paper, Typography, Button, TextField, MenuItem } from "@mui/material";

const QRcode = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState(false);
  const [location, setLocation] = useState({ lon: '', lat: '' });
  const [time, setTime] = useState("");
  const { batchList } = useSelector((store) => store.Batch);
  const { token } = useSelector((store) => store.LoginToken);
  const [form, setForm] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      });
      console.log(location.lat+" "+location.lon);
    }, (err) => console.log(err));
  }, []);

  const date = new Date().toLocaleDateString();

  const genrate = async (e) => {
    e.preventDefault();
    setStatus(true);
  
  if (!location.lat || !location.lon) {
      alert("location not found");
    return;
  }

    try {
      const res = await axios.post(
        Apis.ADMIN_QR,
        { name },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (res.status === 200) alert(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleForm = () => {
    setForm(!form);
    setStatus(false);
  };

  const qrcode = {
    Name: name,
    date,
    locationLat: location.lat,
    locationLon: location.lon,
    time,
  };

  return (
    <Box className="mainContent" sx={{ minHeight: '100vh', background: 'linear-gradient(to right, #e0f7fa, #b2ebf2)', p: 4 }}>
      <Header heading="QR Maker" />

      {form && (
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4} mt={2}>
          {/* Form card */}
          <Paper elevation={8} sx={{ p: 4, width: 400, background: 'linear-gradient(to right, #ffffff, #e0f2f1)', borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={700} color="#00695c" gutterBottom>
              Create QR Code
            </Typography>
            <form onSubmit={genrate}>
              <TextField
                select
                fullWidth
                label="Batch"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                sx={{ mb: 3, backgroundColor: '#fafafa' }}
                required
              >
                <MenuItem value="">-- Choose Batch --</MenuItem>
                {batchList.map((batch) => (
                  <MenuItem key={batch.name} value={batch.name}>{batch.name}</MenuItem>
                ))}
              </TextField>

              <TextField
                type="time"
                fullWidth
                label="Time"
                InputLabelProps={{ shrink: true }}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                variant="outlined"
                sx={{ mb: 4, backgroundColor: '#fafafa' }}
                required
              />

              <Button
                type="submit"
                fullWidth
                 disabled={!location.lat || !location.lon}
                sx={{
                  background: 'linear-gradient(to right, #00bfa5, #1de9b6)',
                  color: '#fff',
                  fontWeight: 600,
                  py: 1.2,
                  '&:hover': { background: 'linear-gradient(to right, #1de9b6, #00bfa5)' },
                }}
              >
                Generate
              </Button>
            </form>
          </Paper>

          {/* QR Preview */}
          {status && (
            <Paper elevation={8} sx={{ p: 3, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
              <QRCodeSVG value={JSON.stringify(qrcode)} size={220} />
            </Paper>
          )}
        </Box>
      )}

      {/* Toggle Button */}
      <Box mt={5} textAlign="center">
        <Paper
          elevation={6}
          onClick={toggleForm}
          sx={{
            cursor: 'pointer',
            display: 'inline-block',
            px: 4,
            py: 3,
            background: 'linear-gradient(to right, #b3e5fc, #81d4fa)',
            border: '2px dashed #0288d1',
            color: '#01579b',
            borderRadius: 3,
            transition: '0.3s',
            '&:hover': { background: 'linear-gradient(to right, #81d4fa, #4fc3f7)' },
          }}
        >
          <Typography variant="h6" fontWeight={600} display="flex" alignItems="center" gap={1}>
            <AddIcon /> Generate QR <QrCode2Icon />
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default QRcode;

