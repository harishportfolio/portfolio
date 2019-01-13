$(document).ready(function() {    
    $('.btn-profile').click(function() {
        $('.animate-div').hide("slow");
        $('#profile-section').show("slow");
    });
    $('.footer-icon-home').click(function(){        
        $('#profile-section').hide("slow");
        $('.animate-div').show("slow");
    });
});


Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    exporting: { enabled: false },
    title: {
        text: ''
    },    
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '12px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: '<b>{point.y:.1f}</b>'
    },
    series: [{
        name: 'Percentage',
        data: [
            ['Html', 50],
            ['Css', 50],
            ['Javascript', 60],
            ['Php', 50],
            ['Jquery', 60],
            ['Angular', 60],
            ['Node js', 50],
            ['Laravel', 70]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '12px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});


function openLinkedIn(){
    window.open('https://www.linkedin.com/in/harish-raveendran/');
}
