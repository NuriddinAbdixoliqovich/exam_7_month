import React from 'react'
import items from "/src/data/items";   
import BookItem from '../../components/BookItem';


export default function Canon() {
  return (
        <div className="mt-36 px-12">
                <p className="text-gray-400 ">Главная / Sony</p>
                <h1 className="uppercase text-2xl font-bold">Фотокамеры</h1>
                <h1 className="uppercase text-2xl font-bold text-green-500">Canon</h1>
            <div className="flex flex-wrap">
                {items.map(item => {
                    return (
                            <BookItem data={item} key={item.id} />
                    )
                })}
            </div>
        </div>
    )
}
