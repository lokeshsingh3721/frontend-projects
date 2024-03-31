import { FaArrowRight } from "react-icons/fa6";
import ItemCard from "../common/ItemCard";

const dummyProducts = [
  {
    url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Product",
    discount_price: 200,
    price: 800,
    orders: 1000,
  },
  {
    url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Product",
    discount_price: 200,
    price: 800,
    orders: 1000,
  },
  {
    url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Product",
    discount_price: 200,
    price: 800,
    orders: 1000,
  },
];

const Slider = () => {
  return (
    <div className="mt-6 flex flex-col gap-1">
      <div className="flex gap-2">
        <p className="font-bold text-lg">New User Gifts</p>
        <FaArrowRight className="w-5 h-auto " />
      </div>
      <p className="text-gray-400  font-light">
        Items from $0.99 and free shipping!
      </p>
      <div className="flex gap-2 overflow-auto">
        {dummyProducts.map((product) => {
          return <ItemCard key={product.price} details={product} />;
        })}
        <div className="flex flex-col cursor-pointer justify-center items-end">
          <p className="text-gray-600 text-sm font-bold ">view more</p>
          <FaArrowRight className="w-4 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
