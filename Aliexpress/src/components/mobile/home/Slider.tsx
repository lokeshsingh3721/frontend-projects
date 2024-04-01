import { FaArrowRight } from "react-icons/fa6";
import ItemCard from "../common/ItemCard";

interface props {
  title: string;
  headline: string;
  products: Product[];
}

interface Product {
  title: string;
  url: string;
  discount_price: number;
  price: number;
  orders: number;
}

const Slider = ({ title, headline, products }: props) => {
  return (
    <div className="mt-6 flex flex-col gap-1">
      <div className="flex gap-2">
        <p className="font-bold text-lg">{title}</p>
        <FaArrowRight className="w-5 h-auto " />
      </div>
      <p className="text-gray-400  font-light">{headline}</p>
      <div className="flex gap-2 overflow-auto">
        {products.map((product) => {
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
