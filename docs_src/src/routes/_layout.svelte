<nav>
  <a class="logo show-lg" href="/svelte-preprocess-markdown">
    Svelte<span>-Preprocess-</span>Markdown
  </a>
  <a class="logo show-xs" href="/svelte-preprocess-markdown">
    MD<span>Sv</span>
  </a>

  <ul class="links">
    <li><a href="/svelte-preprocess-markdown">Docs</a></li>
    <li><a href="/svelte-preprocess-markdown/playground" class="active">Playground</a></li>
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

  @media screen and (max-width: 599px) {
    .show-xs{ 
      display: auto;
    }

    .show-lg{ 
      display: none;
    }
  }

  @media screen and (min-width: 600px) {
    .show-xs{ 
      display: none;
    }

    .show-lg{ 
      display: auto;
    }
  }
</style>