<template>
    <div class="container-fluid governance">
        <!--<div id="governance">
            <highcharts :options="chartOptions" class="shadowBox"></highcharts>
        </div>-->

        <div class="board container-fluid">


            <div class="row peopleRow">

                <div class="col-lg-6 col-xl-6 col-sm-12 col-md-12">
                    <div class="col-12 personRow"
                         v-for="(team, teamName) in getTeams"
                         :key="'team'+ team">

                        <h6 v-bind:class="{
                        'green': teamName === 'Management',
                        'orange': teamName === 'Curation',
                        'blue': teamName === 'Technical'
                        }">
                            {{teamName}} team:
                            <hr>
                        </h6>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="column col-lg-6 col-xl-6 col-xxl-4 col-md-4 col-sm-6"
                                     v-for="(member, index) in team"
                                     :key="'member'+index">
                                    <div class="card person"
                                         :class="member.role">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <div class="row">
                                                    <div class="col-3 imageZone">
                                                        <img class="faces" :src="member.image">
                                                    </div>
                                                    <div class="col-9 textZone">
                                                        <div class="name" v-html="member.name"></div>
                                                        <hr class="white">
                                                        <div class="role" v-html="member.title"></div>
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

                <div class="col-lg-6 col-xl-6 col-sm-12 col-md-12">
                    <div class="col-12 personRow advisoryRow">
                        <h6 class="grey">
                            Advisory Board <hr>
                        </h6>

                        <ul class="advisoryBoard">
                            <li v-for="(memberVal, memberName, index) in getBoard"
                                :key="'advisoryMember'+index">
                                <b>{{memberName | trim}}:</b> {{memberVal}}
                                <hr v-if="index===1">
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    let nodes = {
        "Management": [
            {
                id: 'PI',
                title: 'Principal Investigator & Founder',
                name: 'Susanna-Assunta Sansone',
                image: 'https://fairsharing.org/static/img/team/susanna.jpg',
                width: 250,
                role: 'PI',
            },
            {
                id: 'CFO',
                title: 'Co-Founder',
                name: 'Philippe Rocca-Serra',
                column: 1,
                image: 'https://fairsharing.org/static/img/team/phillipe.jpg',
                layout: 'hanging',
                width: 200,
                role: 'PI',
            },
            {
                id: 'Coordinator',
                title: 'Project Coordinator & Curator',
                name: 'Peter McQuilton',
                column: 1,
                image: 'https://fairsharing.org/static/img/team/pete.jpg',
                layout: 'hanging',
                width: 200,
                role: 'PI',
            }]
        ,
        "Curation": [
            {
                id: 'Curator1',
                title: 'Knowledge Engineer',
                name: 'Allyson Lister',
                image: 'https://fairsharing.org/static/img/team/allyson.jpg',
                column: 2,
                width: 200,
                role: 'Curation',
            },
            {
                id: 'Curator2',
                title: 'Curator (Contract)',
                name: 'Delphine Dauga',
                image: 'https://fairsharing.org/static/img/team/delphine.jpg',
                column: 2,
                width: 200,
                role: 'Curation',
            }
        ],
        "Technical": [
            {
                id: 'Product',
                title: 'Lead Research Software Engineer',
                name: 'Milo Thurston',
                image: 'https://fairsharing.org/static/img/team/milo.jpg',
                column: 2,
                width: 200,
                role: 'Technical',
            },
            {
                id: 'Web1',
                title: 'Research Software & Knowledge Engineer',
                name: 'Dominique Batista',
                image: 'https://fairsharing.org/static/img/team/dominique.jpg',
                column: 2,
                width: 220,
                role: 'Technical',
            },
            {
                id: 'Web2',
                title: 'Research Software Engineer',
                name: 'Massimiliano Izzo',
                image: 'https://fairsharing.org/static/img/team/massi.jpg',
                column: 2,
                width: 220,
                role: 'Technical',
            },
            {
                id: 'Sales',
                title: 'Research Software & Knowledge Engineer',
                name: 'Ramon Granell',
                image: 'https://fairsharing.org/static/img/team/ramon.jpg',
                column: 3,
                width: 200,
                role: 'Technical',
            }
        ],
        "Advisory Board": {
            "Emma Ganley": "(PLOS) Co-chair",
            "Varsha Khodiyar": "(NPG) Co-chair",
            "Michael Ball": "(ESRC)",
            "Theo Bloom": "(BMJ)",
            "Jennifer Boyd": "(OUP)",
            "Dave Carr": "(The Wellcome Trust and Wellcome Open Research)",
            "Helena Cousijn": "(Datacite)",
            "Scott Edmunds ": "(GigaScience, BGI)",
            "Dominic Fripp": "(JISC)",
            "Chris Graf": "(Wiley)",
            "Simon Hodson": "(CODATA), Co-Chair of the RDA/Force11 WG",
            "Mike Huerta": "(Coordinator of Data & and Open Science Initiative, Associate Director for Programme Development at the NIH National Library of Medicine)",
            "Amye Kenall": "(BMC)",
            "Rebecca Lawrence": "(F1000), Co-Chair of the RDA/Force11 WG",
            "Thomas Lemberger": "(EMBO Press)",
            "Jennifer Lin": "(CrossRef)",
            "Luiz Olavo Bonino": "(GO-FAIR)",
            "Gabriella Rustici": "(ELIXIR UK Node, University of Cambridge, UK)",
            "Marina Soares E Silva": "(Elsevier)",
            "Imma Subirats": "(Information Management Officer, FAO of the United Nations, Italy)",
            "Marta Teperek ": "(Data Stewardship Coordinator, TUDelft, The Netherlands)"
        }
    };

    export default {
        name: "Governance",
        components: {
        },
        computed: {
            getTeams: function(){
                let output = {};
                for (let teamName in nodes){
                    if (teamName !== 'Advisory Board') {
                        output[teamName] = nodes[teamName];
                    }
                }
                return output;
            },
            getBoard: function(){
                return nodes['Advisory Board'];
                /*
                const ordered = {};
                Object.keys(nodes['Advisory Board']).sort().forEach(function(key) {
                    ordered[key] = nodes['Advisory Board'][key];
                });
                return ordered;
                */
            }
        },
        filters: {
            trim: function(string) {
                return string.trim()
            }
        }
    }

