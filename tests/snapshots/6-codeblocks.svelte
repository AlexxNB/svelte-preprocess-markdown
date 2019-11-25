{@html CODEBLOCK_2}
{@html CODEBLOCK_3}
<p>Code with interpolation <code>{var}</code></p>
<p>Code without interpolation <code>&#123;var&#125;</code></p>


<script context="module">
export const META = {};
const CODEBLOCK_2 = `<pre><code class="language-js">// test
console.log();
</code></pre>
`;
const CODEBLOCK_3 = `<pre><code class="language-html">// test
&lt;script&gt;
    console.log(\`$&#123;123&#125;\`);
&lt;/script&gt;
</code></pre>
`;
</script>