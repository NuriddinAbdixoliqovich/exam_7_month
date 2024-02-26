import React from "react";
import card1 from "/src/assets/images/card1.png";
import card2 from "/src/assets/images/card2.png";
import card3 from "/src/assets/images/card3.png";


export default function News() {
  return (
    <div>
      <h3 className="text-center font-bold text-2xl mt-6 mb-3">
        Новости компании
      </h3>
      <div className="flex gap-3">
        <div className="border border-gray-200">
          <img src={card1} alt="" />
          <div className="p-5">
            <p>7 апреля 2019</p>
            <h3 className="font-extrabold">Выбираем SD-карты для съемки</h3>
            <p>
              За исключением отсутствующей системы <br />
              аэродинамического охлаждения, корпус <br />
              этого ноутбука почти такой же.
            </p>
          </div>
        </div>
        <div className="border border-gray-200">
          <img src={card2} alt="" />
          <div className="p-5">
            <p>20 мая 2019</p>
            <h3 className="font-extrabold">Что представила Photokina</h3>
            <p>
              За исключением отсутствующей системы <br />
              аэродинамического охлаждения, корпус <br />
              этого ноутбука почти такой же.
            </p>
          </div>
        </div>
        <div className="border border-gray-200">
          <img src={card3} alt="" />
          <div className="p-5">
            <p>14 июня 2019</p>
            <h3 className="font-extrabold">Новинка goPro Hero 5</h3>
            <p>
              За исключением отсутствующей системы <br />
              аэродинамического охлаждения, корпус <br />
              этого ноутбука почти такой же.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <button className="px-6 py-1.5 bg-[#6cc019] flex font-bold  items-center rounded-3xl gap-2 text-white mt-8 ">
              ВСЕ НОВОСТИ
      </button>
      </div>
    </div>
  );
}
