import React from 'react'
import popularProducts from "/src/data/popularProducts";   
import BookItem from '../BookItem';


export default function Canon() {
  return (
        <div className="mt-12 px-12">
                <h1 className="text-center font-bold text-2xl uppercase">Популярные товары</h1>
            <div className="flex flex-wrap">
                {popularProducts.map(item => {
                    return (
                            <BookItem data={item} key={item.id} />
                    )
                })}
            </div>
        </div>
    )
}
