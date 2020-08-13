import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

export default function BarChart(props) {
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
      <Bar data={chartData} responsive="true" />
  );
}