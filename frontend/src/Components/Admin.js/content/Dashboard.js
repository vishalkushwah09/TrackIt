// // components/AdminDashboard/DashboardContent.js
// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import axios from "axios";
// import Apis from "../../../Apis";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { list } from "../../../redux/BatchSlice";
// import { useDispatch } from "react-redux";
// import LeaderboardSharpIcon from '@mui/icons-material/LeaderboardSharp';
// import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
// import Header from "../Header";

// const DashboardContent = () => {
  
//   const dispatch = useDispatch();
//   const [count ,setCount] = useState(0)
//     const {token} = useSelector((store)=>store.LoginToken); 
//     const { batchList }= useSelector((store)=>store.Batch)
     
  
//      useEffect(()=>{
//         const batch =async ()=>{
//            try{
//           let response = await axios.get(Apis.ADMIN_BATCHES, {headers:{Authorization:`Bearer ${token}`}});
          
//            if(response.status===200){
//               dispatch(list(response.data.batches));
//               console.log(response.data);
//             } 
//           let user  = await axios.get(Apis.ADMIN_USERS,{headers:{Authorization:`Bearer ${token}`}})
          
//            if(user.status===200){
//             console.log(user.data.count);
//             setCount(user.data.count[0].total);
//            }
//            if(user.status !==200)
//             console.log("error")
              
//            }
//            catch(err){
//               console.log(err);
//            }
//         }
  
//         batch();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//      },[]);

//   return <>
//     <div className="mainContent overflow-auto " style={{maxHeight:'100vh', backgroundColor:'#A1E3F9'}}>
//    <Header heading={'Dashboard'} />
//       <div className="row g-4">
//         {[
//           { label: "Total Batches", value: batchList.length, color: "primary" , icon :""},
//           { label: "Strength", value: count , color: "success",icon : <LeaderboardSharpIcon fontSize="large"/> },
//           { label: "Total Present", value: 289, color: "success" },
//           { label: "Total Absent", value: 31, color: "danger" },
//           { label: "Late Students", value: 8, color: "warning" },
//         ].map((item, index) => (
//           <div key={index} className="col-sm-6 col-lg-4">
//             <div className="card p-4 text-center shadow rounded " style={{backgroundColor:"#D1F8EF"}}>
//               <h5 className="fs-2 " >{item.icon} {item.label}</h5>
//               <p className={`fw-bold text-${item.color} fs-2`}>{item.value} </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-2">
//         <h3 className="mb-3 text-dark">Calendar view</h3>
//         <div className="d-flex justify-content-center">
//           <Calendar className="border rounded shadow" />
//         </div>
//       </div>
      
//     </div>

   
//   </>
// };

// export default DashboardContent;
// components/AdminDashboard/DashboardContent.js
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import Apis from "../../../Apis";
import { useSelector, useDispatch } from "react-redux";
import { list } from "../../../redux/BatchSlice";
import LeaderboardSharpIcon from '@mui/icons-material/LeaderboardSharp';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import Header from "../Header";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const DashboardContent = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const { token } = useSelector((store) => store.LoginToken);
  const { batchList } = useSelector((store) => store.Batch);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const batchRes = await axios.get(Apis.ADMIN_BATCHES, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (batchRes.status === 200) {
          dispatch(list(batchRes.data.batches));
        }

        const userRes = await axios.get(Apis.ADMIN_USERS, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (userRes.status === 200) {
          setCount(userRes.data.count[0].total);
        }
      } catch (err) {
        console.error("Dashboard loading error:", err);
      }
    };

    fetchDashboardData();
  }, [dispatch, token]);

  const dashboardData = [
    { label: "Total Batches", value: batchList.length, color: "primary", icon: <AutoGraphRoundedIcon fontSize="large" /> },
    { label: "Strength", value: count, color: "success", icon: <LeaderboardSharpIcon fontSize="large" /> },
  
  ];

  return (
    <Box className="mainContent overflow-auto" sx={{ background: "linear-gradient(to right, #e0f7fa, #b2ebf2)", minHeight: "100vh", p: 4 }}>
      <Header heading="Dashboard" />

      <Grid container spacing={4} mb={5} justifyContent="center">
        {dashboardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card elevation={10} sx={{ borderRadius: 4, background: 'linear-gradient(to right, #ffffff, #f1f1f1)', transition: '0.3s', '&:hover': { transform: 'scale(1.03)' } }}>
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h6" fontWeight={600} color="text.secondary" mb={1}>
                  {item.icon} {item.label}
                </Typography>
                <Typography variant="h4" fontWeight={700} color={`${item.color}.main`}>
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center">
        <Typography variant="h5" fontWeight={600} color="text.primary" mb={2}>
          Calendar View
        </Typography>
        <Box display="flex" justifyContent="center">
          <Calendar className="border rounded shadow" />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardContent;
