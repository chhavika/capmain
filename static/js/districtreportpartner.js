var d = new Date();
var currMonth = d.getMonth() + 1;
var currYear = d.getFullYear();
var currDate = d.getDate();

var startDate = new Date(currYear, currMonth, currDate);
console.log(startDate);
var e = "2015-03-01";
var f = currYear + "-" + currMonth + "-" + currDate;
$("#stardate").text(e);
$("#finaldate").text(f);
$("#fromd").text(e);
$("#tod").text(f);

//imgd('skillman');
modal2();

function imgd(a) {
    console.log("iamge", a);
    $("#imgdis").empty();
    $("#imgdis").append('<img src="/static/images/' + a + '.png" class="img-responsive" alt="School" style="color: #797979; width: 100%;">');
}


//CODE FOR PDF EXTRACT 
$("#btnPrint").on("click", function() {
    var divContents = $(".containerPrint").html();
    var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write('<html><head><title>DIV Contents</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});

function charts(a, b, c) {
    $("#container").empty();
    $("#container1").empty();
    $("#container2").empty();
    $("#container3").empty();
    $("#container4").empty();
    $("#container5").empty();
    $("#container6").empty();
    $("#container7").empty();
    $("#container38").empty();
    $("#container10").empty();


    var settings = {
        async: true,
        crossDomain: true,
        url: "/90daysuserpractising" + "/" + a + "/" + b + "/" + c,
        method: "GET",
    };

    $.ajax(settings).done(function(response) {
        var dataa = JSON.parse(response);
        console.log(dataa);
        $(function() {
            $("#container2").highcharts({
                chart: {
                    zoomType: "xy",
                    type: "column"
                },
                title: {
                    text: "User Playback History",
                },
                credits: {
                    enabled: false,
                },
                colors: ['#4F1FAF', '#462CEE', '#8AE02B', '#01A451'],
                xAxis: [{
                        categories: dataa.Date,
                        labels: {
                            rotation: 90,
                        }
                    },

                ],
                yAxis: [{
                        //Primary yAxis
                        lineWidth: 1,
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#000",
                            },
                        },
                        title: {
                            text: "Playback Count",
                            style: {
                                color: "#000",
                            },
                        },
                    },
                    {
                        //Secondary yAxis
                        title: {
                            text: "",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        opposite: false,
                    },
                ],
                tooltip: {
                    shared: true,
                },
                plotOptions: {
                    borderWidth: 2,
                    series: {
                        point: {
                            events: {
                                click: function() {
                                    URL = "/90daystable/" + a + "/" + this.category;
                                    $('#next').empty();
                                    console.log(URL);
                                    var modal2 = document.getElementById("myModal2");
                                    modal2.style.display = "block";
                                    $("#gif").append("<img style='width: 7%;margin-left: 45.2%;height:65px !important;' src='/static/images/loading.gif'><div><p style=' text-align: center;margin-top:5px;'>Please wait while we fetch your data.</p></div>");
                                    var gif = document.getElementById("gif");
                                    gif.style.display = "block";
                                    $('#btnExport').show();
                                    createDynamic(URL);
                                },
                            },
                        },
                    },
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: false
                        }
                    }
                },
                series: [{
                        name: 'Clever',
                        data: dataa.Clever
                    },
                    {
                        name: 'Schoology',
                        data: dataa.Scoology
                    }, {
                        name: 'Family',
                        fontSize: '8px',
                        data: dataa.Parents

                    }, {
                        name: 'Teacher',
                        data: dataa.Teachers
                    },
                ],
            });
        });
    });

    $(document).on('change', '#historyPlayback', function() {
        $('#container2').empty();
        // $("#waiting").append("<p style=' text-align: center;margin-top:5px;'>Please wait while we fetch your data.</p>");
        console.log(this.value)
        if (this.value == '2') {
            var settings = {
                async: true,
                crossDomain: true,
                url: "last90daysuserpractising/" + a,
                method: "GET",
            };
            $.ajax(settings).done(function(response) {
                var dataa = JSON.parse(response);
                console.log(dataa);
                $(function() {
                    $("#container2").highcharts({
                        chart: {
                            zoomType: "xy",
                            type: "column"
                        },
                        title: {
                            text: "User Playback History Last 90 Days",
                        },
                        credits: {
                            enabled: false,
                        },
                        colors: ['#4F1FAF', '#462CEE', '#8AE02B', '#01A451'],
                        xAxis: [{
                                categories: dataa.Date,
                                labels: {
                                    rotation: 90,
                                }
                            },

                        ],
                        yAxis: [{
                                //Primary yAxis
                                lineWidth: 1,
                                labels: {
                                    format: "{value}",
                                    style: {
                                        color: "#000",
                                    },
                                },
                                title: {
                                    text: "Playback Count",
                                    style: {
                                        color: "#000",
                                    },
                                },
                            },
                            {
                                //Secondary yAxis
                                title: {
                                    text: "",
                                    style: {
                                        color: "#4572A7",
                                    },
                                },
                                labels: {
                                    format: "{value}",
                                    style: {
                                        color: "#4572A7",
                                    },
                                },
                                opposite: false,
                            },
                        ],
                        tooltip: {
                            shared: true,
                        },
                        plotOptions: {
                            borderWidth: 2,
                            series: {
                                point: {
                                    events: {
                                        click: function() {
                                            URL = "/90daystable/" + a + "/" + this.category;
                                            $('#next').empty();
                                            console.log(URL);
                                            var modal2 = document.getElementById("myModal2");
                                            modal2.style.display = "block";
                                            $("#gif").append("<img style='width: 7%;margin-left: 45.2%;height:65px !important;' src='/static/images/loading.gif'><div><p style=' text-align: center;margin-top:5px;'>Please wait while we fetch your data.</p></div>");
                                            var gif = document.getElementById("gif");
                                            gif.style.display = "block";
                                            $('#btnExport').show();
                                            createDynamic(URL);
                                        },
                                    },
                                },
                            },
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false
                                }
                            }
                        },
                        series: [{
                                name: 'Clever',
                                data: dataa.Clever
                            },
                            {
                                name: 'Schoology',
                                data: dataa.Scoology
                            }, {
                                name: 'Family',
                                fontSize: '8px',
                                data: dataa.Parents

                            }, {
                                name: 'Teacher',
                                data: dataa.Teachers
                            },
                        ],
                    });
                });
            });
        } else {
            var settings = {
                async: true,
                crossDomain: true,
                url: "/90daysuserpractising" + "/" + a + "/" + b + "/" + c,
                method: "GET",
            };

            $.ajax(settings).done(function(response) {
                var dataa = JSON.parse(response);
                console.log(dataa);
                $(function() {
                    $("#container2").highcharts({
                        chart: {
                            zoomType: "xy",
                            type: "column"
                        },
                        title: {
                            text: "User Playback History",
                        },
                        credits: {
                            enabled: false,
                        },
                        colors: ['#4F1FAF', '#462CEE', '#8AE02B', '#01A451'],
                        xAxis: [{
                                categories: dataa.Date,
                                labels: {
                                    rotation: 90,
                                }
                            },

                        ],
                        yAxis: [{
                                //Primary yAxis
                                lineWidth: 1,
                                labels: {
                                    format: "{value}",
                                    style: {
                                        color: "#000",
                                    },
                                },
                                title: {
                                    text: "Playback Count",
                                    style: {
                                        color: "#000",
                                    },
                                },
                            },
                            {
                                //Secondary yAxis
                                title: {
                                    text: "",
                                    style: {
                                        color: "#4572A7",
                                    },
                                },
                                labels: {
                                    format: "{value}",
                                    style: {
                                        color: "#4572A7",
                                    },
                                },
                                opposite: false,
                            },
                        ],
                        tooltip: {
                            shared: true,
                        },
                        plotOptions: {
                            borderWidth: 2,
                            series: {
                                point: {
                                    events: {
                                        click: function() {
                                            URL = "/90daystable/" + a + "/" + this.category;
                                            $('#next').empty();
                                            console.log(URL);
                                            var modal2 = document.getElementById("myModal2");
                                            modal2.style.display = "block";
                                            $("#gif").append("<img style='width: 7%;margin-left: 45.2%;height:65px !important;' src='/static/images/loading.gif'><div><p style=' text-align: center;margin-top:5px;'>Please wait while we fetch your data.</p></div>");
                                            var gif = document.getElementById("gif");
                                            gif.style.display = "block";
                                            $('#btnExport').show();
                                            createDynamic(URL);
                                        },
                                    },
                                },
                            },
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false
                                }
                            }
                        },
                        series: [{
                                name: 'Clever',
                                data: dataa.Clever
                            },
                            {
                                name: 'Schoology',
                                data: dataa.Scoology
                            }, {
                                name: 'Family',
                                fontSize: '8px',
                                data: dataa.Parents

                            }, {
                                name: 'Teacher',
                                data: dataa.Teachers
                            },
                        ],
                    });
                });
            });

        }
    });
    $("#historyPlayback").val(1);


    var settings = {
        async: true,
        crossDomain: true,
        url: "/monthwisepracticedistrict" + "/" + a + "/" + b + "/" + c,
        method: "GET",
        error: function() {
            zerochart();
        }
    };
    $.ajax(settings).done(function(response) {
        var dataa = JSON.parse(response);
        console.log(dataa);
        $(function() {
            $("#container3").highcharts({
                chart: {
                    zoomType: "xy",
                    type: "column"

                },
                title: {
                    text: "Playback Trend By Month",
                },
                credits: {
                    enabled: false,
                },
                colors: ['#4F1FAF', '#462CEE', '#8AE02B', '#01A451'],
                xAxis: [{
                    categories: dataa.monthname,
                }, ],
                yAxis: [{
                        //Primary yAxis
                        lineWidth: 1,
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#000",
                            },
                        },
                        title: {
                            text: "Playback Count",
                            style: {
                                color: "#000",
                            },
                        },
                    },
                    {
                        //Secondary yAxis
                        title: {
                            text: "",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        opposite: false,
                    },
                ],
                tooltip: {
                    shared: true,
                },
                plotOptions: {
                    borderWidth: 2,
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
                series: [{
                        name: 'Clever',
                        data: dataa.Clever,
                        stack: 'male'
                    },
                    {
                        name: 'Schoology',
                        data: dataa.Scoology,
                        stack: 'male'
                    }, {
                        name: 'Family',
                        fontSize: '8px',
                        data: dataa.Parents,
                        stack: 'male'

                    }, {
                        name: 'Teacher',
                        data: dataa.Teachers,
                        stack: 'male'

                    }, {
                        name: 'LSY',
                        data: dataa.lsy,
                        color: '#FF9933',
                        stack: 'female'
                    },
                ],
            });
        });
    });


    function zerochart() {
        $(function() {
            $("#container3").highcharts({
                chart: {
                    zoomType: "xy",
                    type: "column"

                },
                title: {
                    text: "Playback Trend By Month",
                },
                xAxis: [{
                    categories: [],
                }, ],
                yAxis: [{
                        //Primary yAxis
                        lineWidth: 1,
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#000",
                            },
                        },
                        title: {
                            text: "Playback Count",
                            style: {
                                color: "#000",
                            },
                        },
                    },
                    {
                        //Secondary yAxis
                        title: {
                            text: "",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        opposite: false,
                    },
                ],
                tooltip: {
                    shared: true,
                },
                plotOptions: { borderWidth: 2, series: { point: {} } },
                series: [{
                    name: "Playback Count",
                    showInLegend: false,
                    color: "#01a451",
                    type: "column",
                    data: [],
                }, ],
            });
        });
    }



    var settings = {
        async: true,
        crossDomain: true,
        url: "/schoolwiseusercounttop20" + "/" + a + "/" + b + "/" + c,
        method: "GET",
    };
    $.ajax(settings).done(function(response) {
        var dataa = JSON.parse(response);
        console.log(dataa);
        $(function() {
            $("#container4").highcharts({
                chart: {
                    zoomType: "xy",
                    type: "column"
                },
                title: {
                    text: "Top 20 School User Count",
                },
                credits: {
                    enabled: false,
                },
                colors: ['#4F1FAF', '#462CEE', '#8AE02B', '#01A451'],
                xAxis: [{
                    categories: dataa.schname,
                    labels: {
                        style: {
                            fontSize: "8px",
                            rotation: 90,
                        },
                    }
                }, ],
                yAxis: [{
                        //Primary yAxis
                        lineWidth: 1,
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#000",
                            },
                        },
                        title: {
                            text: "User Count",
                            style: {
                                color: "#000",
                            },
                        },
                    },
                    {
                        //Secondary yAxis
                        title: {
                            text: "",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        opposite: false,
                    },
                ],
                tooltip: {
                    shared: true,
                },
                plotOptions: {
                    series: {
                        stacking: 'normal',
                    }
                },
                series: [{
                        name: 'Clever',
                        data: dataa.Clever,
                        stack: 0
                    },
                    {
                        name: 'Schoology',
                        data: dataa.Scoology,
                        stack: 0
                    }, {
                        name: 'Family',
                        fontSize: '8px',
                        data: dataa.Parents,
                        stack: 0

                    }, {
                        name: 'Teacher',
                        data: dataa.Teachers,
                        stack: 0
                    },
                    {
                        name: 'Engaged Users',
                        color: '#FF9933',
                        type: 'line',
                        data: dataa.active,
                        yAxis: 0,
                        //stack: 0
                    }
                ],
            });
        });
    });


    var settings = {
        async: true,
        crossDomain: true,
        url: "top20userspractisinginfo/" + a + "/2020-08-01/2021-07-31",
        method: "GET",
    };
    $.ajax(settings).done(function(response) {
        var dataa = JSON.parse(response);
        console.log(dataa);
        console.log(url);
        //console.log("/schoolwisepracticecounttop20" + "/" + a + "/" + b + "/" + c);
        $(function() {
            $("#container10").highcharts({
                chart: {
                    // zoomType: "xy",
                    type: "bar"
                },
                title: {
                    text: "Top 20 Champions in LSY",
                },
                credits: {
                    enabled: false,
                },
                colors: ['#4F1FAF', '#462CEE', '#8AE02B', '#01A451'],
                xAxis: [{
                    categories: dataa.schname,
                    labels: {
                        style: {
                            fontSize: "10px",
                            rotation: 90,
                        },
                    }
                }, ],
                yAxis: [{
                        //Primary yAxis
                        lineWidth: 1,
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#000",
                            },
                        },
                        title: {
                            text: "Playback Count",
                            style: {
                                color: "#000",
                            },
                        },
                    },
                    {
                        //Secondary yAxis
                        title: {
                            text: "",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        opposite: false,
                    },
                ],
                tooltip: {
                    shared: true,
                },
                plotOptions: {
                    series: {
                        stacking: 'normal',
                        //  pointWidth: 5
                    }
                },
                series: [{
                    name: "Playback Count",
                    showInLegend: false,
                    color: "#01a451",
                    type: "bar",
                    data: dataa.practicecount,
                }],
            });
        });
    });


    var settings = {
        async: true,
        crossDomain: true,
        url: "/districtsentimentdonut_csy" + "/" + a + "/" + b + "/" + c,
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
                text: 'Sentiment Percentage'
            },
            credits: {
                enabled: false,
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
        url: "/districtfeedbackrating_csy" + "/" + a + "/" + b + "/" + c,
        method: "GET",
    }
    $.ajax(settings).done(function(response) {
        var dataa = JSON.parse(response);
        console.log(dataa)
        Highcharts.chart('container38', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                height: 250,
                width: 235,
                type: 'pie',
                credits: {
                    enabled: false,
                },
            },
            title: {
                text: null
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>',
                valueDecimals: 0
            },
            accessibility: {
                point: {
                    valueSuffix: ''
                }
            },
            navigation: {
                buttonOptions: {
                    enabled: false
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
                name: 'Ratings',
                colorByPoint: true,
                data: [{
                        name: '1 Star',
                        y: dataa.donut.one,
                        // sliced: true,
                        // selected: true,
                        color: '#FF0000'
                    },
                    {
                        name: '2 Star',
                        y: dataa.donut.two,
                        color: '#DC143C'
                    },
                    {
                        name: '3 Star',
                        y: dataa.donut.three,
                        color: '#FF9933'
                    },
                    {
                        name: '4 Star',
                        y: dataa.donut.four,
                        color: '#05D36C'
                    },
                    {
                        name: '5 Star',
                        y: dataa.donut.five,
                        color: '#02A45A'
                    },
                ]
            }]
        });
    });

    var settings = {
        async: true,
        crossDomain: true,
        url: "/top20userspractisinginfo" + "/" + a + "/" + b + "/" + c,
        method: "GET",
        error: function() {
            zerochart2();
        }
    };
    $.ajax(settings).done(function(response) {
        var dataa = JSON.parse(response);
        console.log(dataa);
        $(function() {
            $("#container5").highcharts({
                chart: {
                    zoomType: "xy",
                    type: "column"
                },
                title: {
                    text: "Top 20 Champions in CSY",
                },
                colors: ['#4F1FAF', '#462CEE', '#8AE02B', '#01A451'],
                xAxis: [{
                    categories: dataa.schname,
                    labels: {
                        style: {
                            fontSize: "10px",
                            rotation: 90,
                        },
                    }
                }, ],
                yAxis: [{
                        //Primary yAxis
                        lineWidth: 1,
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#000",
                            },
                        },
                        title: {
                            text: "PLAYBACK COUNT",
                            style: {
                                color: "#000",
                            },
                        },
                    },
                    {
                        //Secondary yAxis
                        title: {
                            text: "",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        opposite: false,
                    },
                ],
                tooltip: {
                    shared: true,
                },
                plotOptions: { borderWidth: 2, series: { point: {} } },
                series: [{
                    name: "Playback Count",
                    showInLegend: false,
                    color: "#01a451",
                    type: "bar",
                    data: dataa.practicecount,
                }, ],
            });
        });
    });

    function zerochart2() {
        $(function() {
            $("#container5").highcharts({
                chart: {
                    zoomType: "xy",
                    type: "column"
                },
                title: {
                    text: "Top 20 Champions in CSY",
                },
                xAxis: [{
                    categories: [],
                    labels: {
                        style: {
                            fontSize: "10px",
                            rotation: 90,
                        },
                    }
                }, ],
                yAxis: [{
                        //Primary yAxis
                        lineWidth: 1,
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#000",
                            },
                        },
                        title: {
                            text: "PLAYBACK COUNT",
                            style: {
                                color: "#000",
                            },
                        },
                    },
                    {
                        //Secondary yAxis
                        title: {
                            text: "",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        opposite: false,
                    },
                ],
                tooltip: {
                    shared: true,
                },
                plotOptions: { borderWidth: 2, series: { point: {} } },
                series: [{
                    name: "Playback Count",
                    showInLegend: false,
                    color: "#01a451",
                    type: "bar",
                    data: [],
                }, ],
            });
        });
    }

    var settings = {
        async: true,
        crossDomain: true,
        url: "/schoolwisepracticecounttop20" + "/" + a + "/" + b + "/" + c,
        method: "GET",
    };
    $.ajax(settings).done(function(response) {
        var dataa = JSON.parse(response);
        console.log(dataa);
        $(function() {
            $("#container6").highcharts({
                chart: {
                    zoomType: "xy",
                    type: "column"
                },
                title: {
                    text: "Top 20 School Playback Count",
                },
                colors: ['#4F1FAF', '#462CEE', '#8AE02B', '#01A451'],
                xAxis: [{
                    categories: dataa.schname,
                    labels: {
                        style: {
                            fontSize: "10px",
                            rotation: 90,
                        },
                    }
                }, ],
                yAxis: [{
                        //Primary yAxis
                        lineWidth: 1,
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#000",
                            },
                        },
                        title: {
                            text: "PLAYBACK COUNT",
                            style: {
                                color: "#000",
                            },
                        },
                    },
                    {
                        //Secondary yAxis
                        title: {
                            text: "",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        labels: {
                            format: "{value}",
                            style: {
                                color: "#4572A7",
                            },
                        },
                        opposite: false,
                    },
                ],
                tooltip: {
                    shared: true,
                },
                plotOptions: {
                    borderWidth: 2,
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
                series: [{
                        name: 'Clever',
                        data: dataa.Clever
                    },
                    {
                        name: 'Schoology',
                        data: dataa.Scoology
                    }, {
                        name: 'Home',
                        fontSize: '8px',
                        data: dataa.Parents

                    }, {
                        name: 'Classroom',
                        data: dataa.Teachers
                    },
                ],
            });
        });
    });



    // var settings = {
    //   async: true,
    //   crossDomain: true,
    //   url: "/schoolwisefamilycount/5f2609807a1c0000950bb46d/2020-01-01/2021-02-17",
    //   method: "GET",
    // };
    // $.ajax(settings).done(function (response) {
    //   var dataa = JSON.parse(response);
    //   console.log(dataa);
    //   $(function () {
    //     $("#container7").highcharts({
    //       chart: {
    //         zoomType: "xy",
    // type: "column"
    //       },
    //       title: {
    //         text: "Family Count by School",
    //       },
    //       xAxis: [
    //         {
    //           categories: dataa.schname,
    //           labels: {
    //             style: {
    //               fontSize: "10px",
    //             },
    //           }
    //         },
    //       ],
    //       yAxis: [
    //         {
    //           //Primary yAxis
    //           lineWidth: 1,
    //           labels: {
    //             format: "{value}",
    //             style: {
    //               color: "#000",
    //             },
    //           },
    //           title: {
    //             text: "FAMILY COUNT",
    //             style: {
    //               color: "#000",
    //             },
    //           },
    //         },
    //         {
    //           //Secondary yAxis
    //           title: {
    //             text: "",
    //             style: {
    //               color: "#4572A7",
    //             },
    //           },
    //           labels: {
    //             format: "{value}",
    //             style: {
    //               color: "#4572A7",
    //             },
    //           },
    //           opposite: false,
    //         },
    //       ],
    //       tooltip: {
    //         shared: true,
    //       },
    //       plotOptions: { borderWidth: 2,
    //         series: {point: {

    //       }},
    //   column: {
    //       stacking: 'normal',
    //       dataLabels: {
    //           enabled: false
    //       }
    //   } },
    //       series: [
    //         {
    //           name: 'Clever',
    //           data: dataa.Clever
    //       },
    //       {
    //         name: 'Scoology',
    //         data: dataa.Scoology
    //       },{
    //             name: 'Home',
    //             fontSize:'8px',
    //             data: dataa.Parents

    //         }, {
    //             name: 'Classroom',
    //             data: dataa.Teachers
    //         },
    //       ],
    //     });
    //   });
    // });


    //   var settings = {
    //     async: true,
    //     crossDomain: true,
    //     url: "/schoolwisefamilypracticecount/5f2609807a1c0000950bb46d/2020-01-01/2021-02-17",
    //     method: "GET",
    //   };
    //   $.ajax(settings).done(function (response) {
    //     var dataa = JSON.parse(response);
    //     console.log(dataa);
    //     $(function () {
    //       $("#container8").highcharts({
    //         chart: {
    //           zoomType: "xy",
    // type: "column"
    //         },
    //         title: {
    //           text: "Family PLAYBACK COUNT by School",
    //         },
    //         xAxis: [
    //           {
    //             categories: dataa.schname,
    //           },
    //         ],
    //         yAxis: [
    //           {
    //             //Primary yAxis
    //             lineWidth: 1,
    //             labels: {
    //               format: "{value}",
    //               style: {
    //                 color: "#000",
    //               },
    //             },
    //             title: {
    //               text: "FAMILY PLAYBACK COUNT",
    //               style: {
    //                 color: "#000",
    //               },
    //             },
    //           },
    //           {
    //             //Secondary yAxis
    //             title: {
    //               text: "",
    //               style: {
    //                 color: "#4572A7",
    //               },
    //             },
    //             labels: {
    //               format: "{value}",
    //               style: {
    //                 color: "#4572A7",
    //               },
    //             },
    //             opposite: false,
    //           },
    //         ],
    //         tooltip: {
    //           shared: true,
    //         },
    //         plotOptions: { borderWidth: 2,
    //           series: {point: {

    //         }},
    //     column: {
    //         stacking: 'normal',
    //         dataLabels: {
    //             enabled: false
    //         }
    //     } },
    //         series: [
    //           {
    //             name: 'Clever',
    //             data: dataa.Clever
    //         },
    //         {
    //           name: 'Scoology',
    //           data: dataa.Scoology
    //         },{
    //               name: 'Home',
    //               fontSize:'8px',
    //               data: dataa.Parents

    //           }, {
    //               name: 'Classroom',
    //               data: dataa.Teachers
    //           },
    //         ],
    //       });
    //     });
    //   });



}

