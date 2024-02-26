import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export default function () {
    const logo = "/src/assets/images/logo.png"
  return (
    <div className="pb-12">
        <div className="flex items-center mt-16 bg-slate-500 py-4 px-12">
            <div className="flex gap-2">
                <HiOutlineMailOpen className="w-10 h-10 text-green-500" />
                <h2>
                    <span className="text-green-500">Подписывайтесь</span> <br /> 
                    <span className="text-white">на новости и акции</span>
                </h2>
            </div>
            <div className="relative">
                <input type="text"
                placeholder="Enter your email"
                className="p-2 w-[500px] border-none outline-none"
                />
                <button className="text-white bg-slate-400 p-2 absolute right-0">ПОДПИСАТСЬЯ</button>  
            </div>
            <div className="flex items-center gap-2">
                <MdOutlineLocalPhone className="text-green-500" />
                <h2 className="text-green-500 underline">Заказат звонок</h2>

            </div>
        </div>
        <div className="flex mt-8">
            <div className="flex flex-col gap-4 px-12">
                <img src={logo} alt="" className="w-[230px] h-[40px] ms-0"  />
                <p>самый удобный в Москве сервис аренды <br />
                    фото-, видео- и кинотехники.
                </p>
                <p>© 2015-2019 Fotoprokat24</p>
                <div className="flex gap-2 ms-0 mt-4">
                    <FaFacebook className="w-8 h-8" />
                    <FaTwitter className="w-8 h-8" />
                    <FaLinkedin className="w-8 h-8" />
                    <FaYoutube className="w-8 h-8" />
                    <FaInstagram className="w-8 h-8" />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-medium">Компания</h2>
                <p>О компании</p>
                <p>Новости</p>
                <p>Вакансии</p>
                <p>Политика <br /> конфиденциальности</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-medium">Клиетнам</h2>
                <p>Точки выдачи</p>
                <p>Скидки</p>
                <p>Бонусные программы</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-medium">Помощь</h2>
                <p>Вопрос-ответ</p>
                <p>Правила аренды</p>
                <p>Доставка</p>
                <p>Оплата</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-medium">Контакты</h2>
                <p>Fotoprokat24</p>
                <p>г. Москва, Проспект</p>
                <p>мира, дом 12</p>
                <p>Пн-Вс  9:00-21:00</p>
                <p>+7 (999) 999-99-99</p>
            </div>
        </div>
    </div>
  )
}
