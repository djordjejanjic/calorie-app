import TotalCaloriesChart from "../TotalCaloriesChart/TotalCaloriesChart";

const CalorieChart = (props) => {
    const chartDataPoints = [
       { label: 'Ukupno', value: 0}
    ];

    for (const food of props.food){
        //const foodCalorie = food.calories;
        console.log('calories');
        console.log(chartDataPoints[0].value);
        console.log(food.calories);
        chartDataPoints[0].value += parseInt(food.calories);
        
    }

    return <TotalCaloriesChart dataPoints={chartDataPoints} />;
}

export default CalorieChart;