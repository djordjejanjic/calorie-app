import "./FoodItem.css";
import FoodDate from "./FoodDate";
import Card from "../UI/Card";
import axios from "axios";

const FoodItem = (props) => {
    console.log('kk');
    console.log(props.date);

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:5000/food/${id}`).then(res => console.log("obrisano")).catch(err=> console.log(err));
        props.deleted(true);
    }

  return (
    <li>
      <Card className="food-item">
        <FoodDate date={props.date} />
        <div className="food-item__description">
          <h2>{props.name}</h2>
          <div className="food-item__calories">{props.calories} kcal</div>
            <div className="food-item__delete"><p onClick={() => {deleteHandler(props.id)}}>Obriši</p></div>
        </div>
      </Card>
    </li>
  );
};

export default FoodItem;
