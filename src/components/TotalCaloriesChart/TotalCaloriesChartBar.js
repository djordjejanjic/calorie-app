import "./TotalCaloriesChartBar.css";

const TotalCaloriesChartBar = (props) => {
  let barFillHeight = "0%";
  let totalCalorieGoal = 2500;

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / totalCalorieGoal) * 100) + "%";
  }

  const colorChange = () => {
    if (props.value > (totalCalorieGoal - 300)) {
      return true;
    }
  };

  return (
    <div className="chart-bar">
      <div className="chart-bar__label">
        {props.label}: {props.value} kcal
      </div>
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{
            width: barFillHeight,
            backgroundColor: colorChange() ? "#df512b" : "#04632e",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TotalCaloriesChartBar;
