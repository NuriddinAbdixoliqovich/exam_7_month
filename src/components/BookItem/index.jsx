import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slice/cartSlice";
import { MdOutlineShoppingCart } from "react-icons/md";
// import styles from "./BookItem.css"

export default function BookItem({data}) {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart({
            ...data,
            quantity: 1
        }))
        alert("Successfully!")
    }

    return (
        <div className="">
            <div className="flex mt-16">
                <div key={data.id} className="border border-gray-200 px-4 py-8">
                    <img src={data.img} alt="" />
                    <h3 className="text-center my-4 text-xl font-bold">{data.model}</h3>
                    <div className="flex">
                <div className="p-2 border border-gray-100 text-center">
                    <h2 className="font-bold">{data.weekday} Р</h2>
                    <p className="text-gray-600">Будний</p>
                </div>
                <div className="p-2 border border-gray-100 text-center">
                    <h2 className="font-bold">
                    {data.holiday} Р 
                    </h2>
                    <p className="text-gray-600">Выходной</p>
                </div>
                <div className="p-2 border border-gray-100 text-center">
                    <h2 className="font-bold">
                    {data.week} Р 
                    </h2>
                    <p className="text-gray-600">Неделя</p>
                </div>
                <div className="p-2 border border-gray-100 text-center">
                    <h2 className="font-bold">
                    {data.month} Р
                    </h2>
                    <p className="text-gray-600">Месяц</p>
                </div>
                </div>
                <div className="flex gap-6 mt-6">
                <button className="border shadow-md px-6 py-2 rounded-3xl font-bold">
                    Подробнее
                </button>
                <button 
                    className="px-6 py-1.5 bg-[#6cc019] flex font-bold  items-center rounded-3xl gap-2 text-white "
                    onClick={handleAddToCart}
                    >
                    <MdOutlineShoppingCart />
                    В корзину
                </button>
                </div>
                </div>
            </div>
        </div>
    )
}

