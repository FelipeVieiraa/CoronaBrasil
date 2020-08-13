import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart(props) {
  const [ chartData, setChartData ] = useState({});
  const [ labels, setLabels] = useState(props.labels);
  const [ datasets, setDatasets ] = useState(props.datasets);

  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: datasets
    })
  }, [datasets, labels]);

  return(
      <Line data={chartData} responsive="true" />
  );
}