<template>
    <div class="communityPage">

        <h1>FAIRsharing is a community-driven resource and has a growing number of users, adopters, collaborators and activities working to enable the FAIR Principles. </h1>

        <div class="container-fluid mainContainer">

            <div class="">
                <div class="row">

                    <div class="colMargin col-lg-4 col-xl-4 col-sm-12 col-md-12">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="card">
                                    <div class="card-header">
                                        <h4>Recommendations</h4>
                                    </div>
                                    <div class="card-body">
                                        <recommendation></recommendation>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="card">
                                    <div class="card-header">
                                        <h4>Citing Us</h4>
                                    </div>
                                    <div class="card-body">
                                        <cite-us></cite-us>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="colMargin col-lg-8 col-xl-8 col-sm-12 col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h4>Adopters</h4>
                            </div>
                            <div class="card-body">
                                <adopter></adopter>
                            </div>
                        </div>
                    </div>

                    <div class="colMargin col-lg-4 col-xl-4 col-sm-12 col-md-12">
                        <div class="card" style="height:100%">
                            <div class="card-header">
                                <h4>Activities</h4>
                            </div>
                            <div class="card-body">
                                <activity></activity>
                            </div>
                        </div>
                    </div>

                    <div class="colMargin col-lg-8 col-xl-8 col-sm-12 col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h4>Governance</h4>
                            </div>
                            <div class="card-body">
                                <governance></governance>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Activity from './Activity.vue'
    import Adopter from './Adopter.vue'
    import Recommendation from './Recommendation.vue'
    import Governance from './Governance.vue'
    import CiteUs from './CiteUs.vue'

    export default {
        name: "Community",
        components: {
            Activity,
            Adopter,
            Recommendation,
            Governance,
            CiteUs
        }
    }
</script>

<style scoped>

    h1 {
        text-align: center;
        margin: 20px auto 20px auto;
        font-size:30px;
        width:70%;
        right:0;
        left:0;
    }

    h4 {
        margin-bottom: 0;
        color:#27aae1;
    }

    .mainContainer {
        padding:10px;
    }

    .containerBorder {
        border: 1px solid #ccc;
        box-shadow: 3px 3px #ccc;
        padding:10px;
    }

    .card {
        padding: 0;
    }

    .card-header {
        padding: 5px 10px;
    }

    .row {
        margin-bottom:30px;
    }

    .govCard {
        margin-top: 20px;
    }

</style>