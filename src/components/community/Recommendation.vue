<template>
    <div class="recommendation">
        <div class="textImportant">
            A selection of funder-driven policies and reports recommending FAIRsharing
        </div>
        <div class="grid">
            <div class="card item"
                 v-for="item in gridItems"
                 :key="'item'+item.name">

                <div class="container-fluid card-body">
                    <div class="row">
                        <div class="col-3">
                            <img :src="item.logo" class="logo">
                        </div>
                        <div class="col-9">
                            <h4 class="">
                                {{item.name}}
                                <hr>
                                <span class="quote">"{{item.quote}}"</span>
                            </h4>
                            {{item.text}}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recommendation",
        data() {
            return {
                gridItems: [
                    {
                        name: "EU European Open Science Cloud (EOSC)",
                        quote: "Turning FAIR into reality",
                        link: "",
                        logo: require('../../assets/community/fair_into_reality.png'),
                        text: ''
                    },
                    {
                        name: "European Research Council (ERC)",
                        quote: "Open Research Data and Data Management Plans",
                        link: "",
                        logo: require('../../assets/community/erc.png'),
                        text: ''
                    },
                    {
                        name: "EUK Jisc",
                        quote: "FAIR in practice",
                        link: "",
                        logo: require('../../assets/community/fair_in_practice.png'),
                        text: 'Identified 16 key drivers to FAIRification divided in four categories (political, economical, social and technological) and seven recommendations for FAIR support'
                    },
                    {
                        name: "Science Europe",
                        quote: "Framework for Discipline-specific Research Data Management",
                        link: "",
                        logo: require('../../assets/community/science_europe_guidance.png'),
                        text: 'Participation in development of Data Domain Protocol (DDP) for Data Management Plan (DMP). Recommands FAIRsharing.org as the metadata and standards registry for life-sciences'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .textImportant {
        text-align: center;
        font-size: 1.1rem;
        font-weight: bolder;
    }

    .grid, .card {
        margin-top:20px;
    }

    h4 {
        text-align: center;
        font-size: 1.2rem;
    }

    img{
        width:80%;
        transition: all 0.5s;
    }

    .quote {
        font-size: 1rem;
        color:#27aae1;
    }

</style>