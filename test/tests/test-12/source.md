<!-- Test #12 -->
<Example>
    <div slot="text">
        <div> ddd </div>

        Current active tab: {active_tab}
    </div>
</Example>

<Example>
    <div slot="text">
        <Radio value="first" bind:group={radiovalue}/> - first,
        
        <Radio value="second" bind:group={radiovalue}/> - second

        Selected: {radiovalue}
    </div>
</Example>

<Example>
    <div slot="text">
        <Radio value="first" bind:group={radiovalue}/> - first, <Radio value="second" bind:group={radiovalue}/> - second

        Selected: {radiovalue}
    </div>
</Example>

<Example>
    <div slot="text">
        <Radio/> 
        <Radio/><Radio/><Radio/> 

        Selected: {radiovalue}
    </div>
</Example>

<div>
    <Button primary icon={mdiAccountPlus}>Add User</Button> 
    <Button outline primary iconRight={mdiSend}>Submit</Button> 
    <Button error icon={mdiDelete} /> 
    <Button secondary class="is-rounded" icon="icons/svelte.svg" />
</div>