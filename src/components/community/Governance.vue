<template>
    <div class="container-fluid governance">
        <div id="governance">
            <highcharts :options="chartOptions" class="shadowBox"></highcharts>
        </div>

        <div class="board container-fluid">
            <div class="row">
                <div class="col-12">
                    <h5>Advisory Board</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-6 colLeft">
                    <ul>
                        <li> <b>Emma Ganley</b> (PLOS) Co-chair</li>
                        <li><b>Varsha Khodiyar</b> (NPG) Co-chair</li>
                        <li><b>Michael Ball</b> (ESRC)</li>
                        <li><b>Theo Bloom</b> (BMJ)</li>
                        <li><b>Jennifer Boyd</b> (OUP)</li>
                        <li><b>Dave Carr</b> (The Wellcome Trust and Wellcome Open Research)</li>
                        <li><b>Helena Cousijn</b> (Datacite)</li>
                        <li><b>Scott Edmunds </b>(GigaScience, BGI)</li>
                        <li><b>Dominic Fripp</b> (JISC)</li>
                        <li><b>Chris Graf</b> (Wiley)</li>
                        <li><b>Simon Hodson</b> (CODATA), Co-Chair of the RDA/Force11 WG</li>
                    </ul>
                </div>
                <div class="col-6 colRight">
                    <ul>
                        <li> <b>Mike Huerta</b> (Coordinator of Data & and Open Science Initiative, Associate Director for Programme Development at the NIH National Library of Medicine)</li>
                        <li> <b>Amye Kenall</b> (BMC) </li>
                        <li> <b>Rebecca Lawrence</b> (F1000), Co-Chair of the RDA/Force11 WG </li>
                        <li> <b>Thomas Lemberger</b> (EMBO Press) </li>
                        <li> <b>Jennifer Lin</b> (CrossRef) </li>
                        <li> <b>Luiz Olavo Bonino</b> (GO-FAIR) </li>
                        <li> <b>Gabriella Rustici</b> (ELIXIR UK Node, University of Cambridge, UK)</li>
                        <li> <b>Marina Soares E Silva</b> (Elsevier) </li>
                        <li> <b>Imma Subirats</b> (Information Management Officer, FAO of the United Nations, Italy)</li>
                        <li> <b>Marta Teperek </b>(Data Stewardship Coordinator, TUDelft, The Netherlands) </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {Chart} from 'highcharts-vue'

    export default {
        name: "Governance",
        components: {
            highcharts: Chart
        },
        data() {
            return {
                chartOptions: {
                    chart: {
                        height:  '50%',
                        plotBackgroundColor: '#f8f8f8',
                        backgroundColor: '#f8f8f8',
                        plotBorderWidth: 0,
                        renderTo: 'chart',
                        inverted: true
                    },

                    title: {
                        text: 'FAIRsharing Organization Graph'
                    },

                    series: [{
                        type: 'organization',
                        name: 'Highsoft',
                        keys: ['from', 'to'],
                        data: [
                            ['PI', 'CFO'],
                            ['PI', 'Coordinator'],
                            ['CFO', 'Web1'],
                            ['CFO', 'Web2'],
                            ['Coordinator', 'Product'],
                            ['Coordinator', 'Curator1'],
                            ['Coordinator', 'Curator2'],
                            ['Product', 'Sales']
                        ],
                        levels: [
                            {
                                level: 0,
                                color: '#359154',
                            },
                            {
                                level: 1,
                                color: '#E27D60'
                            },
                            {
                                level: 2,
                                color: '#27aae1'
                            },
                            {
                                level: 3,
                                color: '#27aae1'
                            }
                        ],
                        nodes: [
                            {
                                id: 'PI',
                                title: 'Principal Investigator and Founder',
                                name: 'Susanna-Assunta<br>Sansone',
                                image: 'https://fairsharing.org/static/img/team/susanna.jpg',
                                width: 250,
                            },
                            {
                                id: 'CFO',
                                title: 'Co-Founder',
                                name: 'Philippe Rocca-Serra',
                                column: 1,
                                image: 'https://fairsharing.org/static/img/team/phillipe.jpg',
                                layout: 'hanging',
                                width: 200
                            },
                                {
                                id: 'Coordinator',
                                title: 'Project Coordinator',
                                name: 'Peter McQuilton',
                                column: 1,
                                image: 'https://fairsharing.org/static/img/team/pete.jpg',
                                layout: 'hanging',
                                width: 200
                            },
                            {
                                id: 'Product',
                                title: 'Lead Research <br> Software Engineer',
                                name: 'Milo Thurston',
                                image: 'https://fairsharing.org/static/img/team/milo.jpg',
                                column: 2,
                                width: 200
                            },
                            {
                                id: 'Curator1',
                                title: 'Knowledge Engineer',
                                name: 'Allyson Lister',
                                image: 'https://fairsharing.org/static/img/team/allyson.jpg',
                                column: 2,
                                width: 200
                            },
                            {
                                id: 'Curator2',
                                title: 'Curator (Contract)',
                                name: 'Delphine Dauga',
                                image: 'https://fairsharing.org/static/img/team/delphine.jpg',
                                column: 2,
                                width: 200
                            },
                            {
                                id: 'Web1',
                                title: 'Research Software & Knowledge Engineer',
                                name: 'Dominique Batista',
                                image: 'https://fairsharing.org/static/img/team/dominique.jpg',
                                column: 2,
                                width: 220
                            },
                            {
                                id: 'Web2',
                                title: 'Research Software Engineer',
                                name: 'Massimiliano Izzo',
                                image: 'https://fairsharing.org/static/img/team/massi.jpg',
                                column: 2,
                            },
                            {
                                id: 'Sales',
                                title: 'Research Software & Knowledge Engineer',
                                name: 'Ramon Granell',
                                image: 'https://fairsharing.org/static/img/team/ramon.jpg',
                                column: 3,
                                width: 200
                            }
                        ],
                        colorByPoint: false,
                        color: '#007ad0',
                        dataLabels: {
                            color: 'white'
                        },
                        borderColor: 'white',
                        nodeWidth: 65
                    }],
                    tooltip: {
                        outside: true
                    },
                    exporting: {
                        allowHTML: true,
                        sourceWidth: 800,
                        sourceHeight: 600
                    },
                    credits: {
                        enabled: false
                    }

                }
            }
        }
    }
</script>

<style>


    #governance h4 {
        font-size: 1rem;
    }

    #governance p{
        font-size: 0.5rem;
    }

    .board {
        margin-top: 20px
    }

    h5 {
        margin-bottom: 20px;
    }

</style>