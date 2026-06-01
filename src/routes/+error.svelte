<script>
    import { page } from "$app/state";
    import { base } from "$app/paths";
</script>
<style>
    h3 {
        margin-bottom: 100px;
    }
</style>

<h1>Error</h1>
<h2>{page.status}</h2>
<h3><button onclick={() => {window.location.href = base + "/"}}>Head to Homepage</button></h3>