import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function Card(data) {


  const context = useContext(ShoppingCartContext);

  const ShowProduct = (ProductDetail) => {
    context.OpenProductDetail();
    context.setProductToShow(ProductDetail);
  }

  const addProductsToCart = (event) => {
    context.OpenCheckoutSideMenu();
    event.stopPropagation();
    context.addToCart(data.data);
    context.CloseProductDetail();
  }

  const RenderIcon = (id) => {

    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (

        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-green-500 size-6 text-white rounded-full m-2 p-1 border border-green-700">
          <CheckIcon />
        </button>
      )



    } else {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white size-6 text-black rounded-full m-2 p-1"
          onClick={(event) => {
            addProductsToCart(event, data.data);
          }}
        >
          <PlusIcon />

        </button>
      )
    }

  }


  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg" onClick={() => ShowProduct(data.data)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category}</span>
        <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt={data.data.title} />
        {RenderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-sm font-bold">${data.data.price}</span>
      </p>

    </div>
  )
}

export default Card