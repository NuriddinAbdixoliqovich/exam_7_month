import { useSelector } from "react-redux"
import CartItem from "../../components/cartItem"

export default function Cart() {
    const cart = useSelector(state => state.cart)
    return (
        <div className="px-12 mt-28">
        <p className="text-gray-400 ">Главная / Корзина</p>
        <h1 className="uppercase text-2xl font-bold mb-8">Корзина</h1>
        <div>
            {cart?.list && cart?.list?.length > 0 ? (
                <table className="w-full border border-black bg-yellow-50">
                    <thead>
                        <tr>
                            <th >Photo and Name</th>
                            <th className="border border-black">Price for one product</th>
                            <th >Quantity</th>
                            <th className="border border-black">Total</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.list.map(item => {
                                return (
                                    <CartItem 
                                        key={item?.id}
                                        data={item}
                                    />
                                )
                            })
                        }
                        <tr className="mt-8 border border-black ">
                            <td></td>
                            <td className="text-2xl">Total:</td>
                            <td></td>
                            <td className="text-3xl font-bold">{cart?.total}$</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            ) : <h1>Empty</h1>}
        </div>
    </div>
          
    )
}