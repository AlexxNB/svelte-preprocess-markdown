<script context="module">
export const META = {};
</script>
<!-- Test #12 -->
<Example><div slot="text"><div>ddd</div>
<p>Current active tab: {active_tab}</p>
</div></Example>
<Example><div slot="text"><p><Radio value="first" bind:group={radiovalue}/> - first,</p>
<p><Radio value="second" bind:group={radiovalue}/> - second</p>
<p>Selected: {radiovalue}</p>
</div></Example>
<Example><div slot="text"><p><Radio value="first" bind:group={radiovalue}/> - first, <Radio value="second" bind:group={radiovalue}/> - second</p>
<p>Selected: {radiovalue}</p>
</div></Example>
<Example><div slot="text"><Radio/> 
<Radio/><Radio/><Radio/> 
<p>Selected: {radiovalue}</p>
</div></Example>
<div><Button primary icon={mdiAccountPlus}>Add User</Button> 
<Button outline primary iconRight={mdiSend}>Submit</Button> 
<Button error icon={mdiDelete} /> 
<Button secondary class="is-rounded" icon="icons/svelte.svg" />
</div>
