import React,  {Fragment,useState} from "react";
import logo from '/src/assets/images/logo.png'
import { FaRegStar } from "react-icons/fa";
import { IoStatsChartOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import Model from "react-modal"
import Login from '../../Auth/Login';




export default function Navbar() {
  const [login, setLogin] = useState(false);
  

  return (
    <Fragment>
        <div className='flex items-center overflow-hidden fixed bg-[#f6f6f6] transition-[height-0] mt-0 py-4 left-0 right-0 z-10 top-0 px-12'>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <ul className='flex gap-7'>
                <li><a className='font-semibold font-["Ubuntu"] font-base' href="#">КАТАЛОГ</a></li>
                <li><a className='font-semibold font-["Ubuntu"] font-base' href="#">О КОМПАНИИ</a></li>
                <li><a className='font-semibold font-["Ubuntu"] font-base' href="#">НОВОСТИ</a></li>
                <li><a className='font-semibold font-["Ubuntu"] font-base' href="#">КОНТАКТЫ</a></li>
            </ul>
            <div className='border border-gray-400 outline-gray-400 rounded-xl flex items-center'>
            <IoIosSearch className='text-gray-400 ms-2'/>
                <input className='focus:outline-none bg-transparent p-2' type="text" placeholder='Поиск' />
            </div>
            <button onClick={() => {
                setLogin(true);
              }}
              className="py-2 px-3 bg-slate-500 text-white rounded-[15px]"
              >Войти</button>
          <Login open={login} onClose={() => setLogin(false)} className="absolute z-20 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"/> 

            <div className="icons flex gap-7">
            <FaRegStar className="w-6 h-6" />
            <Link  to="/canon">
                <IoStatsChartOutline className="w-6 h-6" />
            </Link>
            <Link to="/cart">
                <FiShoppingCart className="w-6 h-6" />
            </Link>
            </div>
        </div>
    </Fragment>
  )
};

