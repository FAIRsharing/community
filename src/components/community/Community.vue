<template>
    <div class="communityPage">

        <h1>FAIRsharing is a community-driven resource and has a growing number of users, adopters, collaborators and activities working to enable the FAIR Principles. </h1>

        <div class="container-fluid mainContainer">

            <div class="containerBorder">
                <div class="row">

                    <div class="col col-4">
                        <div class="card">
                            <div class="card-header">
                                <h4>Activities</h4>
                            </div>
                            <div class="card-body">
                                <activity></activity>
                            </div>
                        </div>
                    </div>

                    <div class="col col-4">
                        <div class="card">
                            <div class="card-header">
                                <h4>Adopters</h4>
                            </div>
                            <div class="card-body">
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
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col col-4">
                        <div class="card">
                            <div class="card-header">
                                <h4>Recommendations</h4>
                            </div>
                            <div class="card-body">
                                We will list a summary of people recommending us here.
                            </div>
                        </div>
                    </div>

                    <div class="col col-4">
                        <div class="card">
                            <div class="card-header">
                                <h4>Governance</h4>
                            </div>
                            <div class="card-body">
                                A few facts about the governance and technical teams.
                            </div>
                        </div>
                    </div>

                    <div class="col col-4">
                        <div class="card">
                            <div class="card-header">
                                <h4>Citing Us</h4>
                            </div>
                            <div class="card-body">
                                How to cite FAIRsharing.org in your articles, papers ...
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
    export default {
        name: "Community",
        components: {
            Activity
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
        padding: 2px 10px;
    }

    .col {
        margin-bottom: 10px;
    }

</style>