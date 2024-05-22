import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";

interface HeaderCustomProps {
  onclick: () => void;
  itemsShopCart: number;
  shopCar: boolean;
}

export function HeaderCustom({
  itemsShopCart,
  onclick,
  shopCar,
}: HeaderCustomProps) {
  return (
    <header className="flex items-center justify-around bg-zinc-300 py-2">
      <Link href="/">
        <Image alt="" src={logo} height={50} />
      </Link>
      <div className="relative">
        {itemsShopCart > 0 && (
          <div className="text-xs text-white bg-red-500 rounded-full px-1 absolute right-0 -top-1">
            {itemsShopCart}
          </div>
        )}
        <ShoppingCart
          size={40}
          className={`
            cursor-pointer transition-colors p-1
            ${
              shopCar
                ? "text-indigo-700 hover:text-indigo-900"
                : "hover:text-indigo-700"
            }
          `}
          onClick={onclick}
        />
      </div>
    </header>
  );
}