var modal = document.getElementById("myModal");

function cose() {
    modal.style.display = "none";
}

function createDynamic(url) {
    var settings = {
        async: true,
        crossDomain: true,
        url: url,
        method: "GET",
        success: function() {
            var gif = document.getElementById("gif");
            gif.style.display = "none";
        },
    };
    $.ajax(settings).done(function(response) {
        var data1 = JSON.parse(response);

        $("#next").prepend(
            '<table class="table table-striped custab table-fixed" id = "dataTable" ><thead ><tr><th>USER NAME</th><th>SCHOOL NAME</th><th>COUNRTY</th><th>STATE</th><th>CITY</th><th>PLAYBACK COUNT</th><th>CREATED DATE</th><th>LAST PLAYBACK DATE</th><th>SUBSCRIPTION EXPIRY</th><th>USER EMAIL</th></tr ></thead ><tbody>'
        );
        for (var i = 0; i < data1.data.length; i++) {
            var datain = data1.data[i];
            var resultDiv = createDynamicDiv(datain);

            $("#dataTable").append(resultDiv);
        }
        //$('#dataTable1').append('</tbody></table>');
        $("#dataTable").append("</tbody></table>");
        dataTab();

        $("#next1").prepend(
            '<table class="table table-striped custab table-fixed" id = "dataTable1" style="display:none" ><thead ><tr><th>USER NAME</th><th>SCHOOL NAME</th><th>COUNRTY</th><th>STATE</th><th>CITY</th><th>PLAYBACK COUNT</th><th>CREATED DATE</th><th>LAST PLAYBACK DATE</th><th>SUBSCRIPTION EXPIRY</th><th>USER EMAIL</th></tr ></thead ><tbody>'
        );
        for (var i = 0; i < data1.data.length; i++) {
            var datain = data1.data[i];

            var resultDiv = createDynamicDiv(datain);
            $("#dataTable1").append(resultDiv);
        }
        $("#dataTable1").append("</tbody></table>");
    });
}

