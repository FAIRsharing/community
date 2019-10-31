<template>
    <div class="container-fluid governance">
        <div id="governance">
            <highcharts :options="chartOptions" class="shadowBox"></highcharts>
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
                        height:  '40%',
                        inverted: true,
                        plotBackgroundColor: '#f8f8f8',
                        backgroundColor: '#f8f8f8',
                        plotBorderWidth: 0,
                        renderTo: 'chart',
                    },

                    title: {
                        text: 'FAIRsharing Organization Graph'
                    },

                    series: [{
                        type: 'organization',
                        name: 'Highsoft',
                        keys: ['from', 'to'],
                        data: [
                            ['Advisory Board', 'PI'],
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
                                color: 'silver',
                                dataLabels: {
                                    color: 'black'
                                },
                                height: 25
                            },
                            {
                                level: 1,
                                color: '#359154',
                                height: 25
                            },
                            {
                                level: 2,
                                color: '#E27D60'
                            },
                            {
                                level: 3,
                                color: '#27aae1'
                            },
                            {
                                level: 4,
                                color: '#27aae1'
                            }
                        ],
                        nodes: [
                            {
                                id: 'Advisory Board'
                            },
                            {
                                id: 'PI',
                                title: 'Principal Investigator and Founder',
                                name: 'Susanna-Assunta<br>Sansone',
                                image: 'https://fairsharing.org/static/img/team/susanna.jpg'
                            },
                            {
                                id: 'CFO',
                                title: 'Co-Founder',
                                name: 'Philippe Rocca-Serra',
                                column: 2,
                                image: 'https://fairsharing.org/static/img/team/phillipe.jpg',
                                layout: 'hanging'
                            },
                                {
                                id: 'Coordinator',
                                title: 'Project Coordinator',
                                name: 'Peter McQuilton',
                                column: 2,
                                image: 'https://fairsharing.org/static/img/team/pete.jpg',
                                    layout: 'hanging'
                            },
                            {
                                id: 'Product',
                                title: 'Lead Research Software Engineer',
                                name: 'Milo Thurston',
                                image: 'https://fairsharing.org/static/img/team/milo.jpg',
                                column: 3
                            },
                            {
                                id: 'Curator1',
                                title: 'Knowledge Engineer',
                                name: 'Allyson Lister',
                                image: 'https://fairsharing.org/static/img/team/allyson.jpg',
                                column: 3
                            },
                            {
                                id: 'Curator2',
                                title: 'Curator (Contract)',
                                name: 'Delphine Dauga',
                                image: 'https://fairsharing.org/static/img/team/delphine.jpg',
                                column: 3
                            },
                            {
                                id: 'Web1',
                                title: 'Research Software & Knowledge Engineer',
                                name: 'Dominique Batista',
                                image: 'https://fairsharing.org/static/img/team/dominique.jpg',
                                column: 3
                            },
                            {
                                id: 'Web2',
                                title: 'Research Software Engineer',
                                name: 'Massimiliano Izzo',
                                image: 'https://fairsharing.org/static/img/team/massi.jpg',
                                column: 3
                            },
                            {
                                id: 'Sales',
                                title: 'Research Software & Knowledge Engineer',
                                name: 'Ramon Granell',
                                image: 'https://fairsharing.org/static/img/team/ramon.jpg',
                                column: 4
                            },
                            {
                                id: 'Market',
                                name: 'Marketing team'
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

</style>