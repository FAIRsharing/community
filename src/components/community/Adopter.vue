<template>
    <div class="container-fluid adopters">
        <div class="row">
            <div class="col-12 leftCol">
                <div class="container-fluid">
                    <div class="row">

                        <div class="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                            <div class="text">
                                Anyone can use FAIRsharing. Adopters, however, use FAIRsharing specifically to:
                                <ol>
                                    <li>Educate their users/community on the variety of existing standards, repositories and policies, and actively encourage them to submit/claim records, where relevant;</li>
                                    <li>Create Recommendations by registering their data policy, and then link it to standards and/or databases recommended in the policy; and/or</li>
                                    <li>Create a Collection by pulling together a list of standards and/or databases around a given domain of interest relevant to them.</li>
                                </ol>
                                Here are the instructions for record creation.<br>
                                Adopters are generally representatives of institutions, libraries, journal publishers,
                                infrastructure programmes, societies and other organizations or projects that in turn serve and guide individual
                                researchers or other stakeholders on research data management matters.<br>
                                Adopters have a FAIRsharing logo on their websites with a link from their website to our homepage.<br>
                            </div>
                        </div>

                        <div class="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                            <div class="graph">
                                <highcharts :options="chartOptions" class="shadowBox chartMin"></highcharts>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="grid container-fluid">
                <div class="row">
                    <div class="col-12" style="text-align: center;">
                        <b>We cannot list all of our adopters, but list here those publishers that use FAIRsharing to define and refine their data policy.</b>
                        <hr>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-2"
                         v-for="item in gridItems"
                         :key="'item_' + item.name"
                         style="margin-bottom:20px;">

                        <div class="card organization"
                             v-bind:class="{'orange': item.text === 'Policy', 'green': item.text === 'Global Organization'}">
                            <div class="card-body">
                                <div class="logoZone">
                                    <img :src="item.logo" class="logo">
                                </div>
                                <div class="title">
                                    <div>{{item.name}}</div>
                                </div>
                                <div class="textZone">
                                    {{item.text}}
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

    export default {
        name: "Adopter",
        data() {
            return {
                chartOptions: {
                    chart: {
                        type: 'column',
                        plotBackgroundColor: 'white',
                        backgroundColor: '#f8f8f8',
                        plotBorderWidth: 1,
                        renderTo: 'container'
                    },
                    title: {
                        text: 'FAIRsharing adopters databases and standards'
                    },
                    xAxis: {
                        categories: [
                            'Elsevier',
                            'EMBO press',
                            'F1000Research',
                            'Gigascience',
                            'PLOS',
                            'BioMed Central',
                            'Scientific Data',
                            'Taylor and Francis',
                            'Wellcome Open Research'
                        ]
                    },
                    yAxis: {
                        title: {
                            enabled: false,
                            text: undefined
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            pointWidth: 50,
                            pointPadding: 0.1,
                            column: {
                                stacking: 'normal'
                            }
                        }
                    },
                    series: [
                        {
                            name: 'Databases',
                            data: [72,24,47,42,84,0,101,9,48],
                            stack: 0
                        },
                        {
                            name: 'Standards',
                            data: [3,9,6,15,1,2,11,1,6],
                            stack: 1
                        }
                    ]
                },
                gridItems: [
                    {
                        name: "eLife",
                        logo: require('../../assets/community/elife_logo.jpg'),
                        text: 'Policy',
                        link: 'https://fairsharing.org/FAIRsharing.F0QmCP'
                    },
                    {
                        name: "Elsevier",
                        logo: require('../../assets/community/ELSEVIER.png'),
                        text: 'Recommendation',
                        link: 'https://fairsharing.org/recommendation/Elsevier'
                    },
                    {
                        name: "EMBO Press",
                        logo: require('../../assets/community/embo_logo.png'),
                        text: 'Recommendation',
                        link: 'https://fairsharing.org/recommendation/EMBOPress'
                    },
                    {
                        name: "Faculty of 1000",
                        logo: require('../../assets/community/logo_f1000.png'),
                        text: 'Recommendation',
                        link: 'https://fairsharing.org/recommendation/F1000ResearchRecommendedRepositories'
                    },
                    {
                        name: "FORCE11",
                        logo: require('../../assets/community/logo_force11.png'),
                        text: 'Global Organization',
                        link: 'https://www.force11.org/group/biosharingwg'
                    },
                    {
                        name: "GigaScience",
                        logo: require('../../assets/community/logo_giga_science.png'),
                        text: 'Recommendation',
                        link: 'https://fairsharing.org/recommendation/GigaScience'
                    },
                    {
                        name: "GO-FAIR",
                        logo: require('../../assets/community/logo_go_fair.png'),
                        text: 'Global Organization',
                        link: 'https://www.go-fair.org/implementation-networks/overview/fair-strepo/'
                    },
                    {
                        name: "Public Library of Science (PLOS)",
                        logo: require('../../assets/community/PLOS_logo.png'),
                        text: 'Recommendation',
                        link: 'https://fairsharing.org/recommendation/PLOS'
                    },
                    {
                        name: "RDA",
                        logo: require('../../assets/community/rda_logo.png'),
                        text: 'Global Organization',
                        link: 'https://www.rd-alliance.org/group/fairsharing-registry-connecting-data-policies-standards-databases.html'
                    },
                    {
                        name: "Springer Nature BioMed Central",
                        logo: require('../../assets/community/logo_biomed_central.png'),
                        text: 'Recommendation',
                        link: 'https://fairsharing.org/recommendation/BMC'
                    },
                    {
                        name: "Springer Nature Scientific Data",
                        logo: require('../../assets/community/SciData_logo.png'),
                        text: 'Recommendation',
                        link: 'https://fairsharing.org/recommendation/TaylorandFrancis'
                    },
                    {
                        name: "Taylor and Francis",
                        logo: require('../../assets/community/taylor_francis.png'),
                        text: 'Recommendation',
                        link: 'https://fairsharing.org/recommendation/TaylorandFrancis'
                    },
                    {
                        name: "Wellcome Open Research",
                        logo: require('../../assets/community/wellcome_bw.png'),
                        text: 'Recommendation',
                        link: 'https://fairsharing.org/recommendation/WellcomeOpenResearch'
                    },
                    {
                        name: "Wiley",
                        logo: require('../../assets/community/wiley_logo.png'),
                        text: 'Policy',
                        link: 'https://fairsharing.org/recommendation/TaylorandFrancis'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .adopters {
        justify-content: center;
        align-content: center;
        display: flex;
        flex-direction: column;
    }

    .graph {
        margin-top: 20px;
    }

    .grid {
        border:1px solid #ccc;
        box-shadow: 3px 3px #ccc;
        padding:10px;
    }

    .logoZone{
        height:130px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logoZone img{
        height:40px;
        width: 80px;
        transition: all 0.5s;
    }

    .logoZone img:hover{
        height: 80%;
        width: 70%;
    }

    .card {
        border: 3px solid #27aae1;
        height:100%;
        box-shadow: 0 0 #ccc;
    }

    .organization .card-body{
        padding:0 !important;
    }

    .title {
        color: #27aae1;
        font-weight: bolder;
        text-align: center;
        font-size: 1.1rem;
        padding:0 10px;
        margin-bottom: auto;
    }

    .textZone {
        text-align: center;
        margin: 10px 0 30px 0;
        padding:0px 10px;
        position: relative;
        background-color: #27aae1;
        color:white;
    }

    .leftCol {
        margin-bottom: 20px;
    }

    .orange {
        border-color:#e67e22;
    }

    .orange .title {
        color: #e67e22;
    }
    .orange .textZone {
        background-color: #e67e22;
    }

    .green {
        border-color: #359154;
    }

    .green .title {
        color: #359154;
    }
    .green .textZone {
        background-color: #359154;
    }

    .organization {
        position: relative;
    }

    .organization .card-body {
        display: flex;
        flex-direction: column;
    }

    .leftCol .text{
        margin-top: 5px;
        margin-bottom: 0px;
        text-align: justify;
    }

    .chartMin {
        margin-bottom: 20px;
    }

</style>