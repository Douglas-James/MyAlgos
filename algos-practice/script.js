let selectedFunction = null;
let performanceData = {
  x: [], // Represents x-axis values (Input Size - n)
  y: []  // Represents y-axis values (Result of Function)
};

document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', () => {
    selectedFunction = button.dataset.function;
    document.getElementById('runTest').textContent = `Run ${selectedFunction}`;
  });
});

document.getElementById('runTest').addEventListener('click', () => {
  const n = parseInt(document.getElementById('nValue').value);
  if (isNaN(n) || n <= 0) {
    alert('Please enter a valid positive number.');
    return;
  }

  if (!selectedFunction) {
    alert('Please select a function to test.');
    return;
  }

  // Run performance test on selected function
  const result = window[selectedFunction](n);

  console.log(`Result: ${result}`);

  // Add x, y values to performance data
  addToPerformanceData(n, result);

  // Plot the data in 2D
  plot2DChart();
});

// Functions to track
function addUpToFirst(n) {
  return (n * (n + 1)) / 2;
}

function addUpToSecond(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function countUpAndDown(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += i;
  }
  for (let i = n; i > 0; i--) {
    result += i;
  }
  return result;
}

function printAllPairs(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result.push([i, j]);
    }
  }
  return result;
}

function numberOfHalves(n) {
  let count = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    count++;
  }
  return count;
}

function totalNumberOfHalves(n) {
  let count = 0;
  for (let i = n; i > 1; i = Math.floor(i / 2)) {
    count++;
  }
  return count;
}

function logAllBinaries(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i.toString(2));
  }
  return result;
}

// Function to add performance data for x, y axes
function addToPerformanceData(n, result) {
  performanceData.x.push(n);        // Add n value to x-axis
  performanceData.y.push(result);   // Add result of function to y-axis
}

// Function to plot the 2D chart using Plotly
function plot2DChart() {
  const data = [{
    x: performanceData.x,
    y: performanceData.y,
    mode: 'lines+markers', // Add lines between markers
    marker: {
      size: 8,
      color: 'rgba(0, 123, 255, 1)',
      opacity: 0.8
    },
    line: {
      color: 'rgba(0, 123, 255, 1)',
      width: 2
    },
    type: 'scatter'
  }];

  const layout = {
    title: '2D Performance Plot',
    xaxis: { title: 'Input Size (n)' },
    yaxis: { title: 'Result of Function' }
  };

  Plotly.newPlot('3dPlot', data, layout); // The '3dPlot' ID will now display a 2D plot.
}
