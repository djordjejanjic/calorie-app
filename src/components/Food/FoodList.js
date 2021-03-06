import FoodItem from "./FoodItem";
import './FoodList.css';

const FoodList = (props) => {

if(props.foodItem.length === 0){
    return <h2 className='food-list__fallback'>Nema namirnica za ovaj dan!</h2>
}

    console.log("drg");
    // console.log(props.foodItem);
    // props.foodItem.map((food) => {
    //     console.log(food.date);
    // });

  return (
    <ul className='food-list'>
    { props.foodItem.map((food) => (
        <FoodItem
          key={food.id}
          name={food.name}
          calories={food.calories}
          date={food.date}
        />
    ))}
    </ul>

  );
};

export default FoodList;
