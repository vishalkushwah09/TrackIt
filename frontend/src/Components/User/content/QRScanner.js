// import axios from 'axios';
// import { Html5QrcodeScanner } from 'html5-qrcode';
// import { useState, useEffect } from "react";
// import Apis from '../../../Apis';
// import { useSelector } from 'react-redux';

// // const QRScanner = () => {
// //     const [data,setData] = useState(" "); 
// //     const [m ,setM] = useState(false);
// //     const [location, setLocation] = useState({ lon: '', lat: '' });



// //   const validate = () =>{ 
// //     navigator.geolocation.getCurrentPosition((position) => {
// //             setLocation({
// //                 lon: position.coords.longitude,
// //                 lat: position.coords.latitude
// //             })
// //         },
// //             (err) => {
// //                 console.log(err)
// //             });
// //     console.log("validate me agaya");
// //   const R = 6371000; // 🌍 Earth radius in meters
// //   const toRad = (value) => (value * Math.PI) / 180;

// //   const dLat = toRad(location.lat - data.locationLat);
// //   const dLon = toRad(location.lon - data.locationLon);

// //   const a =
// //     Math.sin(dLat / 2) ** 2 +
// //     Math.cos(toRad(data.location.lat)) *
// //       Math.cos(toRad(location.lat)) *
// //       Math.sin(dLon / 2) ** 2;

// //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// // console.log("validate me agaya")
// //   const distance = R * c;  
// //   console.log("helo");
// //   return distance;
// // }



// //   const mark = ()=>{

// //   } 

// //   useEffect(() => {


// //     const scanner = new Html5QrcodeScanner(
// //       'reader',
// //       { fps: 40, qrbox: 250 },
// //       false
// //     );

// //     const success = (decodedText, decodedResult) => {
// //       alert(`Scanned QR Code: ${decodedText}`);
// //       setData(decodedText);

// //         setM(true);
// //      scanner.clear(); // Stop scanning after success
// //     };

// //     const error = (errorMessage) => {
// //       console.log(errorMessage);
// //     };

// //     scanner.render(success, error);

// //   },[]);



// //   return (
// //     <div className='mainContent'>
// //     <div style={{ textAlign: 'center' }}>
// //       <h2>QR Code Scanner</h2>
// //       <div id="reader" style={{ width: '300px', margin: 'auto' ,backgroundColor:"whitesmoke"}}></div>
// //       <p>{data}</p>
// //     </div>
// //     <button  id="mark" disabled={!m} onClick={mark} style={{width:"300px"}} > MARK ATTENDENCE</button>
// //     </div>
// //   );
// // };

// // export default QRScanner;
// const QRScanner = () => {
//   const [data, setData] = useState("");
//   const [status , setStatus] = useState("");
//   const [m, setM] = useState(false);
//   const [location, setLocation] = useState({ lon: '', lat: '' });
//   const {token} = useSelector((store)=>store.LoginToken);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       setLocation({
//         lon: position.coords.longitude,
//         lat: position.coords.latitude
//       })
//     },
//       (err) => {
//         console.log(err)
//       });

//   }, [])

//   const mark =async ()=>{
      
//       const now = new Date();
//       const hour= now.getHours();
//       const min = now.getMinutes();
//       const [h,m]= data.time.split(":").map(Number);
//       const isoDate = new Date().toISOString().split('T')[0];
//       console.log(isoDate);
//       console.log(`${h} ${m} ${hour} ${min}`)
//       if (hour>  h|| (hour ===h && min > m)) {
//          setStatus("Late");
//       }
//       else 
//         setStatus("Present");

//     try{
//       let res = await axios.post(Apis.USER_MARK,{status,Date:isoDate} ,{headers:{Authorization:`bearer ${token}`}});
//       if(res.status===200){
//         console.log(res.data);
//       }
//     }catch(err){
//           console.log(err);
//     }

// }

//   const validate = () => {

//     const R = 6371000; // 🌍 Earth radius in meters
//     const toRad = (value) => (value * Math.PI) / 180;

//     const dLat = toRad(location.lat - data.locationLat);
//     const dLon = toRad(location.lon - data.locationLon);

//     const a =
//       Math.sin(dLat / 2) ** 2 +
//       Math.cos(toRad(data.locationLon)) *
//       Math.cos(toRad(location.lat)) *
//       Math.sin(dLon / 2) ** 2;

//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     const distance = R * c;
//      console.log(distance);
//     console.log(`${location.lat} , ${location.lon} , ${data.locationLat} ,${data.locationLon}`)

//     if(distance<=50 && distance===0){
//        mark();
//     }
//     else{
//       console.log("out of the campus");
//     }
   
//     return distance;
//   }


//   const scan = () => {
//     const scanner = new Html5QrcodeScanner(
//       'reader',
//       { fps: 40, qrbox: 250 },
//       false
//     );

//     const success = (decodedText, decodedResult) => {
//       alert(`Scanned QR Code: ${decodedText}`);
//       setData(JSON.parse(decodedText));
      
