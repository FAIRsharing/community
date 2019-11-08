<template>
    <div class="container-fluid mainContainer">
        <div class="row">
            <div class="col-12">
            </div>
            <div class="col-12">
                <highcharts :constructor-type="'ganttChart'" :options="chartOptions"></highcharts>
            </div>
        </div>
    </div>
</template>

<script>
    import StudyDesign from './minimal_study.json'
    import {Chart} from 'highcharts-vue'
    import Highcharts from 'highcharts'

    let customColors = ['#e67e22', '#27aae1', '#359154'];
    Highcharts.setOptions({
        colors: customColors
    });

    let day = 1000 * 60 * 60 * 24;

    export default {
        name: "Datascriptor.vue",
        components: {
            highcharts: Chart,
        },
        data() {
            return {
                nodes: StudyDesign,
                chartOptions:  {

                    chart: {
                        spacingLeft: 1,
                        colors: ['#e67e22', '#27aae1', '#359154'],
                        height: 400
                    },

                    connectors: {
                        lineWidth: 2,
                        endMarker: {
                            radius: 5
                        },
                        startMarker: {
                            radius: 5
                        }
                    },

                    title: {
                        text: 'Interactive Gantt Chart'
                    },

                    subtitle: {
                        text: 'Drag and drop points to edit'
                    },

                    plotOptions: {
                        series: {
                            animation: false, // Do not animate dependency connectors
                            dragDrop: {
                                draggableX: true,
                                draggableY: true,
                                dragMinY: 0,
                                dragMaxY: 2,
                                dragPrecisionX: day / 3 // Snap to eight hours
                            },
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}',
                                style: {
                                    cursor: 'default',
                                    pointerEvents: 'none'
                                }
                            },
                            allowPointSelect: true
                        }
                    },

                    yAxis: {
                        categories: [
                            'Branch 1', 'Events',
                            'Branch 2', "Events"],
                        min: 0,
                        type: 'category',
                        grid: {
                            columns: [{
                                categories: [
                                    'Branch 1', 'Events',
                                    'Branch 2', "Events"]
                            }]
                        }
                    },

                    xAxis: [{
                        tickInterval: 7*day,
                        type: 'category',
                        gridLineWidth: 1
                    }],

                    tooltip: {
                        xDateFormat: '%a %b %d, %H:%M'
                    },

                    series: [
                        {
                            name: 'Branch 1',
                            data: [

                                /* Epoch */
                                {
                                    start: day,
                                    end: 6 * day,
                                    name: 'Screem',
                                    id: 'screem',
                                    y: 0,
                                    color: '#e67e22'
                                },
                                {
                                    start: 7*day,
                                    milestone: true,
                                    name: 'First Treatment',
                                    id: 'treatment_1',
                                    dependency: 'screem',
                                    y: 0,
                                    color: '#27aae1'
                                },
                                {
                                    start: 8 * day,
                                    milestone: true,
                                    name: 'Surgical treatment',
                                    id: 'Surgical_treatment',
                                    y: 0,
                                    dependency: 'treatment_1',
                                    color: '#359154'
                                },
                                {
                                    start: 9 * day,
                                    end: 15 * day,
                                    name: 'Follow-up',
                                    id: 'follow_up',
                                    dependency: 'treatment_1',
                                    y: 0,
                                    color: 'red'
                                },

                                /* Events */
                                {
                                    start: 8 * day,
                                    end: 9 * day,
                                    name: 'Sampling',
                                    id: 'Sampling_2',
                                    dependency: 'Surgical_treatment',
                                    y: 1,
                                    color: '#359154'
                                },
                                {
                                    start: 7 * day,
                                    end: 7 * day,
                                    milestone: true,
                                    name: 'Sampling',
                                    id: 'Sampling_1',
                                    dependency: 'treatment_1',
                                    y: 1,
                                    color: '#27aae1'
                                }
                            ]
                        }
                    ],
                }
            }
        },
        filters: {
            jsonDump: function(variable){
                return JSON.stringify(variable, null, 4)
            }
        }
    }

</script>

<style scoped>

    .mainContainer {
        padding:20px;
        border:1px solid #ccc;
        box-shadow: 3px 3px 4px #ccc;
    }

</style>