import React from "react";
import Card from "./Card";
import hotelTN1 from "../assets/images/hotel-tn1.png";
import weatherPage from "../assets/images/weather-page-sc.png";
import SortingVisualizerCard from "./SortingVisualizerCard";

const CardList: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card
        title="Hotel Management"
        description="Bla Bla"
        thumbnail={hotelTN1}
      />
      <SortingVisualizerCard />
      <Card title="Weather App" description="totot" thumbnail={weatherPage} />
    </div>
  );
};

export default CardList;
