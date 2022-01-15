<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch('/cats/all.json');
		const { cats } = await response.json();

		return {
			props: {
				cats
			}
		};
	};
</script>

<script lang="ts">
	export let cats;

	console.log(cats);

	let srcs = cats.flatMap((cat) => {
		return cat.srcs;
	});
</script>

<div class="container">
	{#each srcs as src}
	<div class="letterbox">
			<a href={src.includes('hump') ? '/cats/humphrey' : '/cats/hamilton'}>
			<img {src} alt="a handsome kitty" />
		</a>
	</div>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.5rem;
	}
	img {
		max-width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.letterbox {
		background-color: #ccc;
		padding: 0.5rem 0.25rem;
	}
</style>
