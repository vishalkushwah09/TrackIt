// import axios from "axios";
// import { useEffect, useState } from "react";
// import Apis from "../../../Apis";
// import { useDispatch, useSelector } from "react-redux";
// import { data } from "../../../redux/AttendenceSlice";
// // import { DataGrid } from '@mui/x-data-grid';


// const Attendence = () => {
//   const [attendence, setAttendence] = useState([]);
//   const dispatch = useDispatch();
//   let count;
//   let { token } = useSelector((store) => store.LoginToken);
//   useEffect(() => {
//     const view = async () => {
//       try {
//         let res = await axios.get(Apis.USER_VIEW, { headers: { Authorization: `bearer ${token}` } });
//         if (res.status === 200) {
//           console.log(res.data.list);
//           dispatch(data(res.data.list));
//           setAttendence(res.data.list);
//         }
//       }
//       catch (err) {
//         console.log(err)
//       }
//     }
//     view();
//   }, []);

//   useEffect(() => {
//     count = attendence.reduce((acc, item) => {
//       const status = item.attendance?.status;
//       if (status) {
//         acc[status] = (acc[status] || 0) + 1;
//       }
//       return acc;
//     }, {});
//   }, [attendence])

//   const columns = [
//     {field : "mail" , headerName : "Email" },
//     {field : "status" , headerName : "Status"},
//     {field : "date" , headerName : "Date"}
//   ]

//   return <div className="mainContent">

//     {/* <DataGrid rows={attendence} columns={columns} /> */}

//     <h1>Attendance Records</h1>
//     {attendence.map((item) => (
//       <div key={item._id} style={{ padding: '10px', marginBottom: '10px', border: '1px solid #ccc' }}>
//         <p><strong>Batch ID:</strong> {item.batchId}</p>
//         <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
//         <p><strong>User Email:</strong> {item.attendance.email}</p>
//         <p><strong>Status:</strong> {item.attendance.status}</p>
//         <p><strong>Check-In Time:</strong> {item.attendance.checkInTime || 'Not Checked In'}</p>
//       </div>

//     ))}

//     <p>{count}</p>
//   </div>
// }

// export default Attendence;
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { data } from "../../../redux/AttendenceSlice";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const Attendence = () => {
//   const [attendence, setAttendence] = useState([]);
//   const dispatch = useDispatch();
//   const { token } = useSelector((store) => store.LoginToken);

//   useEffect(() => {
//     const view = async () => {
//       try {
//         const res = await axios.get("http://localhost:4000/user/view", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (res.status === 200) {
//           dispatch(data(res.data.list));
//           setAttendence(res.data.list);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     view();
//   }, [dispatch, token]);

//   const getStatusBadge = (status) => {
//     switch (status) {
//       case "Present":
//         return <span className="badge bg-success">Present</span>;
//       case "Late":
//         return <span className="badge bg-warning text-dark">Late</span>;
//       case "Absent":
//         return <span className="badge bg-danger">Absent</span>;
//       default:
//         return <span className="badge bg-secondary">Unknown</span>;
//     }
//   };

//   return (
//     <div  style={{marginLeft:'250px'}}>
//     <div className="container mt-5">
//       <div className="card shadow-lg">
//         <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
//           <h4 className="mb-0">Attendance Records</h4>
//           <i className="bi bi-calendar-check" style={{ fontSize: "1.5rem" }}></i>
//         </div>
//         <div className="card-body">
//           <div className="table-responsive">
//             <table className="table table-hover table-bordered align-middle">
//               <thead className="table-light text-center">
//                 <tr>
//                   <th scope="col">Date</th>
//                   <th scope="col">Email</th>
//                   <th scope="col">Status</th>
//                   <th scope="col">Check-In Time</th>
//                 </tr>
//               </thead>
//               <tbody className="text-center">
//                 {attendence.length === 0 ? (
//                   <tr>
//                     <td colSpan="4">No attendance records available.</td>
//                   </tr>
//                 ) : (
//                   attendence.map((item) => (
//                     <tr key={item._id}>
//                       <td>{new Date(item.date).toLocaleDateString()}</td>
//                       <td>{item.attendance.email}</td>
//                       <td>{getStatusBadge(item.attendance.status)}</td>
//                       <td>{item.attendance.checkInTime || <span className="text-muted">Not Checked In</span>}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Attendence;
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../../redux/AttendenceSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Attendence = () => {
  const [attendence, setAttendence] = useState([]);
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.LoginToken);

  useEffect(() => {
    const view = async () => {
      try {
        const res = await axios.get("http://localhost:4000/user/view", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.status === 200) {
          dispatch(data(res.data.list));
          setAttendence(res.data.list);
        }
      } catch (err) {
        console.error(err);
      }
    };
    view();
  }, [dispatch, token]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Present":
        return <span className="badge rounded-pill bg-success px-3 py-2">Present</span>;
      case "Late":
        return <span className="badge rounded-pill bg-warning text-dark px-3 py-2">Late</span>;
      case "Absent":
        return <span className="badge rounded-pill bg-danger px-3 py-2">Absent</span>;
      default:
        return <span className="badge rounded-pill bg-secondary px-3 py-2">Unknown</span>;
    }
  };

  return (
    <div style={{
      marginLeft: "250px",
      minHeight: "100vh",
        background: "linear-gradient(to right,rgb(186, 222, 233),rgb(140, 155, 191))",
      padding: "50px 25px"
    }}>
      <div className="container">
        <div className="card shadow border-0 rounded-4">
          <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center rounded-top-4">
            <h4 className="mb-0 fw-bold">📅 Attendance Records</h4>
            <i className="bi bi-calendar-check-fill fs-3"></i>
          </div>
          <div className="card-body p-4">
            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle text-center shadow-sm rounded">
                <thead className="table-info text-dark fs-6">
                  <tr>
                    <th>Date</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Check-In Time</th>
                  </tr>
                </thead>
                <tbody>
                  {attendence.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-muted py-4">No attendance records available.</td>
                    </tr>
                  ) : (
                    attendence.map((item) => (
                      <tr key={item._id}>
                        <td>{new Date(item.date).toLocaleDateString()}</td>
                        <td className="text-primary fw-semibold">{item.attendance.email}</td>
                        <td>{getStatusBadge(item.attendance.status)}</td>
                        <td>
                          {item.attendance.checkInTime ? (
                            <span className="fw-medium">{item.attendance.checkInTime}</span>
                          ) : (
                            <span className="text-muted fst-italic">Not Checked In</span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendence;
