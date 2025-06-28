
// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "../Header";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import Apis from "../../../Apis";
// import { Box, Typography, Button, Paper } from "@mui/material";

// const Leave = () => {
//   const { token } = useSelector((store) => store.LoginToken);
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     const fetchLeaves = async () => {
//       try {
//         const response = await axios.get(Apis.ADMIN_LEAVES, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (response.status === 200) {
//           setList(response.data.message);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchLeaves();
//   }, []);

//   const handleAction = async (id, action) => {
//     const updatedStatus = action === "accept" ? "Accepted" : "Rejected";

//     try {
//       await axios.put(
//         `${Apis.UPDATE_LEAVE}/${id}`,
//         { status: updatedStatus },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setList((prev) =>
//         prev.map((leave) =>
//           leave._id === id ? { ...leave, status: updatedStatus } : leave
//         )
//       );
//     } catch (err) {
//       console.log("Status update error:", err);
//     }
//   };

//   return (
//     <Box
//       className="mainContent"
//       sx={{
//         minHeight: "100vh",
//         background: "linear-gradient(to right, #e0f7fa, #b2ebf2)",
//         py: 5,
//         px: 2,
//       }}
//     >
//       <Header heading="📋 Leave Requests" />

//       <Box maxWidth="1100px" mx="auto">
//         <Paper elevation={10} sx={{ p: 4, borderRadius: 4 }}>
//           <Typography
//             variant="h4"
//             className="text-center fw-bold mb-4"
//             sx={{
//               background: "linear-gradient(to right, #1e88e5, #42a5f5)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Manage Leave Applications
//           </Typography>

//         <div className="table-responsive">
//   <table
//     className="table align-middle text-center"
//     style={{
//       borderCollapse: "separate",
//       borderSpacing: 0,
//       boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//       backgroundColor: "#ffffff",
//       borderRadius: "10px",
//       overflow: "hidden",
//     }}
//   >
//     <thead
//       style={{
//         background: "#1565c0",
//         color: "#fff",
//       }}
//     >
//       <tr>
//         <th
//           style={{
//             borderRight: "1px solid #eee",
//             padding: "14px",
//             fontSize: "16px",
//           }}
//         >
//           Name
//         </th>
//         <th style={{ borderRight: "1px solid #eee", padding: "14px" }}>
//           Email
//         </th>
//         <th style={{ borderRight: "1px solid #eee", padding: "14px" }}>
//           Batch
//         </th>
//         <th style={{ borderRight: "1px solid #eee", padding: "14px" }}>
//           Type
//         </th>
//         <th style={{ borderRight: "1px solid #eee", padding: "14px" }}>
//           Reason
//         </th>
//         <th style={{ borderRight: "1px solid #eee", padding: "14px" }}>
//           From
//         </th>
//         <th style={{ borderRight: "1px solid #eee", padding: "14px" }}>
//           To
//         </th>
//         <th style={{ borderRight: "1px solid #eee", padding: "14px" }}>
//           Status
//         </th>
//         <th style={{ padding: "14px" }}>Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       {list.length > 0 ? (
//         list.map((ele, index) => (
//           <tr
//             key={index}
//             style={{
//               borderTop: "1px solid #ddd",
//               transition: "background 0.3s ease",
//               backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = "#e3f2fd";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor =
//                 index % 2 === 0 ? "#f9f9f9" : "#fff";
//             }}
//           >
//             <td style={{ padding: "12px", borderRight: "1px solid #eee" }}>
//               {ele.name}
//             </td>
//             <td style={{ padding: "12px", borderRight: "1px solid #eee" }}>
//               {ele.email}
//             </td>
//             <td style={{ padding: "12px", borderRight: "1px solid #eee" }}>
//               {ele.batchName}
//             </td>
//             <td style={{ padding: "12px", borderRight: "1px solid #eee" }}>
//               {ele.type}
//             </td>
//             <td style={{ padding: "12px", borderRight: "1px solid #eee" }}>
//               {ele.reason}
//             </td>
//             <td style={{ padding: "12px", borderRight: "1px solid #eee" }}>
//               {new Date(ele.from).toLocaleDateString()}
//             </td>
//             <td style={{ padding: "12px", borderRight: "1px solid #eee" }}>
//               {new Date(ele.to).toLocaleDateString()}
//             </td>
//             <td style={{ padding: "12px", borderRight: "1px solid #eee" }}>
//               <span
//                 className={`badge fs-6 px-3 py-2 ${
//                   ele.status === "Pending"
//                     ? "bg-warning text-dark"
//                     : ele.status === "Accepted"
//                     ? "bg-success"
//                     : "bg-danger"
//                 }`}
//               >
//                 {ele.status}
//               </span>
//             </td>
//             <td style={{ padding: "12px" }}>
//               <Button
//                 variant="contained"
//                 size="small"
//                 disabled={ele.status !== "Pending"}
//                 sx={{
//                   background: "linear-gradient(to right, #00c853, #64dd17)",
//                   mr: 1,
//                   color: "white",
//                   fontWeight: 600,
//                   '&:hover': {
//                     background: "linear-gradient(to right, #64dd17, #00c853)",
//                     boxShadow: '0px 0px 10px rgba(0, 200, 83, 0.6)'
//                   }
//                 }}
//                 onClick={() => handleAction(ele._id, "accept")}
//               >
//                 Accept
//               </Button>
//               <Button
//                 variant="contained"
//                 size="small"
//                 disabled={ele.status !== "Pending"}
//                 sx={{
//                   background: "linear-gradient(to right, #d50000, #f44336)",
//                   color: "white",
//                   fontWeight: 600,
//                   '&:hover': {
//                     background: "linear-gradient(to right, #f44336, #d50000)",
//                     boxShadow: '0px 0px 10px rgba(244, 67, 54, 0.6)'
//                   }
//                 }}
//                 onClick={() => handleAction(ele._id, "reject")}
//               >
//                 Reject
//               </Button>
//             </td>
//           </tr>
//         ))
//       ) : (
//         <tr>
//           <td colSpan="9" className="text-center py-4">
//             <Typography variant="h6" color="text.secondary">
//               No leave requests found.
//             </Typography>
//           </td>
//         </tr>
//       )}
//     </tbody>
//   </table>
// </div>
//         </Paper>
//       </Box>
//     </Box>
//   );
// };

// export default Leave;
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Card, CardContent, CardHeader, Divider, Avatar, Grid } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import Apis from "../../../Apis";
import Header from "../Header";

