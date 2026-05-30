<script>
    let year = $state();
    let clock = new Date();
    year = clock.getFullYear();
</script>
<style>
    div {
        font-family: Epilogue;
        padding: 20px;
        background-color: rgb(122, 106, 11);
        color: white;
        text-align: center;
        z-index: 999;
        position: relative;
    }
</style>

<div>
    ©Briars and Ivy, {year}
</div>