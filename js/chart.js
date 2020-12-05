// Doughnut chart
var ctx = document.getElementById('circlemap').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Dairy', 'Fruits', 'Lean meats', 'Vegetables', 'Whole grains'],
        datasets: [{
            data: [27.92, 17.53, 14.94, 26.62, 12.99],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            //text: 'Recommended Daily Diet',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function(value, ctx) {
                    return value + '%';
                }
            }
        }
    }
});





var donutOptions = {
    cutoutPercentage: 85,
    legend: {
        display: false,
        position:'bottom',
        labels:{
            pointStyle:'circle',
            usePointStyle:true,
            fontColor: '#ffffff',
        }
    }
};
var chDonutData1 = {
    labels: ['Bootstrap', 'Popper', 'Other'],
    datasets: [
        {
            backgroundColor: colors.slice(0,3),
            borderWidth: 0,
            data: [74, 11, 40]
        }
    ]
};
var chDonut1 = document.getElementById("circlemap1").getContext('2d');
if (chDonut1) {
    new Chart(chDonut1, {
        type: 'pie',
        data: chDonutData1,
        options: donutOptions
    });
}


var donutOptions3 = {
    cutoutPercentage: 85,
    legend: {
        display: false,
        position:'bottom',
        labels:{
            pointStyle:'circle',
            usePointStyle:true,
            fontColor: '#ffffff',
        }
    }
};
var chDonutData3 = {
    labels: ['Sociales', 'Economicos'],
    datasets: [
        {
            backgroundColor: colors.slice(0,2),
            borderWidth: 0,
            data: [74, 11]
        }
    ]
};
var chDonut3 = document.getElementById("circlemap3").getContext('2d');
if (chDonut3) {
    new Chart(chDonut3, {
        type: 'pie',
        data: chDonutData3,
        options: donutOptions3
    });
}