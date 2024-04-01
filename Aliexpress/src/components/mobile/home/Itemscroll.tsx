import ScrollCard from "../common/ScrollCard";

const WeeklyDeals = () => {
  return (
    <div className="mt-6 flex flex-col gap-1 ">
      <p className="font-bold text-lg">More Deals</p>
      <div className="grid grid-cols-2 gap-2">
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
      </div>
    </div>
  );
};

export default WeeklyDeals;
