/* eslint-disable @next/next/no-img-element */
import { Product } from "../page";

interface ProductItemProps {
  product: Product;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  removeProduct: () => void;
}

export function ProductItemShopCar({
  product,
  decrementQuantity,
  incrementQuantity,
  removeProduct,
}: ProductItemProps) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-1 items-center justify-between border-2 p-3 gap-5 rounded-md shadow-md border-zinc-200">
        <img src={product.urlImage} alt={product.name} height={50} width={50} />

        <h5 className="font-semibold text-lg">{product.name}</h5>

        <p>R$ {product.value},00</p>

        <div className="inline-flex rounded-md shadow-sm">
          <button
            className="px-4 py-1 text-sm font-medium text-white bg-indigo-600 border rounded-s-lg hover:bg-indigo-500 active:bg-indigo-700"
            onClick={decrementQuantity}
          >
            -
          </button>
          <p className="px-4 py-1 text-sm font-medium text-white bg-indigo-600 border ">
            {product.quantity}
          </p>
          <button
            className="px-4 py-1 text-sm font-medium text-white bg-indigo-600 border  rounded-e-lg hover:bg-indigo-500 active:bg-indigo-700"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>

        <button
          className="flex items-center gap-1 bg-red-700 py-1 px-3 rounded-md justify-center text-white hover:bg-red-600 active:bg-red-900 border-none"
          onClick={removeProduct}
        >
          Excluir
        </button>
      </div>
      <div className="flex flex-col items-center  justify-center w-36 border-2 rounded-md shadow-md border-zinc-200">
        <p>Valor Total</p>
        <span>R$ {product.value * product.quantity},00 </span>
      </div>
    </div>
  );
}
