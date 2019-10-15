<script>
    import pages from './../pages/list';
</script>

{#each pages as page}
    <svelte:component this={page}/>
{/each}