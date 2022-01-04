import "./FoodFilter.css";
import DatePicker from "react-datepicker";
import "../NewFood/FoodForm.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const FoodFilter = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  const dateChangeHandler = (newDate) => {
    props.onChangeFilter(newDate);
    setStartDate(newDate);
  };

  return (
    <div>
      <div className="food-filter__control">
        <DatePicker selected={startDate} onChange={dateChangeHandler} />
      </div>
    </div>
  );
};

export default FoodFilter;
