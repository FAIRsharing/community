<template>
    <div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12">
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
                    <div class="graph">
                        <highcharts :options="chartOptions" class="shadowBox"></highcharts>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                    <div class="grid container-fluid">
                        <div class="row">
                            <div class="col-12" style="text-align: center;">
                                <b>We cannot list all of our adopters, but list here those publishers that use FAIRsharing to define and refine their data policy.</b>
                                <hr>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-lg-6 col-xl-4"
                                 v-for="item in gridItems"
                                 :key="'item_' + item.name"
                                 style="margin-bottom:20px;">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="logoZone">
                                            <img :src="item.logo" class="logo">
                                        </div>
                                        <div class="title">
                                            <div>{{item.name}}</div>
                                        </div>
                                        <div class="textZone">
                                            <div>
                                                - <br>
                                                {{item.text}}
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

    export default {
        name: "Adopter",
        data() {
            return {
                chartOptions: {
                    colors: ['#E27D60', '#27aae1', '#98bfcc'],
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
                            pointWidth: 30
                        }
                    },
                    series: [
                        {
                            name: 'Databases',
                            data: [72,24,47,42,84,0,101,9,48]
                        },
                        {
                            name: 'Standards',
                            data: [3,9,6,15,1,2,11,1,6]
                        }/*,
                        {
                            name: 'Policy',
                            data: [0,0,0,0,0,1,0,0,0]
                        }*/
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
                        name: "GigaScience",
                        logo: require('../../assets/community/logo_giga_science.png'),
                        text: 'Recommendation',
                        link: 'https://fairsharing.org/recommendation/GigaScience'
                    },
                    {
                        name: "Public Library of Science (PLOS)",
                        logo: require('../../assets/community/PLOS_logo.png'),
                        text: 'Recommendation',
                        link: 'https://fairsharing.org/recommendation/PLOS'
                    },
                    {
                        name: "Taylor and Francis",
                        logo: require('../../assets/community/taylor_francis.png'),
                        text: 'Recommendation',
                        link: 'https://fairsharing.org/recommendation/TaylorandFrancis'
                    },
                    {
                        name: "Wiley",
                        logo: require('../../assets/community/wiley_logo.png'),
                        text: 'Policy',
                        link: 'https://fairsharing.org/recommendation/TaylorandFrancis'
                    },
                    {
                        name: "Springer Nature Scientific Data",
                        logo: require('../../assets/community/SciData_logo.png'),
                        text: 'Recommendation',
                        link: 'https://fairsharing.org/recommendation/TaylorandFrancis'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .graph {
        margin-top: 20px;
    }

    .grid {
        border:1px solid #ccc;
        box-shadow: 3px 3px #ccc;
        padding:10px;
    }

    .logoZone{
        height:100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logoZone img{
        height: 70px;
        width:80%;
        transition: all 0.5s;
    }

    .logoZone img:hover{
        height:100px;
        width: 100%;
    }

    .card {
        border: 3px solid #27aae1;
        height:100%;
    }

    .card-body{
        padding:0 0;
    }

    .title {
        color: #27aae1;
        font-weight: bolder;
        text-align: center;
        font-size: 1.1rem;
        padding:0 10px;
    }

    .textZone {
        text-align: center;
        margin-bottom: 10px;
    }

</style>