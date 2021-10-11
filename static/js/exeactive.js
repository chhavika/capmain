playbackTrendChart('Playback', 'Playback')
$("#practice_activeChart").val('Playback');
$(document).on('change', '#practice_activeChart', function() {
    $('#container33').empty();
    console.log(this.value)
    if (this.value == 'practice') {
        //document.getElementById('activeInsight').title = 'your new title';
        playbackTrendChart(this.value, 'Practice')
    } else {
        playbackTrendChart(this.value, 'Playback')
    }
});

function playbackTrendChart(selectValue, t) {
    var settings = {
        async: true,
        crossDomain: true,
        url: "/activetrendnew/" + selectValue,
        method: "GET",
    };
    $.ajax(settings).done(function(response) {
        var dataa = JSON.parse(response);
        console.log(dataa[0].bar, "data")





        Highcharts.chart('container33', {
            chart: {
                type: 'column'
            },
            credits: {
                enabled: false,
            },
            title: {
                text: t + " Active User Trend"

            },
            colors: ['#4F1FAF', '#462CEE', '#8AE02B', '#01A451'],
            xAxis: {
                categories: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
            },
            yAxis: {
                lineWidth: 1,
                min: 0,
                title: {
                    text: t + " User Count"
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: ( // theme
                            Highcharts.defaultOptions.title.style &&
                            Highcharts.defaultOptions.title.style.color
                        ) || 'gray'
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                series: {
                    point: {

                    }
                },
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            legend: {
                enabled: true,
                itemStyle: {
                    fontSize: '10px',
                    fontWeight: '200'
                }
            },
            series: [{
                    name: 'Clever',
                    data: dataa[3].barc
                },
                {
                    name: 'Schoology',
                    data: dataa[2].bars
                }, {
                    name: 'Family ' + t + ' Count(CSY2021-2022)',
                    fontSize: '8px',
                    data: dataa[1].bar2

                }, {
                    name: t + ' User Count(CSY 2021-2022)',
                    data: dataa[0].bar
                },

                {
                    type: 'spline',
                    color: '#FFFF00',
                    name: '(LSY 2019-2020)',
                    data: dataa[0].curve_LYTOLY
                },
                {
                    type: 'spline',
                    color: '#FF8300',
                    name: '(LSY 2020-2021)',
                    data: dataa[0].curve
                }
            ]
        });
    });
}


var settings = {
    async: true,
    crossDomain: true,
    url: "/averagetrend/",
    method: "GET",
}
$.ajax(settings).done(function(response) {
    var dataa = JSON.parse(response);
    console.log(dataa[0].bar, "data")

    Highcharts.chart('container35', {
        chart: {
            type: 'column'
        },
        credits: {
            enabled: false,
        },
        title: {
            text: " Average Playback Trend"

        },
        colors: ['#4F1FAF', '#462CEE', '#8AE02B', '#01A451'],
        xAxis: {
            categories: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        },
        yAxis: {
            lineWidth: 1,
            min: 0,
            title: {
                text: "Playback User Count"
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            series: {
                point: {

                }
            },
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },
        legend: {
            enabled: true,
            itemStyle: {
                fontSize: '10px',
                fontWeight: '200'
            }
        },
        series: [{
                name: 'Clever',
                data: dataa[3].barc
            },
            {
                name: 'Schoology',
                data: dataa[2].bars
            }, {
                name: 'Family Average Count(CSY2021-2022)',
                fontSize: '8px',
                data: dataa[1].bar2

            }, {
                name: 'Playback User Count(CSY 2021-2022)',
                data: dataa[0].bar
            },

            {
                type: 'spline',
                color: '#FFFF00',
                name: '(LSY 2019-2020)',
                data: dataa[0].curve_LYTOLY
            },
            {
                type: 'spline',
                color: '#FF8300',
                name: '(LSY 2020-2021)',
                data: dataa[0].curve
            }
        ]
    });
});


var settings = {
    async: true,
    crossDomain: true,
    url: "/sentimentdonut_csy",
    method: "GET",
}
$.ajax(settings).done(function(response) {
    var dataa = JSON.parse(response);

    Highcharts.chart('container37', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            credits: {
                enabled: false,
            },
        },
        title: {
            text: 'Sentiment Percebtage CSY'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.y}'
                },
                colors: [
                    "#02A45A", "#ff9933"
                ]
            }
        },
        series: [{
            name: 'Sentiment CSY',
            colorByPoint: true,
            data: [{
                name: 'Positive',
                y: dataa.donut.pos,
                sliced: true,
                selected: true
            }, {
                name: 'Negative',
                y: dataa.donut.neg,
            }, ]
        }]
    });
});



