$(function () {
        $('#layer_700').highcharts({
            chart: {
                type: 'column'
            },
           
            xAxis: {
                categories: [
                    '',
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: '<span style="font-size:10px">Percent of Vaccination</span>'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:5px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Fully Vaccinated',
                data: [49.9]
    		},{
                name: 'Not Fully Vaccinated',
                data: [60]
    		}]
        });
    });