</script>

<style>

    #governance, .shadowBox {
        max-height: 600px;
    }

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

    .peopleRow .card{
        color:white;
        box-shadow: none;
    }

    .card-body {
        padding: 5px !important;
    }

    .PI {
        background:#359154 !important;
    }

    .Lead {
        background:#e67e22 !important;
    }
    .Technical {
        background:#27aae1 !important;
    }
    .Curation {
        background: #e67e22 !important;
    }


    .green { color:#359154; }
    .orange { color:#e67e22; }
    .blue { color:#27aae1; }
    .grey { color: rgba(0,0,0,0.5)}

    .green hr,
    .orange hr,
    .blue hr,
    .grey hr {
        margin:5px 0 10px 0 !important;
        border: 0 !important;
        height: 2px !important;
    }

    .green hr {
        background-image: linear-gradient(to right, rgba(53,145,84, 1), rgba(53,145,84, 0.4), rgba(53,145,84, 0));
    }

    .orange hr {
        background-image: linear-gradient(to right, rgba(230,126,34, 1), rgba(230,126,34, 0.4), rgba(230,126,34, 0));
    }

    .blue hr {
        background-image: linear-gradient(to right, rgba(39,170,225, 1), rgba(39,170,225, 0.4), rgba(39,170,225, 0));
    }

    .grey hr {
        background-image: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0, 0.2), rgba(0,0,0, 0));
    }

    h6 {
        font-size: 1.3rem !important;
    }

    .faces {
        border-radius:50%;
    }

    .name {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 1rem;
    }

    .role {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 0.7rem;
        font-style: italic;
    }

    hr.white {
        margin:5px 0 !important;
        border: 0 !important;
        height: 1px !important;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
    }

    .imageZone {
        display:flex;
        align-items: center;
    }

    .person{
        height: 100%;
    }

    .personItem {
        margin-bottom:20px;

    }

    .personRow {
        margin-bottom:30px;
    }

    .advisoryRow .card-body{
        background-color: rgba(0,0,0,0.3);
    }

    .column {
        margin-bottom:20px;
    }

    .textZone {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

</style>