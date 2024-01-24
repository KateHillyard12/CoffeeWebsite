let waterLevel = 0;

const waterChartCanvas = document.getElementById('waterChart');
const waterLevelElement = document.getElementById('water-level');
const addWaterButton = document.getElementById('add-water-button');
const groundsBlock = document.getElementById('grounds-block');
const brewedBall = document.getElementById('brewed-ball');
const addCoffeeButton = document.getElementById('add-coffee-button');
const brewButton = document.getElementById('brew-button');
const resultElement = document.getElementById('result');

let waterChart;

// Function to update the water level chart
// Function to update the water level chart
function updateWaterChart() {
    console.log('Updating water chart...')
    if (!waterChart) {
        const ctx = waterChartCanvas.getContext('2d');
        waterChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Label 1', 'Label 2', 'Label 3'],
                datasets: [{
                    label: 'Water Level',
                    borderColor: 'blue', // Change this line to set your desired color
                    borderWidth: 3,
                    data: [waterLevel],
                    fill: false,
                }],
            },
            options: {
                scales: {
                    x: {
                        display: false, // Set to false to hide the x-axis
                        ticks: {
                            color: 'white',
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)',
                        },
                    },
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: 'white',
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)',
                        },
                    },
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white',
                        },
                    },
                },
            },
        });
    } else {
        // Update the existing chart data
        waterChart.data.datasets[0].data = [waterLevel];
        waterChart.update();
    }
}



addWaterButton.addEventListener('click', () => {
    if (waterLevel < 80) {
        waterLevel += 20;
        console.log('Water level:', waterLevel);
        updateWaterLevel();
        updateWaterChart();
    }
});

addCoffeeButton.addEventListener('click', () => {
    if (waterLevel >= 80) {
        resultElement.innerText = 'Coffee grounds added!';
        showGroundsBlock();
    } else {
        resultElement.innerText = 'Add more water first.';
    }
    updateWaterChart();
});

brewButton.addEventListener('click', () => {
    if (waterLevel >= 80) {
        resultElement.innerText = 'Coffee is brewing! Enjoy your coffee!';
        hideWaterAndGrounds();
        showBrewedBall();
        changeCoffeeMachineImage();
    } else {
        resultElement.innerText = 'Add more water and coffee grounds first.';
    }
    updateWaterChart();
});

function updateWaterLevel() {
    waterLevelElement.style.height = `${waterLevel}%`;
}

function showGroundsBlock() {
    groundsBlock.style.display = 'block';
}

function hideWaterAndGrounds() {
    waterLevelElement.style.display = 'none';
    groundsBlock.style.display = 'none';
}

function showBrewedBall() {
    brewedBall.style.display = 'block';
}

function changeCoffeeMachineImage() {
    document.getElementById('coffee-machine').style.backgroundImage = 'url("coffee-machineDONE.png")';
    console.log('Coffee machine image changed.');
}

updateWaterChart();