//       setM(true);
//       scanner.clear(); // Stop scanning after success
//     };

//     const error = (errorMessage) => {
//       console.log(errorMessage);
//     };

//     scanner.render(success, error);
//   }

//   return (
//     <div className='mainContent'>
//       <div style={{ textAlign: 'center' }}>
//         <h2>QR Code Scanner</h2>
//         <div id="reader" style={{ width: '300px', margin: 'auto', backgroundColor: "whitesmoke" }}></div>
//         <p></p>
//       </div>
//       <button id="mark" disabled={m} onClick={scan} style={{ width: "300px" }} >Scan </button>
//       <button disabled={!m} onClick={validate} style={{ width: "300px" }} className='mt-4' > validate </button>
    
//     </div>
//   );
// };

// export default QRScanner;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useSelector } from "react-redux";
import Apis from "../../../Apis";
import './QRScanner.css'; // ✅ Corrected: matches the real file name

import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  Alert,
  useTheme,
  Slide,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlaceIcon from "@mui/icons-material/Place";

const QRScanner = () => {
  const { token } = useSelector((s) => s.LoginToken);
  const [qrData, setQrData] = useState(null);
  const [scanDone, setScanDone] = useState(false);
  const [status, setStatus] = useState("");
  const [loc, setLoc] = useState({ lon: "", lat: "" });
  const theme = useTheme();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setLoc({ lon: pos.coords.longitude, lat: pos.coords.latitude }),
      (err) => console.error(err)
    );
  }, []);

  const markAttendance = async () => {
    try {
      const res = await axios.post(
        Apis.USER_MARK,
        { status, Date: new Date().toISOString().split("T")[0] },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.status === 200) {
        alert("✅ Attendance Marked Successfully!");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const validateDistance = () => {
    if (!qrData) return;
    const R = 6371000;
    const toRad = (v) => (v * Math.PI) / 180;

    const dLat = toRad(loc.lat - qrData.locationLat);
    const dLon = toRad(loc.lon - qrData.locationLon);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(qrData.locationLat)) *
        Math.cos(toRad(loc.lat)) *
        Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const dist = R * c;

    if (dist <= 50) {
      markAttendance();
    } else {
      alert("❌ Out of range! Please scan from valid location.");
    }
  };

  const startScan = () => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 25, qrbox: 250 });
    scanner.render(
      (decodedText) => {
        try {
          const payload = JSON.parse(decodedText);
          setQrData(payload);

          const now = new Date();
          const [h, m] = payload.time.split(":").map(Number);
          const late =
            now.getHours() > h ||
            (now.getHours() === h && now.getMinutes() > m);
          setStatus(late ? "Late" : "Present");

          setScanDone(true);
        } catch (e) {
          console.error("Invalid QR:", e);
        }
        scanner.clear();
      },
      (err) => console.error(err)
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        ml: { md: "240px" },
        backgroundImage:
          "url('https://images.unsplash.com/photo-1581090700227-1e8e1f9b9c3d?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Slide in direction="up" timeout={500}>
        <Card
          elevation={10}
          sx={{
            width: "100%",
            maxWidth: 500,
            p: 3,
            borderRadius: 4,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(8px)",
          }}
        >
          <CardContent>
            <Stack spacing={3} alignItems="center">
              <Typography variant="h6" fontWeight={600} color="primary">
                Scan QR to Mark Attendance
              </Typography>

              <Box
                id="reader"
                sx={{
                  width: 300,
                  height: 300,
                  border: "2px dashed #aaa",
                  borderRadius: 2,
                  bgcolor: "white",
                  p: 1,
                }}
              />

              <Button
                variant="outlined"
                fullWidth
                startIcon={<CameraAltIcon />}
                onClick={startScan}
                disabled={scanDone}
              >
                {scanDone ? "Scanned" : "Start Scanning"}
              </Button>

              <Button
                variant="contained"
                fullWidth
                startIcon={<CheckCircleIcon />}
                onClick={validateDistance}
                disabled={!scanDone}
                sx={{
                  backgroundColor: "#2e7d32",
                  '&:hover': {
                    backgroundColor: "#1b5e20",
                  },
                }}
              >
                Validate & Mark
              </Button>

              {qrData && (
                <Alert
                  severity="info"
                  sx={{ width: "100%", borderRadius: 2 }}
                  iconMapping={{ info: <PlaceIcon /> }}
                >
                  <Stack spacing={1}>
                    <Typography variant="body2">
                      Your Location: <strong>{loc.lat.toFixed(4)}, {loc.lon.toFixed(4)}</strong>
                    </Typography>
                    <Typography variant="body2">
                      QR Location: <strong>{qrData.locationLat}, {qrData.locationLon}</strong>
                    </Typography>
                    <Chip
                      label={status}
                      color={status === "Present" ? "success" : "warning"}
                      icon={<CheckCircleIcon />}
                      sx={{ alignSelf: "flex-start" }}
                    />
                  </Stack>
                </Alert>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Slide>
    </Box>
  );
};

export default QRScanner;