// const Hero = ()=>{
//   return <>
//   <div className="bg-success row" style={{height:"70vh"}}>
//     <div className="col-6 p-4 " >
//            <h1>Quick mark  new way to <br/> take Attendence</h1>
//        <h6>
//         simple and smart way of taking attendence with help of technology and inovation in the world
//        </h6>
//     </div> 
//      <div className="col-6">
//       <img src="images/hero.png " style={{width:"auto"}}/>
//     </div>
//   </div>
//   </>
// }

// export default Hero;


// const Hero = () => {
//   return (
//    <div className="container-fluid">
//     <div className="bg-info-subtle row align-items-center" style={{ height: "80vh" }}>
//       <div className="col-md-6 p-5 text-dark">
//         <h1 className="display-4 fw-bold">
//           QuickMark: A New Way to <br /> Take Attendance
//         </h1>
//         <p className="lead mt-3">
//           A simple and smart way of taking attendance with the help of technology and innovation in the modern world.
//         </p>
//       </div>
//       <div className="col-md-6 text-center">
//         <img
//           src="images/hero.png"
//           alt="Attendance Illustration"
//           className="img-fluid"
//           style={{ maxHeight: "70vh" }}
//         />
//       </div>
//     </div>
 
//     </div>
    
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <div className="container-fluid">
      <div className=" bg-info-subtle row align-items-center pt-4" style={{ height: "90vh" }}>
       
        <div className="col-md-6 order-1 order-md-2 text-center">
          <img
            src="images/hero.png"
            alt="Attendance Illustration"
            className="img-fluid"
            style={{ maxHeight: "70vh" }}
          />
        </div>

      
        <div className="col-md-6 order-2 order-md-1 p-5 text-dark">
          <h1 className="display-4 fw-bold">
            TrackIT: A New Way to <br /> Take Attendance
          </h1>
          <p className="lead mt-3">
            A simple and smart way of taking attendance with the help of technology and innovation in the modern world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
