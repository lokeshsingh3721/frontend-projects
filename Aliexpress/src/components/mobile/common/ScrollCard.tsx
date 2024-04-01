import { FaStar } from "react-icons/fa6";

const ScrollCard = () => {
  return (
    <div className="flex flex-col w-48">
      <div className="w-44 mb-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0UQBJTUYLyHaIv-cDA7kWbT6AjBCZIgByKiwXkrJig&s"
          alt="Product"
          className="w-full h-auto"
        />
      </div>
      <div className="flex gap-1 ">
        <p className="bg-red-500 text-white text-xs rounded-sm px-[3px] py-[1px]">
          Welcome deal{" "}
        </p>
        <p className="text-sm font-light"> Cat Toys</p>
      </div>
      <div className="flex s relative">
        <p className="font-bold">₹100</p>
        <div className="flex *:w-3 absolute left-11 bottom-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p className="text-xs text-gray-500 font-light"> 257</p>
        </div>
      </div>
      <div className="flex items-baseline  gap-1  ">
        <p className="text-sm text-black bg-yellow-200 font-semibold p-[1px] rounded-sm">
          choice
        </p>
        <p className="text-xs ">free shipping - Free returns</p>
      </div>
    </div>
  );
};

export default ScrollCard;
