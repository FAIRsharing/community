<!-- tabs were inspired by Nenad Kaevik @ https://codepen.io/nenadkaevik/pen/odyrGm -->

<template>
    <div class="container-fluid">

        <div class="row">

            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12">
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
            </div>

            <div class="col-lg-8 col-xl-8 col-sm-12 col-md-12">

                <!-- NAVIGATION -->
                <div class="container-fluid activityDetails">
                    <div class="row">
                        <nav class="tabs">
                            <div class="selector"
                                 v-bind:style="{
                                    left: tabStyle.position,
                                    background: tabStyle.color
                                 }">
                            </div>
                            <div v-for="tab in getTabs"
                                 :key="'tab_'+tab"
                                 v-bind:class="{'active': tab === currentDisplay}"
                                 v-on:click="switchTab(tab)"
                                 v-bind:ref=tab>
                                {{tab}}
                            </div>
                        </nav>
                    </div>
                    <!-- CONTENT -->
                    <div class="row textRow" v-bind:class="currentDisplay">
                        <div v-for="(dataVal, dataKey) in gridData"
                             :key="'text_' + dataKey"
                             v-bind:class="currentDisplay">


                            <transition name="slide">
                                <div v-if="dataKey === currentDisplay">
                                <div class="activitySubTitle">
                                    <span class="text-uppercase">{{dataKey}}</span> - {{dataVal.description}}
                                </div>


                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12" v-for="(activity, key, index) in dataVal.items" :key="'activity'+index">
                                            <div class="card activity">

                                                <div class="card-header">{{key}}</div>
                                                <div class="card-body">
                                                    <div class="card no-border" v-for="(itemVal, subIndex) in activity" :key="'activityDescription'+subIndex">
                                                        <hr v-if="subIndex > 0">
                                                        <div class="organizations">
                                                            <div class="label">Organizations: </div>
                                                            <div v-for="(organization, index) in itemVal.organization"
                                                                 :key="'organization'+index"
                                                                 class="organization"
                                                                 v-html="organization">
                                                            </div>
                                                        </div>
                                                        <div class="description" v-html="itemVal.description"> </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </transition>
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
                        description: "focussing on the technology needed to enable FAIR",
                        items: {
                            "5. Domain and subject terminologies for data classification": [
                                {
                                    description:
                                    "We have developed and maintain two terminologies: the Subject Resource Application " +
                                    "Ontology (SRAO) describing subject areas / academic disciplines and the Domain " +
                                    "Resource Application Ontology (DRAO) describing cross-discipline research domains. " +
                                    "These are used by the FAIRsharing curators and the users to describe and classify" +
                                    " standards, repositories and polices. ",
                                    organization: [
                                        "FAIRsharing team"
                                    ],
                                    projects : [
                                        "<a href='https://wellcome.ac.uk/funding/people-and-projects/grants-awarded/the-fairsharing-service-supporting-research-lifecycle' target='_blank'>Wellcome Trust</a>"
                                    ]
                                }
                            ],
                            "6. Future-proofing the FAIRsharing technical architecture": [
                                {
                                    description:
                                    "To adapt and improve the FAIRsharing data model to accurate reflect and respond to " +
                                    "community requirements. To update and refactor FAIRsharing code to facilitate improved " +
                                    "data visualisation and access and to respond to user requirements. ",
                                    organization: [
                                        "FAIRsharing team",
                                        "International Advisory Board"
                                    ],
                                    projects : [
                                        "<a href='https://wellcome.ac.uk/funding/people-and-projects/grants-awarded/the-fairsharing-service-supporting-research-lifecycle' target='_blank'>Wellcome Trust</a>"
                                    ]
                                }
                            ],
                            "7. FAIR assessment tools": [
                                {
                                    description:
                                    "FAIRshake: a prototype software to assess the FAIRness of bioinformatics tools, " +
                                    "analyses, and biological datasets against a variety of different metrics that can " +
                                    "be uploaded in the tool. FAIRsharing is a core element of this work. ",
                                    organization: [
                                        "FAIRSharing team",
                                        "<a href='https://commonfund.nih.gov/commons' target=''>NIH Data Commons teams</a>",
                                    ],
                                    projects: [
                                        "NIH FAIR Data Commons Consortium"
                                    ]
                                },
                                {
                                    description: "FAIR Evaluator: a software to register and execute tests of compliance " +
                                    "with the published FAIR Metrics. FAIRsharing is a core element of this work. " +
                                    "<a href='https://w3id.org/AmIFAIR' target='_blank'>Pre-print of this work.</a>",
                                    organization: [
                                        "<a href='' target='_blank'>GO-FAIR OPEDAS IN</a>",
                                        "<a href='' target='_blank'>GO-FAIR StRePo IN</a>",
                                        "<a href='' target='_blank'>FAIR Metrics WG</a>"
                                    ]
                                }
                            ],
                        }
                    },
                    train: {
                        description: "focussing on FAIR awareness and skills development",
                        items: {
                            "11. Guidance to stakeholders ": [
                                {
                                    description:
                                    "We are developing <b>FAIRassist</b>, a tool to navigate and select standards, repositories " +
                                    "and other digital objects to guide researchers, data managers and other data " +
                                    "producers and consumers to improve the FAIRness of their data. ",
                                    organization: [
                                        "FAIRsharing team"
                                    ],
                                    projects : [
                                        "<a href='https://twitter.com/EoscLife' target='_blank'>EU INFRA EOSC-Life</a>"
                                    ]
                                }
                            ],
                            "12. FAIR competencies and curricula ": [
                                {
                                    description:
                                    "Working with the community, including GO-FAIR, CODATA, the RDA and others, we are " +
                                    "building infrastructure in training and teaching to enable both a competency or " +
                                    "skills framework and a generic teaching curriculum. ",
                                    organization: [
                                        "GO-FAIR Training",
                                        "CODATA",
                                        "FAIRsFAIR",
                                        "GO-FAIR StRePo IN;"
                                    ],
                                    projects : [
                                        "<a href='https://wellcome.ac.uk/funding/people-and-projects/grants-awarded/the-fairsharing-service-supporting-research-lifecycle' target='_blank'>Wellcome Trust</a>"
                                    ]
                                }
                            ]
                        }
                    }
                },
                currentDisplay: 'change',
                tabStyle: {}
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
        },
        methods: {
            switchTab: function(tab) {
                let properties = {
                    change: [0, '#e67e22'],
                    build: [150, '#27aae1'],
                    train: [300, '#359154']
                };
                this.currentDisplay = tab;
                this.tabStyle.position = properties[tab][0] + 'px';
                this.tabStyle.color = properties[tab][1];
            }
        }
    }

