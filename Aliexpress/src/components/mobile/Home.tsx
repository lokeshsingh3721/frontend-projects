import WeeklyDeals from "./home/Itemscroll";
import Slider from "./home/Slider";

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

const Home = () => {
  return (
    <div>
      <Slider
        title="Welcome deals"
        headline="Exclusive first order price"
        products={dummyProducts}
      />
      <Slider
        title="Best Sellers"
        headline="Get discounts on popular items"
        products={dummyProducts}
      />
      <WeeklyDeals />
    </div>
  );
};

export default Home;