const Leave = () => {
  const { token } = useSelector((store) => store.LoginToken);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const { data, status } = await axios.get(Apis.ADMIN_LEAVES, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (status === 200) setList(data.message);
      } catch (error) {
        console.error(error);
      }
    };
    if (token) fetchLeaves();
  }, [token]);

  const handleAction = async (id, action) => {
    const status = action === "accept" ? "Approved" : "Rejected";
    try {
      await axios.put(
        `${Apis.ADMIN_LEAVESTATUS}/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setList((prev) => prev.map((l) => (l._id === id ? { ...l, status } : l)));
    } catch (err) {
      console.error(err);
    }
  };

  const statusColor = (s) =>
    s === "Pending" ? "#FBC02D" : s === "Approved" ? "#4CAF50" : "#E53935";

  return (
    <Box sx={{ pl: "260px", py: 4, background: "linear-gradient(to right, #e3f2fd, #e1f5fe)",minWidth:"100vw", minHeight: "100vh" }}>
      <Header heading="📋 Leave Requests" />

      <Box sx={{ mt: 4 }}>
        {list.length ? (
          <Grid container spacing={4}>
            {list.map((l) => (
              <Grid item xs={12} sm={6} md={3} key={l._id}>
                <Card sx={{ borderRadius: 4, boxShadow: 3, height: "100%", p: 1, backgroundColor: "#ffffff" }}>
                  <CardHeader
                    avatar={<Avatar>{l.name?.charAt(0).toUpperCase()}</Avatar>}
                    title={<Typography variant="h6" fontWeight={600}>{l.name}</Typography>}
                    subheader={<Typography variant="body2" color="text.secondary">{l.email}</Typography>}
                    sx={{ backgroundColor: "#e3f2fd", borderRadius: 2, mb: 1 }}
                  />
                  <Divider />
                  <CardContent sx={{ pt: 2 }}>
                    <Typography variant="body2" gutterBottom><strong>Batch:</strong> {l.batchName}</Typography>
                    <Typography variant="body2" gutterBottom><strong>Type:</strong> {l.type}</Typography>
                    <Typography variant="body2" gutterBottom><strong>Reason:</strong> {l.reason}</Typography>
                    <Typography variant="body2" gutterBottom><strong>From:</strong> {new Date(l.from).toLocaleDateString()}</Typography>
                    <Typography variant="body2" gutterBottom><strong>To:</strong> {new Date(l.to).toLocaleDateString()}</Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Status:</strong>{" "}
                      <Box
                        component="span"
                        sx={{
                          bgcolor: statusColor(l.status),
                          color: "#fff",
                          px: 2,
                          py: 0.4,
                          borderRadius: 999,
                          fontSize: 11,
                          fontWeight: 600,
                          ml: 1,
                          display: "inline-block"
                        }}
                      >
                        {l.status}
                      </Box>
                    </Typography>
                    {l.status === "Pending" && (
                      <Box sx={{ mt: 2, display: "flex", gap: 1, justifyContent: "center" }}>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{ backgroundColor: "#e3f2f", '&:hover': { backgroundColor: "#66bb6a" }, flex: 1, fontSize: 12, fontWeight: 500 }}
                          onClick={() => handleAction(l._id, "accept")}
                        >
                          Accept
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{ backgroundColor: "#56DFCF", '&:hover': { backgroundColor: "#e57373" }, flex: 1, fontSize: 12, fontWeight: 500 }}
                          onClick={() => handleAction(l._id, "reject")}
                        >
                          Reject
                        </Button>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography align="center" variant="h6" color="text.secondary">
            No leave requests found.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Leave;
