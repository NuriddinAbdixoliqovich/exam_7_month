import { useEffect, useState } from "react"
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux"
import { removeItem, updateQuantity } from "/src/redux/slice/cartSlice"

// import styles from "./cartitem.css"

export default function CartItem({data}) {

    const dispatch = useDispatch()

        const [quantity, setQuantity] = useState(data?.quantity)
        const [totalPrice, setTotalPrice] = useState(+data?.price * +data?.quantity)
    
        const handleChange = (e) => {
            const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1
            setQuantity(value)
        }
    
        const handleRemove = () => {
            dispatch(removeItem({id: data?.id}))
        }
    
        useEffect(() => {
            setTotalPrice(data?.price * quantity)
            dispatch(updateQuantity({id: data?.id, quantity}))  
        }, [quantity, data?.price, data?.id, dispatch])
    
        return(
            <tr>
               <td className="border border-black px-4 py-4">
                    <div className="flex items-center">
                        <img className="w-[80px] h-[60px]" src={data.img} alt=""/> 
                        <p>{data.model}</p>
                    </div>
                </td> 
                <td className="border border-black px-4 text-green-500 font-bold">
                    {data.price}$
                </td>
                <td className="border border-black px-4">
                    <div className="flex items-center justify-center">
                        <button onClick={() => {
                            if (quantity > 1) {
                                setQuantity(pre => pre - 1)
                            }
                        }}
                        className="bg-yellow-500 w-6 h-6 rounded-3xl"
                        >-</button>
                        <input  className="mx-4 w-9" type="number" value={quantity} onChange={handleChange} />
                        <button onClick={() => setQuantity(pre => pre + 1)}
                        className="bg-green-500 w-6 h-6 rounded-3xl"
                        >+</button>
                    </div>
                </td>
                <td className="border border-black px-4 font-bold">
                    {totalPrice}$
                </td>
                <td className="border border-black px-4">
                    <button className="bg-red-500 rounded-[50%] p-2" color="error" onClick={handleRemove}><MdDeleteOutline className=" w-6 h-6" /></button>
                </td>
            </tr>
        )
}