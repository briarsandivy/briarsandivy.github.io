<script>
    import { base } from "$app/paths";
    import { onMount } from "svelte";

    onMount(() => {
        setTimeout(() => {
            window.location.href = base + "/"
        }, 1000)
    })
</script>

<h1>You shouldn't be here</h1>
<h2>We'll take you back to the homepage. Just hang tight!</h2>
