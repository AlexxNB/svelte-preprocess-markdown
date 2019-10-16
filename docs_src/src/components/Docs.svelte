<script>
    import pages from './../pages/list';
</script>

{#each pages as page}
    <svelte:component this={page}/>
    <div></div>
{/each}

<style>
    div{
        height: 2rem;
    }
</style>