function dataTab() {
    $("#dataTable").DataTable({
        pageLength: 50,
    });
}

function createDynamicDiv(userList) {
    var dynamicDiv = "";
    console.log(userList);

    dynamicDiv +=
        "<tr >" +
        "<td>" +
        userList[0] +
        "</td>" +
        "<td>" +
        userList[2] +
        "</td>" +
        "<td>" +
        userList[3] +
        "</td>" +
        "<td>" +
        userList[4] +
        "</td>" +
        "<td>" +
        userList[5] +
        "</td>" +
        "<td>" +
        userList[6] +
        "</td>" +
        "<td>" +
        userList[7] +
        "</td>" +
        "<td>" +
        userList[8] +
        "</td>" +
        "<td>" +
        userList[9] +
        "</td>" +
        "<td style='font-size: 10px;width: 20%;'>" +
        userList[1] +
        "</td>" +
        "</tr>";

    return dynamicDiv;
}


function createDynamic2(url) {
    var settings = {
        async: true,
        crossDomain: true,
        url: url,
        method: "GET",
        success: function() {
            var gif = document.getElementById("gif");
            gif.style.display = "none";
        },
    };
    $.ajax(settings).done(function(response) {
        var data1 = JSON.parse(response);

        $("#next").prepend(
            '<table class="table table-striped custab table-fixed" id = "dataTable" ><thead ><tr><th>SCHOOL NAME</th><th>COUNRTY</th><th>STATE</th><th>CITY</th><th>PLAYBACK COUNT</th><th>USER COUNT</th><th>CREATED DATE</th><th>LAST PLAYBACK DATE</th><th>CATEGORY</th><th>SUBSCRIPTION EXPIRY</th></tr ></thead ><tbody>'
        );
        for (var i = 0; i < data1.data.length; i++) {
            var datain = data1.data[i];
            var resultDiv = createDynamicDiv2(datain);

            $("#dataTable").append(resultDiv);
        }
        //$('#dataTable1').append('</tbody></table>');
        $("#dataTable").append("</tbody></table>");
        dataTab();

        $("#next1").prepend(
            '<table class="table table-striped custab table-fixed" id = "dataTable1" style="display:none" ><thead ><tr><th>SCHOOL NAME</th><th>COUNRTY</th><th>STATE</th><th>CITY</th><th>PLAYBACK COUNT</th><th>USER COUNT</th><th>CREATED DATE</th><th>LAST PLAYBACK DATE</th><th>CATEGORY</th><th>SUBSCRIPTION EXPIRY</th></tr ></thead ><tbody>'
        );
        for (var i = 0; i < data1.data.length; i++) {
            var datain = data1.data[i];

            var resultDiv = createDynamicDiv2(datain);
            $("#dataTable1").append(resultDiv);
        }
        $("#dataTable1").append("</tbody></table>");
    });
}

