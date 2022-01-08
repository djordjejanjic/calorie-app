import "./FoodItem.css";
import FoodDate from "./FoodDate";
import Card from "../UI/Card";

const FoodItem = (props) => {
    console.log('kk');
    console.log(props.date);



  return (
    <li>
      <Card className="food-item">
        <FoodDate date={props.date} />
        <div className="food-item__description">
          <h2>{props.name}</h2>
          <div className="food-item__calories">{props.calories} kcal</div>
        </div>
      </Card>
    </li>
  );
};

export default FoodItem;
