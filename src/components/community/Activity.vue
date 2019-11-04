<template>
    <div>
        <p class="text">
            FAIRsharing is not just a registry. The team behind FAIRsharing is involved in a number of
            FAIR-enabling activities, delivering guidance, tools and services with and for a variety of stakeholders.
            As these activities mature, we will implement them in, or connect them to, the FAIRsharing resource itself. <br>
            Some of these activities are part of funded projects andas part of national or international consortia,
            while others are volunteer efforts that fall under a variety of umbrella organisations, e.g. working groups
            (WG) and learned societies.<br>
            Our activities, classified using the three GO-FAIR pillar structures (change, build, train), are outlined here.
        </p>

        <highcharts :options="chartOptions" class="shadowBox chartMin"></highcharts>

        <div class="container-fluid activityDetails">
            <div class="row tabRow">
                <div class="col-12">
                    <ul class="nav">
                        <li class="nav-item"
                            v-for="tab in getTabs"
                            :key="'tab_'+tab">
                            <button class="btn active"
                                    v-on:click="currentDisplay = tab"
                                    v-bind:class="currentDisplay">
                                {{tab}}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="row textRow">
                <div v-for="(dataVal, dataKey) in gridData"
                     :key="'text_' + dataKey"
                     v-bind:class="currentDisplay">

                    <div v-if="dataKey === currentDisplay">
                        <div class="activitySubTitle">
                            <span class="text-uppercase">{{dataKey}}</span> - {{dataVal.description}}
                        </div>


                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-6" v-for="(activity, key, index) in dataVal.items" :key="'activity'+index">
                                    <div class="card activity">

                                        <div class="card-header">{{key}}</div>
                                        <div class="card-body">
                                            <div class="card no-border" v-for="(itemVal, subIndex) in activity" :key="'activityDescription'+subIndex">

                                                <div class="description" v-html="itemVal.description"> </div>

                                                <div class="organizations container-fluid">
                                                    <div class="row">
                                                        <div class="label">Organizations: </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-6"
                                                             v-for="(organization, index) in itemVal.organization" :key="'organization'+index">
                                                                <div class="organization" v-html="organization">
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {{index}}
                                                <hr v-if="subIndex !== Object.keys(itemVal).length - 1">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
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
                },
                gridData: {
                        change: {
                            description: "focusing on priorities, policies and incentives for implementing FAIR",
                            items: {
                                "1. FAIR maturity indicators, metrics and models": [
                                    {
                                        description:
                                            "A core set of 14 universal <b>machine-actionable measurable FAIR Metrics</b> covering the FAIR principles, " +
                                            "a <b>questionnaire for manual assessment</b>, and a <b>template form</b> to create new metrics. " +
                                            "<a href='https://doi.org/10.1038/sdata.2018.118' target='_blank'>Publication on these metrics</a> and the " +
                                            "<a href='https://fairsharing.org/standards/?q=&selected_facets=type_exact:metric' target=''>FAIRsharing Collection of metrics.</a>",
                                        organization: [
                                            "<a href='https://www.go-fair.org/implementation-networks/overview/opedas/' target='_blank'>GO-FAIR OPEDAS IN</a>",
                                            "<a href='https://www.go-fair.org/implementation-networks/overview/fair-strepo/' target=''>GO-FAIR StRePo</a>",
                                            "<a href='https://github.com/FAIRMetrics/Metrics' target=''>FAIR Metrics WG</a>"
                                        ]
                                    },
                                    {
                                        description: "Discussion forum to improve the interoperability of existing and emerging <b>FAIR assessment methodologies.</b>",
                                        organization: [
                                            "<a href='https://www.rd-alliance.org/groups/fair-data-maturity-model-wg' target='_blank'>RDA FAIR Maturity Model WG</a>",
                                            "<a href='https://www.rd-alliance.org/group/fairsharing-registry-connecting-data-policies-standards-databases.html' target='_blank'>RDA FAIRsharing WG</a>"
                                        ]
                                    }
                                ],
                                "2. Cross-publishers common criteria for repository selection": [
                                    {
                                        description:
                                            "Through a collaboration with Datacite, we are working with a number of journal publishers (PLOS, Springer Nature, " +
                                            "F1000, Wiley, Taylor and Francis, Elsevier, EMBO Press, eLife, GigaScience and Cambridge University Press) to identify " +
                                            "a common set of criteria for selecting and recommending data repositories (and associated standards) that will be implemented in " +
                                            "FAIRsharing. Read our <a href='https://osf.io/m2bce' target='https://osf.io/m2bce'>pre-print</a> providing a summary of the work.",
                                        organization: [
                                            "FAIRsharing team",
                                            "<a href='https://datacite.org/' target='_blank'>Datacite</a>"
                                        ],
                                        mou: "https://blog.datacite.org/mou-between-datacite-and-fairsharing/"
                                    }
                                ],
                                "3. Journal data policies and the TOP guidelines": [
                                    {
                                        description:
                                        "We are working with Jisc and the Center for Open Science (COS) to <b>disseminate information about open " +
                                        "science policies</b> (including preprints & open data journal/funder policies) and to " +
                                        "<b>standardize classification of these policies</b> in the hope of encouraging change. ",
                                        organization: [
                                            "FAIRsharing team",
                                            "<a href='' target='_blank'>COS</a>"
                                        ],
                                        mou: ""
                                    }
                                ],
                                "4. Standardized templates for journal data policies": [
                                    {
                                        description:
                                        "Working within the RDA community and collaborating with a number of journal publishers " +
                                        "to help <b>define common frameworks for publisher data policies</b> and <b>increase adoption of " +
                                        "(standardized) research data policies</b> by all stakeholders and in particular journal publishers. ",
                                        organization: [
                                            "RDA Standardisation and Implementation IG",
                                            "<a href='' target='_blank'>RDA FAIRsharing WG</a>"
                                        ]
                                    }
                                ],

                            }
                    },
                    build: {
                        description: "focussing on the technology needed to enable FAIR ",
                        items: {
                            "5. Domain and subject terminologies for data classification": [
                            ]
                        }
                    },
                    train: {}
                },
                currentDisplay: 'change'
            }
        },
        computed: {
            getTabs: function () {
                let output = [];
                for (let label in this.gridData){
                    output.push(label)
                }
                return output;
            }
        }
    }
</script>

<style scoped>
    p.text {
        text-align: justify;
    }

    .activityDetails {
        margin-top:20px;
    }

    .textRow {
        padding: 20px;
        border:1px solid #ccc;
    }

    .textRow.change {
        border:3px solid #e67e22;
    }

    .change, .build, .train {
        width:100%;
    }

    .activitySubTitle {
        padding:10px 20px;
        text-align: center;
        font-size: 1rem;
        color:white;
        margin-bottom:10px;
        width:100%;
    }

    .change .activitySubTitle, .change .organization {
        background-color: #e67e22;
    }

    .build .activitySubTitle {
        background-color: #27aae1;
    }

    .no-border {
        border:0;
        box-shadow: 0 0;
    }

    .activity {
        margin-bottom:20px;
    }

    .activity .card-body{
        padding:10px 20px !important;
        text-align: justify;
    }

    .organizations {
        margin-top:10px;
    }

    .organization {
        padding: 10px;
        border-radius: 20px 0 20px 0;
        text-align: center;
    }

    .label {
        margin-bottom: 10px;
        font-weight: bolder;
        text-decoration: underline;
    }

</style>

<style>
    .organization,
    .organization a,
    .organization a:visited {
        color: white !important;
    }
</style>