function dataTab() {
    $("#dataTable").DataTable({
        pageLength: 50,
    });
}

function createDynamicDiv2(userList) {
    var dynamicDiv = "";
    console.log(userList);

    dynamicDiv +=
        "<tr >" +
        "<td>" +
        userList[0] +
        "</td>" +
        "<td>" +
        userList[1] +
        "</td>" +
        "<td>" +
        userList[2] +
        "</td>" +
        "<td>" +
        userList[3] +
        "</td>" +
        "<td>" +
        userList[4] +
        "</td>" +
        "<td>" +
        userList[5] +
        "</td>" +
        "<td>" +
        userList[6] +
        "</td>" +
        "<td>" +
        userList[7] +
        "</td>" +
        "<td>" +
        userList[8] +
        "</td>" +
        "<td>" +
        userList[9] +
        "</td>" +

        "</tr>";

    return dynamicDiv;
}







function hi() {
    $("#myDiv2").empty();
}

function cards(URL) {
    let textContent = document.getElementById('disdetails').innerText;
    var c = document.getElementById("stardate").innerText;
    var b = document.getElementById("finaldate").innerText;
    var a = URL + textContent + "/" + c + "/" + b;
    $('#next').empty();
    console.log(a);
    var modal2 = document.getElementById("myModal2");
    modal2.style.display = "block";
    $("#gif").append("<img style='width: 7%;margin-left: 45.2%;height:65px !important;' src='/static/images/loading.gif'><div><p style=' text-align: center;margin-top:5px;'>Please wait while we fetch your data.</p></div>");
    var gif = document.getElementById("gif");
    gif.style.display = "block";
    $('#btnExport').show();
    createDynamic(a);
}

