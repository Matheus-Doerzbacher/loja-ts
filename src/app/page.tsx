/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { HeaderCustom } from "./components/header_custom";
import { ProductItem } from "./components/product_item";
import { ListProduts } from "./mock/list_products";

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

  function addShopCar(product: Product) {
    const updatedProductsList = productsList.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity + 1, inCar: true } : p
    );

    setProductsList(updatedProductsList);
    console.log(updatedProductsList);
  }

  return (
    <main>
      <HeaderCustom
        onclick={() => setShopCar(!shopCar)}
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
            {productsList.map((p) => (
              <ProductItem
                key={p.id}
                product={p}
                addShopCar={() => addShopCar(p)}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
