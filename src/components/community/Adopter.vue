<template>
    <div>
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
        <b>We cannot list all of our adopters, but list here those publishers that use FAIRsharing to define and refine their data policy.</b>

        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <div class="graph">
                        <highcharts :options="chartOptions" class="shadowBox"></highcharts>
                    </div>
                </div>
                <div class="col-6">
                    <div class="grid container-fluid">
                        <div class="row">
                            <div class="col col-4">
                                <div class="card">
                                    eLife
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="card">
                                    Elsevier
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="card">
                                    EMBO Press
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="card">
                                    Springer Nature BioMed Central
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="card">
                                    GigaScience
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="card">
                                    Public Library of Science (PLOS)
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="card">
                                    Springer Nature BioMed Central
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="card">
                                    Taylor and Francis
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="card">
                                    Wiley
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="card">
                                    Wellcome Open Research
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
                        type: 'bubble',
                        zoomType: 'xy',
                        plotShadow: true,
                        renderTo: 'container',
                        margin: 0,
                        plotBackgroundColor: '#f8f8f8',
                    },
                    legend: {
                        enabled: true
                    },
                    title: {
                        text: 'FAIRsharing Adopters'
                    },
                    xAxis: {
                        visible: false
                    },
                    yAxis: {
                        visible: false
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<table>',
                        pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                        '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
                        '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
                        '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
                        footerFormat: '</table>',
                        followPointer: true
                    },
                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}'
                            }
                        }
                    },
                    series: [{
                        data: [
                            { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
                            { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
                            { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
                            { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
                            { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
                            { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
                            { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
                            { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
                            { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
                            { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
                            { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
                            { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
                            { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
                            { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
                            { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
                        ]
                    }]
                }
            }
        }
    }
</script>

<style scoped>

    .graph, .grid {
        margin-top: 20px;
    }

    .grid {
        border:1px solid #ccc;
        box-shadow: 3px 3px #ccc;
        padding:10px;
    }

</style>