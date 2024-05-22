/* eslint-disable @next/next/no-img-element */
"use client";
import { ShoppingCart } from "lucide-react";
import { Product } from "../page";

interface ProductItemProps {
  product: Product;
  addShopCar: () => void;
}

export function ProductItem({ addShopCar, product }: ProductItemProps) {
  return (
    <div
      key={product.id}
      className="flex flex-col items-center border-2 p-3 gap-2 rounded-md shadow-xl border-zinc-200"
    >
      <img src={product.urlImage} alt={product.name} height={150} width={150} />

      <h5 className="font-semibold text-lg">{product.name}</h5>

      <span className="text-sm text-center">{product.description}</span>

      <div className="w-full font-semibold">
        <p>R$ {product.value},00</p>
      </div>

      <button
        className="flex items-center gap-1 bg-indigo-600 py-1 w-full rounded-md justify-center text-white hover:bg-indigo-500 active:bg-indigo-800 border-none"
        onClick={addShopCar}
      >
        Colocar no <ShoppingCart size={20} />
      </button>
    </div>
  );
}
