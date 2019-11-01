<template>
    <div>
        <p>
            FAIRsharing is not just a registry. The team behind FAIRsharing is involved in a number of
            FAIR-enabling activities, delivering guidance, tools and services with and for a variety of stakeholders.
            As these activities mature, we will implement them in, or connect them to, the FAIRsharing resource itself. <br>
            Some of these activities are part of funded projects andas part of national or international consortia,
            while others are volunteer efforts that fall under a variety of umbrella organisations, e.g. working groups
            (WG) and learned societies.<br>
            Our activities, classified using the three GO-FAIR pillar structures (change, build, train), are outlined here.
        </p>

        <highcharts :options="chartOptions" class="shadowBox chartMin"></highcharts>
    </div>
</template>

<script>
    import {Chart} from 'highcharts-vue'

    export default {
        name: "Activity",
        components: {
            highcharts: Chart,
        },
        data() {
            return {
                chartOptions: {
                    chart: {
                        plotBackgroundColor: '#f8f8f8',
                        plotBorderWidth: 0,
                        plotShadow: true,
                        renderTo: 'container',
                        margin: 0
                    },
                    title: {
                        text: 'FAIRsharing<br></br>activities',
                        align: 'center',
                        verticalAlign: 'top',
                        y: 30
                    },
                    credits: {
                        enabled: false
                    },
                    tooltip: {
                        formatter: function() {
                            let point = this.point,
                                series = this.series,
                                pointIndex = point.index,
                                text,
                                additionalValue;

                            text = '<span style="color:' +
                                this.color + '">\u25CF</span> ' +
                                series.name +
                                ': <b>' +
                                this.y + '%' +
                                '</b><br/>';

                            additionalValue =
                                series.userOptions.data[pointIndex][2];

                            text += '<hr>';

                            for (let val in additionalValue){
                                let index = parseInt(val)+1;
                                text += '<br>' + index + '. ' + additionalValue[val]
                            }

                            return text;
                        }
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: 'white'
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%'],
                            size: '100%',
                            showInLegend: true
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Activities',
                        innerSize: '50%',
                        data: [
                            ['CHANGE', 33.3, [
                                "FAIR maturity indicators, metrics and models",
                                "Cross-publishers common criteria for repository selection",
                                "Journal data policies and the TOP guidelines",
                                "Standardized templates for journal data policies"
                            ]],
                            ['BUILD', 50.00, [
                                "Domain and subject terminologies for data classification",
                                "Future-proofing the FAIRsharing technical architecture ",
                                "FAIR assessment tools",
                                "Connecting FAIRsharing to data stewardship and data management plans tools",
                                "Data FAIRification",
                                "Metadata standards for machines"
                            ]],
                            ['TRAIN', 16.7, [
                                "Guidance to stakeholders",
                                "FAIR competencies and curricula"
                            ]],
                        ]
                    }]
                }
            }
        }
    }
</script>

<style scoped>

</style>