<!-- Test #12 -->
<Example><div slot="text"><div>ddd</div>
<p>Current active tab: {active_tab}</p>
</div></Example>
<Example><div slot="text"><p><Radio value="first" bind:group={radiovalue}/>- first,</p>
<p><Radio value="second" bind:group={radiovalue}/>- second</p>
<p>Selected: {radiovalue}</p>
</div></Example>
<Example><div slot="text"><p><Radio value="first" bind:group={radiovalue}/>- first,<Radio value="second" bind:group={radiovalue}/>- second</p>
<p>Selected: {radiovalue}</p>
</div></Example>
<Example><div slot="text"><p><Radio/><br><Radio/><Radio/><Radio/></p>
<p>Selected: {radiovalue}</p>
</div></Example>
