// import React from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { CiSearch } from "react-icons/ci";
// import { FiUser } from "react-icons/fi";
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '/src/redux/slice/authSlice';
// import { Button } from "@mui/material";




// export default function ProductHome() {
//     const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const handleLogout = () => {
//     dispatch(logout());
//   };
//   if (!isAuthenticated) {
//     return <Redirect to="/login" />;
//   }


//   return (
//     <div>
//         <div className='flex items-center overflow-hidden fixed bg-[#f6f6f6] transition-[height-0] mt-0 py-4 left-0 right-0 z-10 top-0 px-12'>
//             <RxHamburgerMenu />
//             <Link to="/">
//               <img src={logo} alt="" />
//             </Link>
//             <div>
//                 <h2 className="font-bold" >+7 495 170-39-18</h2>
//                 <p className="text-gray-400">Круглосуточно</p>
//             </div>
//             <div className="icons flex gap-7">
//             <FaRegStar className="w-6 h-6" />
            
//                 <IoStatsChartOutline className="w-6 h-6" />
           
            
//                 <FiShoppingCart className="w-6 h-6" />
            
//             </div>
//             <div>
//             <CiSearch className="border-x-2 border-gray-500 px-8"/>
//             <FiUser />  
//             </div>
//             <Button
//             onClick={handleLogout}
//             variant="outlined" color="secondary"/>
//         </div>

//         <Home />
//     </div>


//   );
// }
