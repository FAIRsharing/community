<template>
    <div>
        <div class="mainContainer">
            <highcharts :constructor-type="'ganttChart'" :options="chart"></highcharts>
        </div>
    </div>
</template>

<script>
    import StudyDesign from './minimal_study.json'
    import {Chart} from 'highcharts-vue'
    import JsonTest from './data.json'

    /*let customColors = ['#e67e22', '#27aae1', '#359154'];
    Highcharts.setOptions({
        colors: customColors
    });*/

    let day = 1000 * 60 * 60 * 24;

    export default {
        name: "Datascriptor.vue",
        components: {
            highcharts: Chart,
        },
        data() {
            return {
                json: JsonTest,
                nodes: StudyDesign,
                chartOptions:  {

                    chart: {
                        spacingLeft: 1,
                        colors: ['#e67e22', '#27aae1', '#359154'],
                        height: 300
                    },

                    exporting: {
                        sourceWidth: 2100
                    },

                    connectors: {
                        lineWidth: 2,
                        endMarker: {
                            radius: 5
                        },
                        startMarker: {
                            radius: 5,
                            enabled: false
                        }
                    },

                    title: {
                        text: 'Study Design Chart'
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
                            'Arm 1', 'Events',
                            'Arm 2', 'Events',
                            'Arm 3', 'Events',
                            'Arm 4', 'Events'
                        ],
                        type: 'category',
                        gridLineWidth: 0
                    },

                    xAxis: [
                        {
                            tickInterval: 1,
                            type: 'category',
                            gridLineWidth: 1,
                            max: 26.5*day,
                            labels: {
                                enabled: false
                            },
                            tickAmount: 0,
                            plotLines: [
                                {
                                    color: 'rgba(0,0,0, 0.4)', // Color value
                                    dashStyle: 'solid', // Style of the plot line. Default to solid
                                    value: 6.2*day, // Value of where the line will appear
                                    width: 2, // Width of the line
                                    zIndex: 10
                                },
                                {
                                    color: 'rgba(0,0,0, 0.4)', // Color value
                                    dashStyle: 'solid', // Style of the plot line. Default to solid
                                    value: 11.7 * day, // Value of where the line will appear
                                    width: 2, // Width of the line
                                    zIndex: 10
                                },
                                {
                                    color: 'rgba(0,0,0, 0.4)', // Color value
                                    dashStyle: 'solid', // Style of the plot line. Default to solid
                                    value: 14.7*day, // Value of where the line will appear
                                    width: 2, // Width of the line
                                    zIndex: 10
                                },
                                {
                                    color: 'rgba(0,0,0, 0.4)', // Color value
                                    dashStyle: 'solid', // Style of the plot line. Default to solid
                                    value: 21*day, // Value of where the line will appear
                                    width: 2, // Width of the line
                                    zIndex: 10
                                }
                            ],
                            plotBands: [
                                {
                                    from: 0,
                                    to: 6.2 * day,
                                    color: 'rgba(230, 126, 34, 0.2)', // Color value,
                                    label: {
                                        text: 'Epoch 0',
                                        verticalAlign: 'top',
                                        y: -10
                                    }
                                },
                                {
                                    from: 6.2 * day,
                                    to: 11.7 * day,
                                    color: 'rgba(39, 170, 225, 0.2)', // Color value,
                                    label: {
                                        text: 'Epoch 1',
                                        verticalAlign: 'top',
                                        y: -10
                                    }
                                },
                                {
                                    from: 11.7 * day,
                                    to: 14.7 * day,
                                    color: 'rgba(53, 145, 84, 0.2)', // Color value,
                                    label: {
                                        text: 'Epoch 2',
                                        verticalAlign: 'top',
                                        y: -10
                                    }
                                },
                                {
                                    from: 14.7 * day,
                                    to: 21 * day,
                                    color: 'rgba(255, 0, 0, 0.2)', // Color value,
                                    label: {
                                        text: 'Epoch 3',
                                        verticalAlign: 'top',
                                        y: -10
                                    }
                                },
                                {
                                    from: 21 * day,
                                    to: 30 * day,
                                    color: 'rgba(230, 126, 34, 0.2)', // Color value,
                                    label: {
                                        text: 'Epoch 4',
                                        verticalAlign: 'top',
                                        y: -10
                                    }
                                }
                            ]
                        }
                    ],

                    tooltip: {
                        xDateFormat: '%a %b %d, %H:%M'
                    },

                    series: [
                        {
                            name: 'Arm 1',
                            type: 'gantt',
                            data: [

                                /**** Epoch ****/

                                /* SCREEM always in position 0*/
                                {
                                    start: day,
                                    end: 6 * day,
                                    name: 'Screem',
                                    id: 'arm_1_screem',
                                    y: 0,
                                    color: '#e67e22'
                                },
                                {
                                    start: 7*day,
                                    milestone: true,
                                    name: 'First Treatment',
                                    id: 'arm_1_treatment_1',
                                    dependency: 'arm_1_screem',
                                    y: 0,
                                    color: '#27aae1',
                                    parent: 'screem',
                                },
                                {
                                    start: 13 * day,
                                    milestone: true,
                                    name: 'Surgical treatment',
                                    id: 'Surgical_treatment',
                                    y: 0,
                                    dependency: 'arm_1_treatment_1',
                                    color: '#359154',
                                    parent: 'screem',
                                },
                                {
                                    start: 14.9 * day,
                                    end: 20.9 * day,
                                    name: 'Second treatment',
                                    id: 'arm_1_treatment_2',
                                    dependency: 'Surgical_treatment',
                                    y: 0,
                                    color: 'red',
                                },
                                {
                                    start: 21.3 * day,
                                    end: 26.3 * day,
                                    name: 'Follow Up',
                                    id: 'arm_1_follow_up',
                                    dependency: 'arm_1_treatment_2',
                                    y: 0,
                                    color: '#e67e22',
                                },

                                /* Events */
                                {
                                    start: 13 * day,
                                    end: 14 * day,
                                    name: 'Sampling (liver)',
                                    id: 'Sampling_2',
                                    dependency: 'Surgical_treatment',
                                    y: 1,
                                    color: '#359154',
                                    parent: 'screem',
                                },
                                {
                                    start: 7 * day,
                                    end: 8 * day,
                                    name: 'Sampling (blood)',
                                    id: 'arm_1_sampling_1',
                                    dependency: 'arm_1_treatment_1',
                                    y: 1,
                                    color: '#27aae1',
                                },
                                {
                                    start: 8.2 * day,
                                    end: 9.2 * day,
                                    name: 'DNA extraction',
                                    id: 'arm_1_DNA_extraction_1',
                                    dependency: 'arm_1_sampling_1',
                                    y: 1,
                                    color: '#27aae1',
                                },
                                {
                                    start: 9.3 * day,
                                    end: 10.3 * day,
                                    name: 'Whole Genome <br>Sequencing',
                                    id: 'arm_1_Whole_Genome_Sequencing',
                                    dependency: 'arm_1_DNA_extraction_1',
                                    y: 1,
                                    color: '#27aae1',
                                },
                                {
                                    start: 10.5 * day,
                                    end: 11.5 * day,
                                    name: 'Variant calling',
                                    id: 'arm_1_Variant_calling',
                                    dependency: 'arm_1_Whole_Genome_Sequencing',
                                    y: 1,
                                    color: '#27aae1',
                                }
                            ]
                        }
                    ],
                },
                chart:  {

                    chart: {
                        spacingLeft: 1,
                        colors: ['#e67e22', '#27aae1', '#359154'],
                        height: 700
                    },

                    exporting: {
                        sourceWidth: 2100
                    },

                    connectors: {
                        lineWidth: 2,
                        endMarker: {
                            radius: 5
                        },
                        startMarker: {
                            radius: 5,
                            enabled: false
                        }
                    },

                    title: {
                        text: 'Study Design Chart'
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
                            'Arm 1', 'Events',
                            'Assay Plan', 'Assay Plan',
                            'Assay Plan', 'Assay Plan',
                            'Assay Plan', 'Assay Plan'
                        ],
                        type: 'category',
                        gridLineWidth: 1
                    },

                    xAxis: [
                        {
                            tickInterval: 1000,
                            type: 'category',
                            gridLineWidth: 0,
                            max: 30,
                            labels: {
                                enabled: false
                            },
                            tickAmount: 0,
                            /*
                            plotLines: [
                                {
                                    color: 'rgba(0,0,0, 0.4)', // Color value
                                    dashStyle: 'solid', // Style of the plot line. Default to solid
                                    value: 6.2*day, // Value of where the line will appear
                                    width: 2, // Width of the line
                                    zIndex: 10
                                },
                                {
                                    color: 'rgba(0,0,0, 0.4)', // Color value
                                    dashStyle: 'solid', // Style of the plot line. Default to solid
                                    value: 11.7 * day, // Value of where the line will appear
                                    width: 2, // Width of the line
                                    zIndex: 10
                                },
                                {
                                    color: 'rgba(0,0,0, 0.4)', // Color value
                                    dashStyle: 'solid', // Style of the plot line. Default to solid
                                    value: 14.7*day, // Value of where the line will appear
                                    width: 2, // Width of the line
                                    zIndex: 10
                                },
                                {
                                    color: 'rgba(0,0,0, 0.4)', // Color value
                                    dashStyle: 'solid', // Style of the plot line. Default to solid
                                    value: 21*day, // Value of where the line will appear
                                    width: 2, // Width of the line
                                    zIndex: 10
                                }
                            ],
                            plotBands: [
                                {
                                    from: 0,
                                    to: 6.2 * day,
                                    color: 'rgba(230, 126, 34, 0.2)', // Color value,
                                    label: {
                                        text: 'Epoch 0',
                                        verticalAlign: 'top',
                                        y: -10
                                    }
                                },
                                {
                                    from: 6.2 * day,
                                    to: 11.7 * day,
                                    color: 'rgba(39, 170, 225, 0.2)', // Color value,
                                    label: {
                                        text: 'Epoch 1',
                                        verticalAlign: 'top',
                                        y: -10
                                    }
                                },
                                {
                                    from: 11.7 * day,
                                    to: 14.7 * day,
                                    color: 'rgba(53, 145, 84, 0.2)', // Color value,
                                    label: {
                                        text: 'Epoch 2',
                                        verticalAlign: 'top',
                                        y: -10
                                    }
                                },
                                {
                                    from: 14.7 * day,
                                    to: 21 * day,
                                    color: 'rgba(255, 0, 0, 0.2)', // Color value,
                                    label: {
                                        text: 'Epoch 3',
                                        verticalAlign: 'top',
                                        y: -10
                                    }
                                },
                                {
                                    from: 21 * day,
                                    to: 30 * day,
                                    color: 'rgba(230, 126, 34, 0.2)', // Color value,
                                    label: {
                                        text: 'Epoch 4',
                                        verticalAlign: 'top',
                                        y: -10
                                    }
                                }
                            ]*/
                        }
                    ],

                    tooltip: {
                        formatter: function(){
                            if (this.point.isNull) {
                                return 'Null';
                            }

                            return "" +
                                this.point.series.name + "<br>" +
                                "<div><b>Name:</b> " + this.point.name + "</div><br>" +
                                "<div><b>Description:</b> " + this.point.description + "</div>"
                        }
                    },

                    series: [
                        {
                            name: 'Arm 1',
                            type: 'gantt',
                            data: [
                                {
                                    start: 1,
                                    end: 2,
                                    name: 'Screem',
                                    id: 'arm_1_st_cl1',
                                    description: 'The screem pre-process',
                                    y: 0
                                },
                                {
                                    start: 4,
                                    end: 5,
                                    name: 'Radiological intervention',
                                    description: "Duration: 1h<br>" +
                                                 "Dose: 250 lux<br>" +
                                                 "Light: visible light at 3000K produced by LED array<br>",
                                    id: 'arm_1_st_cl2',
                                    y: 0,
                                    dependency: 'arm_1_st_cl1'
                                },
                                {
                                    start: 6,
                                    end: 9,
                                    name: 'washout',
                                    description: "Wash out period following previous treatment",
                                    id: 'arm_1_st_cl3',
                                    y: 0,
                                    dependency: 'arm_1_st_cl2'
                                },
                                {
                                    start: 10,
                                    end: 11,
                                    name: 'Radiological intervention',
                                    description: "Treatment with visible light at 3000K produced by LED array<br>" +
                                    "Dose: 250 lux<br>" +
                                    "Duration: 1h",
                                    id: 'arm_1_st_cl4',
                                    y: 0,
                                    dependency: 'arm_1_st_cl3'
                                },
                                {
                                    start: 12,
                                    end: 20,
                                    name: 'Follow-up',
                                    description: "Following up of the patient after the trial",
                                    id: 'arm_1_st_cl5',
                                    y: 0,
                                    dependency: 'arm_1_st_cl4'
                                },

                                /* MAT 1*/
                                {
                                    name: 'Sampling MAT1',
                                    start: 1,
                                    end: 3,
                                    description: 'Sample saliva from organism',
                                    y:1,
                                    id: 'arm_1_MAT1'
                                },
                                {
                                    name: 'Data Collection',
                                    start: 4,
                                    end: 5.2,
                                    description: "Somnotouch at 200hz for 3 hours",
                                    y:2,
                                    id: "arm_1_data_collection_002",
                                    dependency: "arm_1_MAT1"
                                },
                                {
                                    name: 'Data Collection',
                                    start: 4,
                                    end: 5.2,
                                    description: "Somnotouch at 200hz for 6 hours",
                                    y:3,
                                    id: "arm_1_data_collection_005",
                                    dependency: "arm_1_MAT1"
                                },
                                {
                                    name: 'Data Collection',
                                    start: 4,
                                    end: 5.2,
                                    description: "Somnotouch at 200hz for 1 hours",
                                    y:4,
                                    id: "arm_1_data_collection_000",
                                    dependency: "arm_1_MAT1"
                                },

                                /* MAT 2*/
                                {
                                    name: "Sample plan",
                                    description: "MAT2 - radioimmunoprecipitation assay measuring melatonin concentration",
                                    start: 10,
                                    end: 12,
                                    y: 1,
                                    id: 'arm_1_MAT2',
                                },
                                {
                                    name: "Extraction",
                                    description: "Extraction from whole organism",
                                    start: 13,
                                    end: 14,
                                    y: 1,
                                    id: 'arm_1_extraction_000',
                                    dependency: 'arm_1_MAT2'
                                },
                                {
                                    name: 'Radioimmunoprecipitation',
                                    id: 'radioimmunoprecipitation_000_000',
                                    description: 'Measurement realized using Beckon Dickison XYZ with AbCam antiMelatonine for 1 hour',
                                    start: 15,
                                    end: 16,
                                    y: 2,
                                    dependency: 'arm_1_extraction_000'
                                },
                                {
                                    name: "Raw<br>Data<br>File",
                                    id: "raw_data_file_000_000",
                                    dependency: 'radioimmunoprecipitation_000_000',
                                    description: "contains melatonine concentration",
                                    milestone: true,
                                    start: 17,
                                    y: 2
                                },
                                {
                                    name: 'Radioimmunoprecipitation',
                                    id: 'radioimmunoprecipitation_001_000',
                                    description: 'Measurement realized using Beckon Dickison XYZ with AbCam antiMelatonine for 2 hours',
                                    start: 15,
                                    end: 16,
                                    y: 3,
                                    dependency: 'arm_1_extraction_000'
                                },
                                {
                                    name: "Raw<br>Data<br>File",
                                    id: "raw_data_file_000_000",
                                    dependency: 'radioimmunoprecipitation_001_000',
                                    description: "contains melatonine concentration",
                                    milestone: true,
                                    start: 17,
                                    y: 3
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