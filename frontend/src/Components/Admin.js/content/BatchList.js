// import * as React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import Apis from '../../../Apis';
// import axios from 'axios';
// import { list } from "../../../redux/BatchSlice";
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useState } from 'react';
// import Header from '../Header';


// export default function BatchList() {
//   const [batchName, setBatchName] = useState("");
//   const dispatch = useDispatch();
//   const { batchList } = useSelector((store) => store.Batch);
//   const { token } = useSelector((store) => store.LoginToken);
//   const [click, setClick] = useState('none');
//   const [head, setHead] = useState('');
//   const [btn1, setBtn1] = useState(false);
//   const [btn2, setBtn2] = useState(false);



//   useEffect(() => {
//     const batch = async () => {
//       try {
//         let response = await axios.get(Apis.ADMIN_BATCHES, { headers: { Authorization: `Bearer ${token}` } });
//         if (response.status === 200) {
//           dispatch(list(response.data.batches));
//           console.log(response.data);
//         }
//       }
//       catch (err) {
//         console.log(err);
//       }
//     }
//     batch();
//   });


//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       let response = await axios.post(Apis.ADMIN_CREATE_BATCH, { name: batchName }, { headers: { Authorization: `Bearer ${token}` } });
//       if (response.status === 200)
//         alert("done");
//       setClick('none');
//     }
//     catch (err) {
//       setClick('none');
//       console.log(err);
//     }
//   };

//   const handleDelete = async (e) => {
//     e.preventDefault();
//     try {
//       let response = await axios.delete(`${Apis.ADMIN_Delete_BATCH}/${batchName}`, { headers: { Authorization: `Bearer ${token}` } });
//       if (response.status === 200)
//           setClick('none');
//     }
//     catch (err) {
//       setClick('none');
//       console.log(err);
//     }
//   };

//   const handleformCreate = (e) => {
//     setBtn1(false);
//     if (click == 'none') {
//       setHead('Create Batch');
//       setBtn2(true);
//       setClick('block');
//     }
//     if (click == 'block') {
//       setClick('none');
//     }
//   }
//   const handleformDelete = (e) => {
//     setBtn2(false);
//     if (click == 'none') {
//       setHead('Delete Batch');
//       setBtn1(true);
//       setClick('block');

//     }
//     if (click == 'block') {
//       setClick('none');
//       setBtn1(false)

//     }
//   }

//   return <>
//     <div className='mainContent overflow-auto' >
//       <Header heading={'Manage Batches'} />
//       <div className="row g-4">
//         {batchList.map((ele) => (
//           <div key={ele.id ?? ele.name} className="col-md-3 d-flex justify-content-center">
//             <div
//               className="card text-white shadow-sm border-0 overflow-x"
//               style={{
//                 width: '160px',
//                 height: '110px',
//                 borderRadius: '1rem',
//                 background: 'linear-gradient(135deg, #8EC5FC 0%, #E0C3FC 100%)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 textAlign: 'center',
//                 transition: 'transform 0.3s, box-shadow 0.3s',
//                 cursor: 'pointer',
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.transform = 'scale(1.05)';
//                 e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.transform = 'scale(1)';
//                 e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
//               }}
//             >
//               <span className="fw-bold" style={{ fontSize: '1rem', color: '#333' }}>
//                 {ele.name}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="container mt-3 shadow rounded  bg-info-subtle p-2" style={{ width: "600px", borderRadius: "10px", display: click }}>
//         <h2 className='fw-bold'>{head}</h2>
//         <form >
//           <div>
//             <label className='fw-semibold mx-2' htmlFor="name"  >Batch Name : </label>
//             <input onChange={(event) => { setBatchName(event.target.value) }} type="text" style={{ width: "auto" }} placeholder="Enter the batch Name" />
//           </div>
//           <div className="mb-4 p-2 d-flex   justify-content-end">

//             <button onClick={handleDelete} className='btn btn-outline-danger ' style={{ width: "40%", display: btn1 ? 'inline-block' : 'none' }}><DeleteIcon />Delete Batch</button>
//             <button onClick={handleCreate} className='btn btn-outline-success' style={{ width: "40%", display: btn2 ? 'inline-block' : 'none' }}><AddIcon />Batch</button>
//           </div>
//         </form>
//       </div>


//       <div className='row'>
//         <div class="col-md-6 card round m-4" onClick={handleformCreate} style={{ border: '2px dotted #3144de', color: '#3144de ', maxWidth: '350px', cursor: 'pointer' }} >
//           <div className="card-block">
//             <h6 className="m-b-20"></h6>
//             <h4 className="text-center f-14" >
//               <AddIcon fontSize='large' />
//               <br />
//               <span>Add New</span>
//             </h4>
//             <p className="m-b-20"></p>
//           </div>
//         </div>

