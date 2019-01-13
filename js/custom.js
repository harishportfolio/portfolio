$(document).ready(function() {    
    $('.btn-profile').click(function() {
        $('.animate-div').hide("slow");
        $('#profile-section').show("slow");
    });
});


Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Skills'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    exporting: { enabled: false },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Percentage',
        colorByPoint: true,
        data: [{
            name: 'Javascript',
            y: 20,
            sliced: true,
            selected: true
        }, {
            name: 'Html',
            y: 10
        }, {
            name: 'Css',
            y: 10
        }, {
            name: 'Php',
            y: 15
        }, {
            name: 'Laravel',
            y: 20
        }, {
            name: 'Angular',
            y: 15
        }, {
            name: 'Node js',
            y: 10
        }]
    }]
});

function openLinkedIn(){
    window.open('https://www.linkedin.com/in/harish-raveendran/');
}
