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
                        <div class="col-3 logoZone">
                            <img :src="item.logo" class="logo">
                        </div>
                        <div class="col-9 textZone">
                            <h5 class="">
                                {{item.name}}
                                <hr>
                                <span class="quote">"{{item.quote}}"</span>
                            </h5>
                            <div class="itemText">{{item.text}}</div>
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
                        text: 'The Final report and action plan from the European Commission expert group on FAIR data (2018).'
                    },
                    {
                        name: "European Research Council (ERC)",
                        quote: "Open Research Data and Data Management Plans",
                        link: "",
                        logo: require('../../assets/community/erc.png'),
                        text: 'Information for ERC grantees from the ERC Scientific Council (2018).'
                    },
                    {
                        name: "EUK Jisc",
                        quote: "FAIR in practice",
                        link: "",
                        logo: require('../../assets/community/fair_in_practice.png'),
                        text: 'This report (2018) explores FAIR with stakeholders in the UK academic research community. Its aims were to understand how using or being inspired by these principles improves the findability, accessibility, interoperability and reuse of research data, including consideration of disciplinary differences.'
                    },
                    {
                        name: "Science Europe",
                        quote: "Framework for Discipline-specific Research Data Management",
                        link: "",
                        logo: require('../../assets/community/science_europe_guidance.png'),
                        text: 'This report (2018) presents a framework for the creation of domain-specific protocols that can be used as standardised templates, reducing the administrative burden on both researchers, research organisations, and funders.'
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
        min-height:220px;
        display: flex;
        flex-direction: column;
    }

    .grid {
        padding:0 20px 20px 20px;
    }

    h5 {
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

    .itemText {
        margin-bottom:20px;
    }

    .logoZone {
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .card-body, .textZone {
        justify-content: center;
        align-content: center;
        display: flex;
    }

</style>