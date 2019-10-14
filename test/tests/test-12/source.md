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