var settings = {
    async: true,
    crossDomain: true,
    url: "/topdistrictplayback",
    method: "GET",
}
$.ajax(settings).done(function(response) {
    var dataa = JSON.parse(response);
    console.log(dataa.Playbacks, "data")

    Highcharts.chart('container36', {
        chart: {
            type: 'bar'
        },
        credits: {
            enabled: false,
        },
        title: {
            text: "Top District Playback"

        },
        colors: ['#4F1FAF', '#462CEE', '#8AE02B', '#01A451'],
        xAxis: {
            categories: dataa.District,
            crosshair: false,
            labels: {
                style: {
                    fontSize: "10px",
                    rotation: 90,
                },
            }
        },
        yAxis: {
            lineWidth: 1,
            min: 0,
            title: {
                text: "Playback User Count"
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        tooltip: {
            style: {
                color: 'Black',
                fontWeight: 'bold'
            },
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            series: {
                point: {

                }
            },
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },
        legend: {
            enabled: true,
            itemStyle: {
                fontSize: '10px',
                fontWeight: '200'
            }
        },
        series: [{
                color: "#01A451",
                name: 'Playbacks',
                data: dataa.Playbacks
            }

        ]
    });
});



var settings = {
    async: true,
    crossDomain: true,
    url: "/feedbackrating_csy",
    method: "GET",
}
$.ajax(settings).done(function(response) {
    var dataa = JSON.parse(response);

    Highcharts.chart('container38', {
        chart: {
            type: 'column'
        },
        credits: {
            enabled: false,
        },
        title: {
            text: "Feedback Rating CSY"

        },
        colors: ['#4F1FAF', '#462CEE', '#8AE02B', '#01A451'],
        xAxis: {
            categories: dataa.rating,
            crosshair: false,
            labels: {
                style: {
                    fontSize: "10px",
                    rotation: 90,
                },
            }
        },
        yAxis: {
            lineWidth: 1,
            min: 0,
            title: {
                text: " Feedback Rating Count"
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        tooltip: {
            style: {
                color: 'Black',
                fontWeight: 'bold'
            },
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            series: {
                point: {

                }
            },
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },
        legend: {
            enabled: true,
            itemStyle: {
                fontSize: '10px',
                fontWeight: '200'
            }
        },
        series: [{
                color: "#01A451",
                name: 'Counts',
                data: dataa.count
            }


        ]
    });
});


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "/practicehistorychart",
    "method": "GET"
}
$.ajax(settings).done(function(response) {
    var dataa = JSON.parse(response);
    chart = new Highcharts.StockChart({
        chart: {
            renderTo: 'containerhistory',
            zoomType: 'x'
        },
        title: {
            text: 'Playback History (2021-2022)'
        },
        subtitle: {
            text: ''
        },
        credits: {
            enabled: false,
        },
        xAxis: [{
            type: 'datetime',
            events: {
                afterSetExtremes() {
                    let bottomAxis = this,
                        topAxis = this.chart.xAxis[1],
                        diferenciaMin = Math.abs(bottomAxis.dataMin - bottomAxis.min),
                        diferenciaMax = Math.abs(bottomAxis.dataMax - bottomAxis.max);
                    topAxis.setExtremes(topAxis.dataMin + diferenciaMin, topAxis.dataMax - diferenciaMax, true)
                }
            },
            labels: {
                formatter: function() {
                    return Highcharts.dateFormat(' %e,%b', this.value);
                }

            }
        }, {
            type: 'datetime',
            labels: {
                formatter: function() {
                    return Highcharts.dateFormat(' %e,%b', this.value);
                }

            },
            opposite: true,
            visible: false
        }],
        yAxis: {
            visible: true,
            opposite: false,
            showLastLabel: true,
            labels: {
                enabled: true,
                format: "{value}",
                align: "right"
            },
        },
        tooltip: {
            pointFormatter: function() {
                return '<span style="color:' + this.series.color + '">' + this.series.name + '</span>: <b>' + Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: true,
            itemStyle: {
                fontSize: '10px',
                fontWeight: '200'
            }
        },
        navigator: {
            enabled: true
        },
        rangeSelector: {
            inputEnabled: false,
            enabled: true
        },
        scrollbar: {
            enabled: true
        },
        navigation: {
            buttonOptions: {
                enabled: true
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal'

            },
            series: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [{
            "name": "Last SY",
            "type": "line",
            "color": "#FF9933",
            "xAxis": 0,
            "data": dataa.data.lsy
        }, {
            "name": "Family",
            "type": "column",
            "color": "#8AE02B",
            "xAxis": 1,
            "data": dataa.data.pcsy
        }, {
            "name": "School",
            "type": "column",
            "xAxis": 1,
            "color": "#01A451",
            "data": dataa.data.csy
        }]
    });
});

playbackTrendChart3('playback', 'Playback')
$("#practice_historyChart").val('playback');
$(document).on('change', '#practice_historyChart', function() {
    $('#containerhistory2').empty();
    console.log(this.value)
    if (this.value == 'practice') {
        // document.getElementById('historyInsight').title = 'your new title';
        playbackTrendChart3(this.value, 'Practice')
    } else {
        playbackTrendChart3(this.value, 'Playback')
    }
});

function playbackTrendChart3(selectValue3, tx) {
    var settings = {
        async: true,
        crossDomain: true,
        url: "/practicehistorychartlatest/" + selectValue3,
        method: "GET",
    };
    $.ajax(settings).done(function(response) {
        var dataa = JSON.parse(response);
        chart = new Highcharts.StockChart({
            chart: {
                renderTo: 'containerhistory2',
                zoomType: 'x'
            },
            title: {
                text: tx + ' History CSY'
            },
            subtitle: {
                text: ''
            },
            credits: {
                enabled: false,
            },
            xAxis: [{
                type: 'datetime',
                events: {
                    afterSetExtremes() {
                        let bottomAxis = this,
                            topAxis = this.chart.xAxis[1],
                            diferenciaMin = Math.abs(bottomAxis.dataMin - bottomAxis.min),
                            diferenciaMax = Math.abs(bottomAxis.dataMax - bottomAxis.max);
                        topAxis.setExtremes(topAxis.dataMin + diferenciaMin, topAxis.dataMax - diferenciaMax, true)
                    }
                },
                labels: {
                    formatter: function() {
                        return Highcharts.dateFormat(' %e,%b', this.value);
                    }

                }
            }, {
                type: 'datetime',
                labels: {
                    formatter: function() {
                        return Highcharts.dateFormat(' %e,%b', this.value);
                    }

                },
                opposite: true,
                visible: false
            }],
            yAxis: {
                title: {
                    text: tx + ' Count'
                },
                visible: true,
                opposite: false,
                showLastLabel: true,
                labels: {
                    enabled: true,
                    format: "{value}",
                    align: "right"
                },
            },
            tooltip: {
                pointFormatter: function() {
                    return '<span style="color:' + this.series.color + '">' + this.series.name + '</span>: <b>' + Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: true,
                itemStyle: {
                    fontSize: '10px',
                    fontWeight: '200'
                }
            },
            navigator: {
                enabled: true
            },
            rangeSelector: {
                inputEnabled: false,
                enabled: true
            },
            scrollbar: {
                enabled: true
            },
            navigation: {
                buttonOptions: {
                    enabled: true
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'

                },
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                    "name": "Last SY",
                    "type": "line",
                    "color": "#FF9933",
                    "xAxis": 0,
                    "data": dataa.data.lsy
                },
                {
                    "name": "Family",
                    "type": "column",
                    "color": "#8AE02B",
                    "xAxis": 1,
                    "data": dataa.data.pcsy
                }, {
                    "name": "School",
                    "type": "column",
                    "xAxis": 1,
                    "color": "#01A451",
                    "data": dataa.data.csy
                },
                {
                    "name": "Clever",
                    "type": "column",
                    "xAxis": 1,
                    "color": "#4f1faf",
                    "data": dataa.data.clever
                },
                {
                    "name": "Scoology",
                    "type": "column",
                    "xAxis": 1,
                    "color": "#462cee",
                    "data": dataa.data.schoology
                }
            ]
        });
    });
}