<template>
    <nav class="container-fluid navTop">

        <div class="row">

            <div class="col-2">
                <img alt="Vue logo" src="../assets/FAIRsharing.svg">
            </div>

            <div class="col-10 navbar-collapse collapse show navbar">

                <div class="navContainer">
                    <p>
                        <button class="btn navButton mainButton"><router-link to="/datascriptor">DataScript</router-link></button>
                        <button class="btn navButton mainButton"><router-link to="/community">Community</router-link></button>
                    </p>
                </div>

            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "topBar",
        data: ()=>({
            initial: null
        })
    }
</script>

<style scoped>

    nav {
        background-color: #f8f8f8;
        border-bottom: 1px solid #e7e7e7;
        display: flex;
        align-items: center;
        padding: 10px 0;
    }

    input{
        background: #cacaca url("../assets/search-icon-blue.svg") no-repeat 5px 50%;
        background-size: 25px;
        border: none;
        width: 200px;
        margin-right: 12px;
        border-radius: 4px;
        padding: 10px 10px 12px 37px;
        color: #2C3E50;
    }

    form {
        display: inline-block;
    }

    button {
        margin: 0 5px;
    }

    .navTop {
        padding: 0 10px;
    }

    .navbar {
        display: flex;
    }

    .navContainer {
        margin-left:auto
    }
    .mainButton {
        color: #fff;
        background-color: #27aae1;
    }

    .secondaryButton{
        color: #fff;
        background-color: #1b6d85;
    }

    .ternaryButton {
        background-color: #95a5a6;
        color: white;
    }

</style>