import React from 'react'

const productList = async () => {
  let data = await fetch('https://dummyjson.com/products');
  data = await data.json();
  return data.products;

}

const Products = async () => {
  let products = await productList();

  return (
    <>
    <div>Product List</div>
    {
      products.map((product) => {
        return(
          <>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <hr/>
          </>
        )
      })
    }
    </>
  )
}

export default Products