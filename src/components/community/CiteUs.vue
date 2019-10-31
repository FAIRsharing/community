<template>
    <div class="citeUs">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 imageZone">
                    <img src="../../assets/community/fairsharing_paper.jpg">
                </div>
                <div class="col-12">
                    <p class="title">
                        <span>“FAIRsharing as a community approach to standards, repositories and policies”</span>
                        <br> OPEN CC-BY.
                    </p>
                    <hr>
                </div>

                <div class="col-12 textZone">
                    <p>
                        Authored by 68 international authors representing different stakeholder groups:
                    (i) researchers in academia, industry and government,
                    (ii) scholarly publishers,
                    (iii) funders and other data policy makers,
                    (iv) research data facilitators, librarians and trainers,
                    (v) infrastructure providers, developers and curators of resources; and
                        (vi) learned societies, unions and associations.
                    </p>

                    <p>
                        We have come together as a community, representing the core adopters, advisory board members,
                    and/or key collaborators of FAIRsharing to present its mission and work, and show the role
                    FAIRsharing plays in informing and educating each stakeholder group to maximize the visibility and
                    adoption of standards, databases and repositories within their community and in data policies.
                    </p>
                </div>

            </div>

        </div>


    </div>
</template>

<script>
    export default {
        name: "CiteUs"
    }
</script>

<style scoped>
    p.title span {
        color:#27aae1;
        font-weight:bolder;
        font-size: 1rem;
    }
     p.title {
         text-align: center;
     }

    .imageZone {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .imageZone {
        margin-bottom: 20px;
    }

    .textZone {
        text-align: justify;
    }

    hr {
        margin-bottom:30px;
    }

</style>