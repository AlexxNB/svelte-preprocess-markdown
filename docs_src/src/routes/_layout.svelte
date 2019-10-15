<nav>
  <a class="logo" href="/">
    Svelte<span>-Preprocess-</span>Markdown
  </a>

  <ul class="links">
    <li><a href="/">Docs</a></li>
    <li><a href="/repl" class="active">REPL</a></li>
    <li><a href="https://github.com/AlexxNB/svelte-preprocess-markdown" target="blank">GitHub</a></li>
  </ul>
</nav>

<main>
  <slot />
</main>


<style>
  main {
    height: 100vh;
    padding-top:50px;
    overflow-x: hidden;
  }

  nav { 
		position: fixed;
		top:0px;
		width:100%;
		box-shadow: 0 0 15px -5px var(--dark);
		background-color:#FFF;
    z-index: 9999;
    height:50px;
  }
  
  .logo{
    display: block;
    border:none;
    float:left;
    line-height:50px;
    margin-left: 10px;
    color: var(--prime);
    font-weight: 600;
    font-size:25px;
  }

  .logo > span{
    color: var(--grey);
    font-weight: 300;
  }

  .links {
    display: block;
    padding:0px;
    margin-right:10px;
    float:right;
    line-height:50px;
  }

  .links li{
    display: inline-block;
  }

  .links li a{
    border:none;
    margin: 0px 10px;
  }

  .links li a:hover{
    color: var(--grey)
  }
</style>