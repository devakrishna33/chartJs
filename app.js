$(document).ready(() => {
    const CHART = document.getElementById('lineChart');
    var lineChart = new Chart(CHART, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                borderColor: 'teal',
                data: [20, 10, 5, 2, 20, 30, 45],
            }]
        },
        options:{
            showLines: false,
        }
    });
});