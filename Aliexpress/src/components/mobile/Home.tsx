import SuperDeals from "./home/SuperDeals";
import WeeklyDeals from "./home/WeeklyDeals";
import Slider from "./home/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <SuperDeals />
      <WeeklyDeals />
    </div>
  );
};

export default Home;
