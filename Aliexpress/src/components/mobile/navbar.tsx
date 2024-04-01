import { useState } from "react";
import {
  CiMenuBurger,
  CiUser,
  CiShoppingCart,
  CiSearch,
  CiLocationOn,
} from "react-icons/ci";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { MdCurrencyExchange, MdOutlineLanguage } from "react-icons/md";
import { PiHeadset } from "react-icons/pi";
import SidebarCard from "./common/SidebarCard";

interface Product {
  url: string;
  title: string;
}

const dummyProducts = [
  {
    url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Product",
  },
  {
    url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Product",
  },
  {
    url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Product",
  },
  {
    url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Product",
  },
  {
    url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Product",
  },
  {
    url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Product",
  },
  {
    url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Product",
  },
];

const MobileNavbar = () => {
  const [search, setSearch] = useState<string>("");
  const [menuopen, isMenuOpen] = useState<boolean>(false);

  function menuHandler() {
    isMenuOpen(!menuopen);
  }

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-1 ">
          <CiMenuBurger
            className="w-6 h-auto cursor-pointer"
            onClick={() => {
              menuHandler();
            }}
          />
          <p className="text-xl l text-red-500  tracking-lighter">Ecommerce</p>
        </div>
        <div
          className={`flex justify-center items-center gap-3 ${
            menuopen ? "pointer-events-none" : "pointer-events-auto"
          } `}
        >
          <CiUser className="w-6 h-auto  cursor-pointer " />
          <CiShoppingCart className="w-7 h-auto cursor-pointer" />
        </div>
      </div>
      {/* search bar */}
      <div
        className={`flex relative h-9 ${
          menuopen ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="iphone 11"
          className="border w-full rounded-2xl p-3 font-extralight text-sm bg-gray-50 outline-none"
        />
        <CiSearch className="absolute right-2 top-2 w-5 h-auto cursor-pointer" />
      </div>
      {/* // side bar */}
      <div
        className={`fixed w-3/4 h-full bg-white z-10 flex flex-col gap-3 overflow-y-auto scroll-m-0 no-scrollbar ${
          menuopen ? `block` : "hidden"
        }`}
      >
        <div className="flex  gap-1 ">
          <AiOutlineHome
            onClick={() => menuHandler()}
            className="w-6 h-auto cursor-pointer"
          />
          <p className="text-xl  text-red-500  tracking-lighter">Ecommerce</p>
        </div>
        {/* // product category */}
        <div className="flex  flex-col gap-3">
          <div className="flex justify-between">
            <p className="font-bold text-lg">Popular Category</p>
            <AiOutlineRight className="w-7 h-auto cursor-pointer" />
          </div>
          {dummyProducts.map((product: Product) => {
            return (
              <SidebarCard
                key={product.title}
                url={product.url}
                title={product.title}
              />
            );
          })}
        </div>
        {/* shopping inspirations  */}
        <div className="flex  flex-col gap-3">
          <div className="flex justify-between">
            <p className="font-bold text-lg">Shopping Inspirations</p>
            <AiOutlineRight className="w-7 h-auto cursor-pointer" />
          </div>
          {dummyProducts.map((product: Product) => {
            return (
              <SidebarCard
                key={product.title}
                url={product.url}
                title={product.title}
              />
            );
          })}
        </div>

        {/* // footer */}
        <div className="mb-10 flex flex-col gap-5">
          <div className="flex justify-between">
            <p className="font-bold text-lg">Setting</p>
            <AiOutlineRight className="w-7 h-auto cursor-pointer" />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <CiLocationOn className="w-6 h-auto cursor-pointer" />
              <p>Ship to </p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
              alt="country"
              className="w-6 h-auto "
            />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <MdCurrencyExchange className="w-6 h-auto cursor-pointer" />
              <p>Currency </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <MdOutlineLanguage className="w-6 h-auto cursor-pointer" />
              <p>Language </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <PiHeadset className="w-6 h-auto cursor-pointer" />
              <p>Help center </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <CiLocationOn className="w-4 h-auto cursor-pointer" />
        <p className="font-semibold text-sm"> Deliver to India </p>
      </div>
    </div>
  );
};

export default MobileNavbar;
