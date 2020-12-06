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
            },

        }
    }
});


function createChart(id, type, options) {
    var data = {
        labels: ['January', 'February', 'March'],
        datasets: [
            {
                label: 'My First dataset',
                data: [50445, 33655, 15900],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }
        ]
    };
}






var donutOptions = {
    cutoutPercentage: 40,
    legend: {
        display: false,
        position: 'top',
        labels: {
            pointStyle: 'circle',
            usePointStyle: true,
            fontColor: '#960303',
        }
    },
    tooltips: {
        enabled: false,
        custom: function(tooltipModel) {
            // Tooltip Element
            var tooltipEl = document.getElementById('circlemap1-tooltip');



            // Create element on first render
            /*if (!tooltipEl) {
                tooltipEl = document.createElement('div');
                tooltipEl.id = 'table-tooltip';
                tooltipEl.innerHTML = '<table></table>';
                document.body.appendChild(tooltipEl);
            }else{
                tooltipEl.innerHTML = '<table></table>';
            }*/





            //$tableTooltip1 = $("#table-tooltip");
            //tooltipEl.classList.add("table-tooltip1");
            tooltipEl.classList.add("active");

            function getBody(bodyItem) {
                return bodyItem.lines;
            }

            // Set Text
            if (tooltipModel.body) {
                var titleLines = tooltipModel.title || [];
                var bodyLines = tooltipModel.body.map(getBody);

                var innerHtml = '<thead>';

                titleLines.forEach(function(title) {
                    innerHtml += '<tr><th>' + title + '</th></tr>';
                });
                innerHtml += '</thead><tbody>';
                console.log(bodyLines);
                let html = "<hr><span>Buscamos Contribuir a la rentabilidad del caficultor" +
                    "<br>" +
                    "<a style='font-size: 12px; text-decoration: none; color: #ffffff' href='#'>Enlace a la selección Sostenibilidad</a></span><hr>";
                bodyLines.forEach(function(body, i) {
                    var colors = tooltipModel.labelColors[i];
                    var style = 'background:' + colors.backgroundColor;
                    style += '; border-color:' + colors.borderColor;
                    style += '; border-width: 2px';
                    var span = '<span style="' + style + '"></span>';
                    innerHtml += '<tr><td>' + span + html + '</td></tr>';
                });
                innerHtml += '</tbody>';

                var tableRoot = tooltipEl.querySelector('table');
                tableRoot.innerHTML = innerHtml;
            }

            // `this` will be the overall tooltip
            var position = this._chart.canvas.getBoundingClientRect();
            tooltipEl.style.zIndex = "100000";


        },
        callbacks: {
            title: function(tooltipItem, data) {
                return  ("Eje"+" "+data['labels'][tooltipItem[0]['index']]).toUpperCase();
            },
            label: function(tooltipItem, data) {
                return data['datasets'][0]['data'][tooltipItem['index']];
            },
            afterLabel: function(tooltipItem, data) {

                var dataset = data['datasets'][0];
                var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][1]['total']) * 100)
                return '(' + percent + '%)';
            }
        },
        backgroundColor: '#FFF',
        titleFontSize: 16,
        titleFontColor: '#0066ff',
        bodyFontColor: '#000',
        bodyFontSize: 14,
        displayColors: false
    }
};
var chDonutData1 = {
    labels: ['AMBIENTAl', 'GOBERNAZA', 'ECONOMICO','SOCIAL'],
    datasets: [
        {
            backgroundColor: colors.slice(0,3),
            borderWidth: 1,
            data: [3.9,0.3, 55.3,40.5]
        }
    ],

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
    cutoutPercentage: 40,
    legend: {
        display: false,
        position:'bottom',
        labels:{
            pointStyle:'circle',
            usePointStyle:true,
            fontColor: '#ffffff',
        }
    },

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