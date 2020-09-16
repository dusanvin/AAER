var ctx = document.getElementById('myChart').getContext("2d");

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, '#80b6f4');
gradientStroke.addColorStop(1, '#f49080');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli"],
        datasets: [{
            label: "Analysierte Bildungsmedien",
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: [100, 120, 150, 170, 180, 170, 160]
        }]
    },
    options: {
	    animation: {
		  easing: "easeInOutBack"
		},          
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                	fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    display: true,
                    beginAtZero: true,
                    maxTicksLimit: 5,
                },
                gridLines: {
                    display: true
                }
            }],
            xAxes: [{
                gridLines: {
                  display: true
                },
                ticks: {
                  display: true
                }
            }]
        }
    }
});