import React from 'react'
import productList from "/src/data/products"
import BookItem from '../../componenets/BookItem'


export default function Home() {
  return (
        <div className="container">
            {productList.map(item => {
                return (
                    <BookItem data={item} key={item.id} />
                )
            })}
        </div>
    )
}
