import React  from "react";
import { useForm } from "react-hook-form";
import vk from "../assets/icons/vk.png";
import facebook from "../assets/icons/f.png";
import g from "../assets/icons/g+.png";
import close from '../assets/icons/close.png'
import { Dialog } from "@mui/material";
import { useDispatch } from 'react-redux';
import { login } from '/src/redux/slice/authSlice';



export default function Login({ open, onClose}) {
    const dispatch = useDispatch();
  
    const handleLogin = () => {
      if (name === "fotoprokat24" && password === "24fotoprokat"){
        dispatch(login());
    };
  };




  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Dialog open={open} onClose={onClose}>
          <div className="w-[480px] border border-gray-300 rounded-xl relative">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div
          className="mt-5 mb-8 text-center font-extrabold text-2xl fon-[Ubuntu] "
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Войдите в свой аккаунт
        </div>
        <button onClose={onClose}>
          <img src={close}  className="absolute top-[5px] right-[5px]" alt="" />
        </button>
        <div>
          <div className="flex gap-5 mb-5">
            <img src={vk} alt="" />
            <img src={facebook} alt="" />
            <img src={g} alt="" />
          </div>
        </div>
        <div className="flex border border-gray-200 py-5 pr-[150px] pl-[10px]">
          <input
            className="outline-none border-none"
            name="name"
            placeholder="Логин"
            {...register("name", { required: true })}
          />
        </div>
        <br />
        <error className="flex text-rose-600 mt-[-10px] ml-[50px]">
          {errors.name?.type === "required" && "Name is required"}
        </error>
        <div className="flex border border-gray-200 py-5 pr-[150px] pl-[10px]">
          <input
            className="outline-none border-none"
            name="password"
            placeholder="Пароль"
            {...register("password", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
        </div>
        <br />
        <error className="flex text-rose-600 mt-[-10px] ml-[50px]">
          {errors.name?.type === "required" && "Password is required"}
          {errors.password?.type === "minLength" &&
            "Entered password is less than 5 characters"}
          {errors.password?.type === "maxLength" &&
            "Entered password is more than 20 characters"}
        </error>
        <div className="ml-[50px] mt-3">
          <p className="underline text-green-400">
            Вспомнить логин или пароль?
          </p>
          <label htmlFor="checkbox" className="flex gap-2 mt-8">
          <input type="checkbox" id="checkbox" className="w-[20px]" />
          Запомнить пароль для последующего входа
          </label>
        </div>
        <div className="flex flex-col justify-center gap-5">
        <button 
        onClick={handleLogin}
        className="px-12 py-3 bg-[#6cc019] flex font-bold justify-center mt-5 items-center rounded-3xl gap-2 text-white  ">
        Войти
    </button>
        <button className="border shadow-md px-12 py-3 rounded-3xl font-bold mb-5 ">
        Регистрация
    </button>
        </div>
      </form>
    </div>
    </Dialog>

  );
};