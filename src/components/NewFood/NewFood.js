import React, {useState} from "react";
import FoodForm from "./FoodForm";
import './NewFood.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../UI/Footer/Footer";

const NewFood = (props) => {
    const [isEditing, setEditing] = useState(false);

    const saveFoodDataHandler = (enteredFoodData) => {
        const foodData = {
            ...enteredFoodData,
            id: Math.random().toString(),
        };
        props.onAddFood(foodData);
        setEditing(false);
    };

    const setIsEditingHandler = () => {
        setEditing(true);
    }

    return (
        <React.Fragment>
            <Navbar/>
            <div className="new-food">
                {!isEditing && <button type="button" onClick={setIsEditingHandler}>Dodaj novu namirnicu</button>}
                {isEditing && <FoodForm onSaveFoodData={saveFoodDataHandler}></FoodForm>}
            </div>

        </React.Fragment>
    );
};

export default NewFood;
