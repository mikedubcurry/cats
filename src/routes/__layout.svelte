<div class="wrapper">
	<header>
		<h1>Pet A Cat</h1>
		<p>A delightful library of cat pictures you can pet!</p>
		<a href="http://twitter.com/mikedubcurry">@mikedubcurry</a>
	</header>

	<main><slot /></main>
</div>

<style>
	:global(html, body, #svelte) {
		height: 100%;
	}

	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.wrapper {
		min-height: 100%;
		display: grid;
		grid-template-columns: 38.22% 61.77%;
	}

	header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 38.22%;
		align-self: center;
	}
  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