function cards2(URL) {
    let textContent = document.getElementById('disdetails').innerText;
    var c = document.getElementById("stardate").innerText;
    var b = document.getElementById("finaldate").innerText;
    var a = URL + textContent + "/" + c + "/" + b;
    $('#next').empty();
    console.log(a);
    var modal2 = document.getElementById("myModal2");
    modal2.style.display = "block";
    $("#gif").append("<img style='width: 7%;margin-left: 45.2%;height:65px !important;' src='/static/images/loading.gif'><div><p style=' text-align: center;margin-top:5px;'>Please wait while we fetch your data.</p></div>");
    var gif = document.getElementById("gif");
    gif.style.display = "block";
    $('#btnExport').show();
    createDynamic2(a);
}
//distselect('123');
$("#disdetails").text('5f2609807a1c0000950bb477');

function dateSub() {
    var c = document.getElementById("disdetails").innerText;
    distselect(c);
}

function distselect(distid) {
    var a = document.getElementById("stardate").innerText;
    var b = document.getElementById("finaldate").innerText;
    $("#districtid").empty();
    $("#school").empty();
    $("#MINDFUL_MINUTES").empty();
    $("#avgrating").empty();
    $("#engaged_school_csy").empty();
    $("#engaged_school_lsy").empty();
    $("#engd_parent_csy").empty();
    $("#engd_parent_lsy").empty();
    $("#engd_teacher_csy").empty();
    $("#engd_teacher_lsy").empty();
    $("#parentspracticecount").empty();
    $("#practicecount").empty();
    $("#MINDFUL_MINUTES_Teacher").empty();
    $("#MINDFUL_MINUTES_parent").empty();
    $("#teacher").empty();
    $("#login").empty();
    $("#practice").empty();
    $("#family").empty();
    $("#myDiv").empty();
    $("#myDiv2").empty();
    $("#disdetails").text(distid);
    $("#gifload").empty();
    $("#gifload").append("<img style='width: 7%;margin-left: 45.2%;' src='/static/images/loading.gif'><div><p style=' text-align: center;margin-top:5px;'>Please wait while we fetch your data.</p></div>");
    var c = document.getElementById("disdetails").innerText;
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    console.log(c)
    cardcount(c, a, b);
    charts(c, a, b);
    // bubble(c);
    // bubble2(c);
    idtype(c, a, b);
}
$("#heat").val(4);

