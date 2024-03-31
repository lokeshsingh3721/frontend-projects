interface props {
  details: Product;
}

interface Product {
  url: string;
  title: string;
  discount_price: number;
  price: number;
  orders: number;
}

const ItemCard = ({ details }: props) => {
  const { url, discount_price, price, orders } = details;
  const firstDiscountChar = discount_price.toString().charAt(0);
  const remainingDiscountChar = discount_price.toString().slice(1).toString();

  return (
    <div>
      <div className="w-36 ">
        <img src={url} alt="Product" className="w-full h-auto rounded-md" />
      </div>
      <div className="flex gap-2 items-baseline">
        <p className="text-red- text-sm font-extrabold text-red-500">
          <span className="text-lg">₹{firstDiscountChar}</span>
          {remainingDiscountChar}
        </p>
        <p className="text-sm text-gray-400 line-through">₹{price}</p>
      </div>
      <div className="flex gap-2 items-baseline -mt-1 text-xs text-black opacity-70  font-semibold">
        <p>{orders}</p>
        <p>orders</p>
      </div>
    </div>
  );
};

export default ItemCard;
