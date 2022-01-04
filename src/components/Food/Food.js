import Card from "../UI/Card";
import "./Food.css";
import FoodFilter from "./FoodFilter";
import React, { useState } from "react";
import FoodList from "./FoodList";
import CalorieChart from "./CalorieChart";
import Footer from "../UI/Footer/Footer";

const Food = (props) => {
  const [filteredDate, setFilteredDate] = useState(new Date());

  const filterChangeHandler = (selectedDate) => {
    setFilteredDate(selectedDate);
  };

  const filteredFood = props.foodDiary.filter((food) => {
    // console.log("date"+food.date === filteredDate);
    // console.log("filterdate"+filteredDate);
    // console.log("realdate"+food.date)

    const foodDay = food.date.toLocaleString("en-US", { day: "2-digit" });
    const foodMonth = food.date.toLocaleString("en-US", { month: "long"});
    const foodYear = food.date.getFullYear();

    const filteredDay = filteredDate.toLocaleString("en-US", { day: "2-digit" });
    const filteredMonth = filteredDate.toLocaleString("en-US", { month: "long"});
    const filteredYear = filteredDate.getFullYear();

    return (foodDay === filteredDay) && (foodMonth === filteredMonth) && (foodYear === filteredYear);
  });

  return (
    <div>
      <Card className="food">
      <CalorieChart food={filteredFood} />
        <FoodFilter
          selected={filteredDate}
          onChangeFilter={filterChangeHandler}
        ></FoodFilter>
        
        <FoodList foodItem={filteredFood} />

      </Card>
      <Footer />
    </div>
  );
};

export default Food;
