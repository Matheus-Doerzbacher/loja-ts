/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { HeaderCustom } from "./components/header_custom";
import { ProductItem } from "./components/product_item";
import { ListProduts } from "./mock/list_products";
import { ProductItemShopCar } from "./components/product_item_shop_car";

export interface Product {
  id: number;
  urlImage: string;
  name: string;
  description: string;
  value: number;
  inCar: boolean;
  quantity: number;
}

export default function Home() {
  const [shopCar, setShopCar] = useState<boolean>(false);
  const [productsList, setProductsList] = useState<Product[]>(ListProduts);

  // ADD PRODUCT
  function addShopCar(product: Product) {
    const updatedProductsList = productsList.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity + 1, inCar: true } : p
    );

    setProductsList(updatedProductsList);
  }

  // INCREMENT QUANTITY
  function incrementQuantity(product: Product) {
    const updatedProductsList = productsList.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
    );

    setProductsList(updatedProductsList);
  }

  // DECREMENT QUANTITY
  function decrementQuantity(product: Product) {
    const updatedProductsList = productsList.map((p) =>
      p.id === product.id
        ? { ...p, quantity: p.quantity == 1 ? p.quantity : p.quantity - 1 }
        : p
    );

    setProductsList(updatedProductsList);
  }

  // REMOVE ITEM
  function removeProduct(product: Product) {
    const updatedProductsList = productsList.map((p) =>
      p.id === product.id ? { ...p, quantity: 0, inCar: false } : p
    );

    setProductsList(updatedProductsList);
  }

  // TOTAL VALUE
  function totalValue() {
    var value = 0;
    productsList
      .filter((p) => p.inCar == true)
      .forEach((p) => {
        value = value + p.value * p.quantity;
      });
    return value;
  }

  // ESVAZIAR CARRINHO
  function cleanShopCar() {
    const updatedProductsList = productsList.map((p) => ({
      ...p,
      quantity: 0,
      inCar: false,
    }));

    setProductsList(updatedProductsList);
  }

  return (
    <main>
      <HeaderCustom
        onclick={() => setShopCar(!shopCar)}
        toHome={() => setShopCar(false)}
        itemsShopCart={
          productsList.filter((product) => product.inCar == true).length
        }
        shopCar={shopCar}
      />
      {!shopCar ? (
        <div className="container mx-auto mt-5">
          <div className="mx-5">
            <h3 className="text-2xl font-semibold text-zinc-800">Produtos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-3">
              {productsList.map((p) => (
                <ProductItem
                  key={p.id}
                  product={p}
                  addShopCar={() => addShopCar(p)}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto mt-5">
          <div className="mx-5">
            <h3 className="text-2xl font-semibold text-zinc-800">
              Meu Carrinho
            </h3>
            {productsList.filter((p) => p.inCar == true).length > 0 ? (
              <div className="flex flex-col gap-3">
                {productsList
                  .filter((p) => p.inCar == true)
                  .map((p) => (
                    <ProductItemShopCar
                      key={p.id}
                      product={p}
                      decrementQuantity={() => decrementQuantity(p)}
                      incrementQuantity={() => incrementQuantity(p)}
                      removeProduct={() => removeProduct(p)}
                    />
                  ))}
                <div className="flex justify-between mt-10">
                  <p className="text-xl text-indigo-600 font-bold ">
                    Valor Final: R$ {totalValue()},00
                  </p>
                  <button
                    className="flex items-center gap-1 bg-zinc-500 py-1 px-3 rounded-md justify-center text-white hover:bg-zinc-400 active:bg-zinc-600 border-none"
                    onClick={cleanShopCar}
                  >
                    Esvaziar Carrinho
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center mt-5">
                <span>Não a nenhum item no carrinho :(</span>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