//         <div class="col-md-6  card round m-4" onClick={handleformDelete} style={{ border: '2px dotted rgb(244, 43, 43)', color: '#3144de ', maxWidth: '350px', cursor: 'pointer' }} >
//           <div className="card-block">
//             <h6 className="m-b-20"></h6>
//             <h4 className="text-center f-14" >
//               <DeleteIcon fontSize='large' color='black' />
//               <br />
//               <span>Delete</span>
//             </h4>
//             <p className="m-b-20"></p>
//           </div>
//         </div>
//       </div>
//     </div>

//   </>
// }
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Apis from '../../../Apis';
import { list } from '../../../redux/BatchSlice';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../Header';
import { Paper, Typography } from '@mui/material';

export default function BatchList() {
  const [batchName, setBatchName] = useState("");
  const dispatch = useDispatch();
  const { batchList } = useSelector((store) => store.Batch);
  const { token } = useSelector((store) => store.LoginToken);
  const [click, setClick] = useState('none');
  const [head, setHead] = useState('');
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);

  useEffect(() => {
    const batch = async () => {
      try {
        let response = await axios.get(Apis.ADMIN_BATCHES, { headers: { Authorization: `Bearer ${token}` } });
        if (response.status === 200) {
          dispatch(list(response.data.batches));
        }
      } catch (err) {
        console.log(err);
      }
    };
    batch();
  }, [dispatch, token]);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(Apis.ADMIN_CREATE_BATCH, { name: batchName }, { headers: { Authorization: `Bearer ${token}` } });
      if (response.status === 200) alert("Batch Created Successfully");
      setClick('none');
    } catch (err) {
      setClick('none');
      console.log(err);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.delete(`${Apis.ADMIN_Delete_BATCH}/${batchName}`, { headers: { Authorization: `Bearer ${token}` } });
      if (response.status === 200) setClick('none');
    } catch (err) {
      setClick('none');
      console.log(err);
    }
  };

  const handleformCreate = () => {
    setBtn1(false);
    setHead('Create Batch');
    setBtn2(true);
    setClick(click === 'none' ? 'block' : 'none');
  };

  const handleformDelete = () => {
    setBtn2(false);
    setHead('Delete Batch');
    setBtn1(true);
    setClick(click === 'none' ? 'block' : 'none');
  };

  return (
    <div className='mainContent overflow-auto' style={{ background: "linear-gradient(to right, #e0f7fa, #b2ebf2, fontWeight: 700, color: '#6a1b9a', mb: 4)", minHeight: "100vh", padding: "2rem" }}>
      <Header heading={'🎓Manage Batches'} />
      <div className="row g-4 mb-5">
        {batchList.map((ele) => (
          <div key={ele.id ?? ele.name} className="col-md-3 d-flex justify-content-center">
            <Paper elevation={4} className="p-3 text-center" sx={{
              width: '180px',
              height: '110px',
              borderRadius: '1rem',
              background: 'linear-gradient(135deg,rgb(152, 223, 247) 0%,rgba(61, 60, 62, 0.83) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: '0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
              }
            }}>
              {ele.name}
            </Paper>
          </div>
        ))}
      </div>

      <div className="container p-4 rounded" style={{ width: "600px", display: click, background: "linear-gradient(to right, #fbc2eb, #a6c1ee)", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
        <h2 className='fw-bold text-dark mb-3'>{head}</h2>
        <form>
          <div className="form-group mb-3">
            <label className='fw-semibold mx-2'>Batch Name:</label>
            <input onChange={(e) => setBatchName(e.target.value)} type="text" className="form-control" placeholder="Enter the batch name" />
          </div>
          <div className="d-flex justify-content-end gap-2">
            {btn1 && <button onClick={handleDelete} className='btn btn-sm btn-outline-danger'><DeleteIcon fontSize="small" /> Delete</button>}
            {btn2 && <button onClick={handleCreate} className='btn btn-sm btn-outline-success'><AddIcon fontSize="small" /> Create</button>}
          </div>
        </form>
      </div>

      <div className='row mt-5 justify-content-center'>
        <div className="col-md-4 card m-3 text-center py-3" onClick={handleformCreate} style={{ border: '2px dashed #1976d2', color: '#1976d2', cursor: 'pointer', background: 'linear-gradient(to right, #e1f5fe, #b3e5fc)' }}>
          <AddIcon fontSize='medium' /><br /><span className="fw-bold">Add New</span>
        </div>

        <div className="col-md-4 card m-3 text-center py-3" onClick={handleformDelete} style={{ border: '2px dashed #d32f2f', color: '#d32f2f', cursor: 'pointer', background: 'linear-gradient(to right, #ffebee, #ffcdd2)' }}>
          <DeleteIcon fontSize='medium' /><br /><span className="fw-bold">Delete</span>
        </div>
      </div>
    </div>
  );
}