</script>

<style scoped>

    p.text {
        text-align: justify;
        margin: 60px 0;
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

    .change .activitySubTitle, .change .organization, .btn-orange {
        background-color: #e67e22;
    }

    .build .activitySubTitle, .build .organization, .btn-blue {
        background-color: #27aae1;
    }

    .train .activitySubTitle, .train .organization, .btn-green {
        background-color: #359154;
    }

    .change .activity .card-header {
        color: #e67e22;
    }
    .build .activity .card-header {
        color: #27aae1;
    }
    .train .activity .card-header {
        color: #359154;

    }

    .change .activity .card-header,
    .build .activity .card-header,
    .train .activity .card-header {
        font-weight: bolder;
        font-size: 1.1rem;
    }


    /*
    .btn-green, .btn-orange,.btn-blue {
        position: relative;
        top:2px;
    }*/

    .btn-green:focus, .btn-orange:focus, .btn-blue:focus {
        box-shadow:0 0 !important;
    }

    .textRow.change {
        border:2px solid #bf6516;
    }

    .textRow.build {
        border:2px solid #1a8bbb;
    }

    .textRow.train {
        border:2px solid #276c3e;
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
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .organization {
        padding: 7px 10px;
        border-radius: 20px;
        text-align: center;
        font-size: 0.8rem;
        margin-left:20px;
        margin-top:10px;
    }

    .label {
        font-weight: bolder;
        text-decoration: underline;
        margin-top:10px;
    }

    .description {
        margin-top:10px;
    }

    .nav-item{
        border-bottom: 0;
        width:auto !important;
    }

    .nav-item button {
        width:100%;
        padding-left:30px;
        padding-right:30px;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        color:white;
        font-weight: bolder;
        min-width:150px;
    }

    .nav-item.change {}
    .nav-item.build {}
    .nav-item.train {}


    /* TABS */
    .tabs{
        margin-top:30px;
        margin-bottom:20px;
        font-size:15px;
        padding:0px;
        list-style:none;
        background:#fff;
        box-shadow:3px 3px 4px #ccc;
        display:inline-block;
        border-radius:50px;
        position:relative;
    }

    .tabs div{
        text-decoration:none;
        color: #777;
        text-transform:uppercase;
        padding:10px 20px;
        display:inline-block;
        position:relative;
        z-index:1;
        transition-duration:0.6s;
        width:150px;
        text-align: center;
    }

    .tabs div.active{
        color:#fff;
    }

    .tabs .selector{
        height:100%;
        width:150px;
        display:inline-block;
        position:absolute;
        left:0px;
        top:0;
        z-index:1;
        border-radius:50px;
        transition-duration:0.6s;
        transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

        background: #e67e22;
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05abe0', endColorstr='#8200f4',GradientType=1 );
        color:white;
    }

    .tabs .selector {}

    .tabs:hover {
        cursor: pointer;
    }

</style>

<style>
    .organization,
    .organization a,
    .organization a:visited {
        color: white !important;
    }
</style>