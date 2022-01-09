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
    //  console.log("date"+food.date === filteredDate);
    //  console.log("filterdate"+filteredDate);
    // console.log("realdate"+food.date)

      const foodDate = new Date(food.date);

    const foodDay = foodDate.toLocaleString("en-US", { day: "2-digit" });
    const foodMonth = foodDate.toLocaleString("en-US", { month: "long"});
   const foodYear = foodDate.getFullYear();

    const filteredDay = filteredDate.toLocaleString("en-US", { day: "2-digit" });
    const filteredMonth = filteredDate.toLocaleString("en-US", { month: "long"});
   const filteredYear = filteredDate.getFullYear();
    console.log("f"+foodDay)
      console.log(filteredDay)
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
        
        <FoodList foodItem={filteredFood} deleted={props.deleted}/>

      </Card>
      <Footer />
    </div>
  );
};

export default Food;
