import './FoodDate.css';

const FoodDate = (props) => {
    
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const month = props.date.toLocaleString("en-US", { month: "long"});
    // const year = props.date.getFullYear();
    
    return (
        <div className="food-date">
            <div className="food-date__month">{month}</div>
            <div className="food-date__day">{day}</div>          
        </div>
    );
}

export default FoodDate;