function idtype(a) {
    var c = document.getElementById("stardate").innerText;
    var b = document.getElementById("finaldate").innerText;
    $('#heat-map').empty()
    var type = "districtheatmappractice/" + a + "/" + c + "/" + b;
    heatnew(type);
    $('#chartname').text("Overall District Playback Heat Map")
}

function cardcount(id, a, b) {
    URL = "/districtcardsinfo/" + id + "/" + a + "/" + b;
    var settings = {
        async: true,
        crossDomain: true,
        url: URL,
        method: "GET",
    };
    $.ajax(settings).done(function(response) {
        var dataa = JSON.parse(response);
        console.log("counts are fnctioning");
        $("#gifload").empty();
        $("#school").empty()
        $("#teacher").empty()
        $("#MINDFUL_MINUTES").empty()
        $("#engaged_school_csy").empty();
        $("#engaged_school_lsy").empty();
        $("#engd_parent_csy").empty();
        $("#engd_parent_lsy").empty();
        $("#engd_teacher_csy").empty();
        $("#engd_teacher_lsy").empty();
        $("#practicecount").empty();
        $("#parentspracticecount").empty();
        $("#login").empty()
        $("#practice").empty()
        $("#school").text(dataa.schoolcount);
        $("#teacher").text(dataa.teachercount);
        $("#MINDFUL_MINUTES_parent").text(dataa.MINDFUL_MINUTES_parent);
        $("#MINDFUL_MINUTES_Teacher").text(dataa.MINDFUL_MINUTES_Teacher);
        $("#engaged_school_csy").text(dataa.engaged_school_csy);
        $("#engaged_school_lsy").text(dataa.engaged_school_lsy);
        $("#engd_parent_csy").text(dataa.engd_parent_csy);
        $("#engd_parent_lsy").text(dataa.engd_parent_lsy);
        $("#engd_teacher_csy").text(dataa.engd_teacher_csy);
        $("#engd_teacher_lsy").text(dataa.engd_teacher_lsy);
        $("#practicecount").text(dataa.practicecount);
        $("#avgrating").text(dataa.rating);
        $("#parentspracticecount").text(dataa.parentspracticecount);
        $("#login").text(dataa.logincount);
        $("#practice").text(dataa.teacherpracticecount);
        $("#districtid").text(dataa.district);
        $("#family").text(dataa.familycount);
        $("#MINDFUL_MINUTES").text(parseFloat(dataa.MINDFUL_MINUTES).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#parentspractice").text(dataa.parentspracticecount);

        if (dataa.partnercategory == 'Skillman') {
            $("#districtid").text(dataa.partnercategory);
        } else {
            $("#districtid").text(dataa.category);
        }

    });
}

function heatnew(b) {
    console.log(b);
    var min, max, colorScale, temps, tempsArr;
    var colors = ["#EFF7F2", "#DBEEE1", "#B3DFC1", "#8ECAA0", "#76C28D", "#65B87E", "#52AB6D", "#42A862", "#329B52", "#278845"]
    var months = ["", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    var table, thead, tbody, rows, headCells, cells;
    var ur = "/" + b;
    console.log(ur);
    var data = d3.json(ur, function(error, data) {

        temps = data.meanTemp;
        tempsArr = createTempArr(temps);
        initScale();
        initTable();
        addTopHeader();
        addRows();
        setColorTransition();

        addLegend();
    });

    function initTable() {
        table = d3.select('#heat-map').append('table');
        table.append("caption")
            .html("");
        thead = table.append('thead');
        tbody = table.append('tbody');
    }

    function initScale() {
        min = d3.min(d3.values(temps), function(d) { return d3.min(d); });
        max = d3.max(d3.values(temps), function(d) { return d3.max(d); });
        colorScale = d3.scaleQuantile()
            .domain([min, max])
            .range(colors);
    }

    function addTopHeader() {
        //make top heading
        thead.append('tr')
            .selectAll('th')
            .data(months)
            .enter()
            .append("th")
            .text(function(d) { return d; });
    }

    function addRows() {
        // create a row for each object in the data
        rows = tbody.selectAll('tr')
            .data(tempsArr).enter()
            .append('tr');

        // create vertical heading (first col of each row)
        headCells = rows.append('th')
            .text(function(d) { return d.year; });

        //create a data cell for each monthly tempature
        cells = rows.selectAll('td')
            .data(function(row, i) {
                return row.temps;
            })
            .enter()
            .append('td')
            .text(function(d) { return d; })
            .style("background-color", colors[0]);
    }

    function createTempArr() {
        var tempsArr = [];
        for (var k in temps) {
            if (temps.hasOwnProperty(k)) {
                tempsArr.push({ year: k, temps: temps[k] });
            }
        }
        return tempsArr;
    }

    function setColorTransition() {
        cells.transition()
            .duration(1000)
            .style("background-color", function(d) { return colorScale(d); });
    }

    function addLegend() {
        var rangeValues = [min];
        rangeValues = rangeValues.concat(colorScale.quantiles());

        var legend = d3.select('caption').append('div');
        legend.attr("class", "legend");

        var colorSq = legend.append("div");

        colorSq.selectAll("div")
            .data(rangeValues).enter()
            .append("div")
            .attr("class", "color-square")
            .style("background-color", function(d, i) { return colors[i]; });
        //.text(function(d) { return "≥ " + Math.round(d); }); //add range

        var labels = legend.append("div");
        labels.append("div")
            .attr("class", "align-left")
            .text("");

        labels.append("div")
            .attr("class", "align-right")
            .text("");

    }
}

$('#heat').change(function() {
    var c = document.getElementById("stardate").innerText;
    var b = document.getElementById("finaldate").innerText;
    if (this.value == '1') {
        $('#heat-map').empty()
        let textContent = document.getElementById('disdetails').innerText;
        var type = "districtheatmap/" + textContent;

        heatnew(type);
        $('#chartname').text("Overall Active User Count")
    } else if (this.value == '2') {
        $('#heat-map').empty()
        let textContent = document.getElementById('disdetails').innerText;
        var type = "familydistrictheatmap/" + textContent + "/" + c + "/" + b;
        heatnew(type);
        $('#chartname').text("Family Active User Count")
    } else if (this.value == '3') {
        $('#heat-map').empty()
        let textContent = document.getElementById('disdetails').innerText;
        var type = "teachersdistrictheatmap/" + textContent + "/" + c + "/" + b;
        heatnew(type);
        $('#chartname').text("Teachers Active User Count")
    } else if (this.value == '4') {
        $('#heat-map').empty()
        let textContent = document.getElementById('disdetails').innerText;
        var type = "districtheatmappractice/" + textContent + "/" + c + "/" + b;
        heatnew(type);
        $('#chartname').text("Overall District Playback Heat Map")
    } else if (this.value == '5') {
        $('#heat-map').empty()
        let textContent = document.getElementById('disdetails').innerText;
        var type = "districtheatmappracteacher/" + textContent + "/" + c + "/" + b;
        heatnew(type);
        $('#chartname').text("Teacher Wise Playback Heat Map")
    } else if (this.value == '6') {
        $('#heat-map').empty()
        let textContent = document.getElementById('disdetails').innerText;
        var type = "districtheatmappracfamily/" + textContent + "/" + c + "/" + b;
        heatnew(type);
        $('#chartname').text("Family Wise Playback Heat Map")
    }
})

function takeid() {
    var a = document.getElementById("disid").textContent;
    console.log(a);
}

function modal2() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}


Plotly.d3.csv('https://raw.githubusercontent.com/Ash0077/i3os/master/sarasota_29_jan.csv', function(err, data) {
    // Create a lookup table to sort and regroup the columns of data,

    // first by MONTH, then by USER_COUNT:
    var lookup = {};

    function getData(MONTH, USER_COUNT) {
        var byMONTH, trace;
        if (!(byMONTH = lookup[MONTH])) {;
            byMONTH = lookup[MONTH] = {};
        }
        // If a container for this MONTH + USER_COUNT doesn't exist yet,
        // then create one:
        if (!(trace = byMONTH[USER_COUNT])) {
            trace = byMONTH[USER_COUNT] = {
                x: [],
                y: [],
                id: [],
                text: [],
                marker: {
                    size: [],
                    color: []
                }
            };
        }
        return trace;
    }

    // Go through each row, get the right trace, and append the data:
    for (var i = 0; i < data.length; i++) {
        var datum = data[i];
        var trace = getData(datum.MONTH, datum.USER_COUNT);
        trace.text.push(datum.DISTRICT_NAME);
        // trace.color.push(datum.DISTRICT_NAME);
        trace.id.push(datum.DISTRICT_NAME);
        trace.x.push(datum.USER_ENGAGEMENT);
        trace.y.push(datum.FAMILY_ENGAGEMENT);
        trace.marker.size.push(datum.PRACTICE);
        trace.marker.color.push(datum.USER_COUNT);
    }

    // Get the group names:
    var MONTHs = Object.keys(lookup);
    // In this case, every MONTH includes every USER_COUNT, so we
    // can just infer the USER_COUNTs from the *first* MONTH:
    // var min1 = Math.min.apply(null, color);
    // max1 = Math.max.apply(null, color);

    var firstMONTH = lookup[MONTHs[0]];
    var USER_COUNTs = Object.keys(firstMONTH);

    // Create the main traces, one for each USER_COUNT:
    var traces = [];
    for (i = 0; i < USER_COUNTs.length; i++) {
        var data = firstMONTH[USER_COUNTs[i]];
        // One small note. We're creating a single trace here, to which
        // the frames will pass data for the different MONTHs. It's
        // subtle, but to avoid data reference problems, we'll slice 
        // the arrays to ensure we never write any new data into our
        // lookup table:
        traces.push({
            name: USER_COUNTs[i],
            x: data.x.slice(),
            y: data.y.slice(),
            id: data.id.slice(),
            text: data.text.slice(),
            type: "scatter",
            mode: "markers",
            // mode: 'markers',
            marker: {
                size: data.marker.size.slice(),
                color: data.marker.color.slice(),

                sizemode: 'area',
                showscale: true,
                sizeref: 20,
                cmin: 0,
                cmax: 400,
                colorscale: [
                    [0.0, "rgb(165,0,38)"],
                    [0.1111111111111111, "rgb(215,48,39)"],
                    [0.2222222222222222, "rgb(244,109,67)"],
                    [0.3333333333333333, "rgb(255,255,0)"],
                    [0.4444444444444444, "rgb(255,255,0)"],
                    [0.5555555555555556, "rgb(255,255,0)"],
                    [0.6666666666666666, "rgb(144,238,144)"],
                    [0.7777777777777778, "rgb(34,139,34)"],
                    [0.8888888888888888, "rgb(34,139,34)"],
                    [1.0, "rgb(34,139,34)"]
                ],
                colorbar: {
                    thickness: 20,


                    title: 'USER COUNT',
                    titleside: 'bottom',
                    outlinewidth: 0.5,

                    tickfont: {
                        family: 'Helvetica Neue',
                        size: 14,
                        // color: 'green'
                    }

                }
            }
        });
    }

    // Create a frame for each MONTH. Frames are effectively just
    // traces, except they don't need to contain the *full* trace
    // definition (for example, appearance). The frames just need
    // the parts the traces that change (here, the data).
    var frames = [];
    for (i = 0; i < MONTHs.length; i++) {
        frames.push({
            name: MONTHs[i],
            data: USER_COUNTs.map(function(USER_COUNT) {
                return getData(MONTHs[i], USER_COUNT);
            })
        })
    }

    // Now create slider steps, one for each frame. The slider
    // executes a plotly.js API command (here, Plotly.animate).
    // In this example, we'll animate to one of the named frames
    // created in the above loop.
    var sliderSteps = [];
    for (i = 0; i < MONTHs.length; i++) {
        sliderSteps.push({
            method: 'animate',
            label: MONTHs[i],
            args: [
                [MONTHs[i]], {
                    mode: 'immediate',
                    transition: { duration: 300 },
                    frame: { duration: 300, redraw: false },
                }
            ]
        });
    }

    var layout = {
        xaxis: {
            title: 'USER ENGAGEMENT',
            range: [-30, 110]
        },
        yaxis: {
            title: 'FAMILY ENGAGEMENT',
            range: [-30, 110]
        },
        hovermode: 'closest',
        showlegend: false,
        // We'll use updatemenus (whose functionality includes menus as
        // well as buttons) to create a play button and a pause button.
        // The play button works by passing `null`, which indicates that
        // Plotly should animate all frames. The pause button works by
        // passing `[null]`, which indicates we'd like to interrupt any
        // currently running animations with a new list of frames. Here
        // The new list of frames is empty, so it halts the animation.
        updatemenus: [{
            x: 0,
            y: 0,
            yanchor: 'top',
            xanchor: 'left',
            showactive: false,
            direction: 'left',
            type: 'buttons',
            pad: { t: 87, r: 10 },
            buttons: [{
                method: 'animate',
                args: [null, {
                    mode: 'immediate',
                    fromcurrent: true,
                    transition: { duration: 300 },
                    frame: { duration: 500, redraw: false }
                }],
                label: 'Play'
            }, {
                method: 'animate',
                args: [
                    [null], {
                        mode: 'immediate',
                        transition: { duration: 0 },
                        frame: { duration: 0, redraw: false }
                    }
                ],
                label: 'Pause'
            }]
        }],
        // Finally, add the slider and use `pad` to position it
        // nicely next to the buttons.
        sliders: [{
            pad: { l: 130, t: 55 },
            currentvalue: {
                visible: true,
                prefix: 'MONTH:',
                xanchor: 'right',
                font: { size: 20, color: '#666' }
            },
            steps: sliderSteps
        }]
    };

    // Create the plot:
    Plotly.plot('myDiv2', {
        data: traces,
        layout: layout,
        config: { showSendToCloud: true },
        frames: frames,
    });
});





$(function() {
    $("#datepicker").datepicker(

        {
            changeMonth: true,
            changeYear: true,
            yearRange: "2015:2021",
            dateFormat: "yy-mm-dd",
            onSelect: function(dateText, inst) {
                $("#stardate").text(dateText);
            }
        });
    $("#datepicker").datepicker("setDate",
        new Date(2021, 07, 01), )
});

$(function() {
    $("#datepicker2").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "2015:2021",
        dateFormat: "yy-mm-dd",
        maxDate: new Date(),
        onSelect: function(dateText, inst) {
            $("#finaldate").text(dateText);
        }
    });
    var d = new Date();
    var currMonth = d.getMonth();
    var currYear = d.getFullYear();
    var currDate = d.getDate();
    var startDate = new Date(currYear, currMonth, currDate);
    $("#datepicker2").datepicker("setDate", startDate);
});


// function sub (){
//   var a = document.getElementById("stardate").innerText;
//   var b = document.getElementById("finaldate").innerText;
//   charts(a,b);
//   cardscount(a,b);
//   $("#fromd").text(a);
//   $("#tod").text(a);
// }