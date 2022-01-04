import './TotalCaloriesChart.css';
import TotalCaloriesChartBar from './TotalCaloriesChartBar';

const TotalCaloriesChart = (props) =>{
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
  
    return (
      <div className='chart'>
        {props.dataPoints.map((dataPoint) => (
          <TotalCaloriesChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
    );
  };

export default TotalCaloriesChart;