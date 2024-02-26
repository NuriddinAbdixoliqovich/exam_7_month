import React from "react";
import bg from "/src/assets/images/header.png";
import schedule from "/src/assets/icons/schedule.png";
import time from "/src/assets/icons/time.png";
import gps from "/src/assets/icons/gps.png";
import product from "/src/assets/icons/product.png";
import card from "/src/assets/icons/card.png";
import "./Home.css"
import PopularProduct from "../PopularProducts/PopularProduct";
import News from "../News/News";






export default function Home() {
  return (
    <div className="pt-[72px]">
      <div className="home_bg">
          <h1 className="text-3xl font-bold pt-96 ps-32 uppercase">
            <span className="text-green-500 bg-white ">Аренда</span><span className="bg-white"> Фото</span> <br /> <span className="bg-white">И видео</span><br /> <span className="bg-white z-10 absolute"> оборудования</span>
          </h1>
          <div className="w-[60px] h-[60px] bg-[#77cd12] rounded-full absolute ms-24 top-[530px] z-0"></div>
      </div>
      <div className="flex gap-6 bg-gray-100 px-12">
        <div className=" flex items-center pt-6 pb-6 gap-3">
          <img src={schedule} alt="" />
          <p>
            Самый большой <br />
            выбор техники
          </p>
        </div>
        <div className=" flex items-center pt-6 pb-6 gap-3">
          <img src={time} alt="" />
          <p>
          Быстрое <br /> оформление заказа
          </p>
        </div>
        <div className=" flex items-center pt-6 pb-6 gap-3">
          <img src={gps} alt="" />
          <p>
          Можно забрать заказ <br /> в пункте выдачи
          </p>
        </div>
        <div className=" flex items-center pt-6 pb-6 gap-3">
          <img src={product} alt="" />
          <p>
          Доставка в любую <br /> точку Москвы
          </p>
        </div>
        <div className=" flex items-center pt-6 pb-6 gap-3">
          <img src={card} alt="" />
          <p>
          Оплата картой <br /> и наличными
          </p>
        </div>
      </div>

      <PopularProduct />
      <News />
      
    </div>
  );
}
