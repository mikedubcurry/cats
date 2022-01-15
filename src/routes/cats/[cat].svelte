<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, params }) => {
		const response = await fetch(`/cats/${params.cat}.json`);
		const { cat } = await response.json();

		return {
			props: {
				cat
			}
		};
	};
</script>

<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	export let cat;

	let index = 0;

	let { srcs } = cat;

	let duration = 500;
	let isLeft = true;
</script>

<div class="container">
	<button
		on:click={() => {
			isLeft = true;
			if (index === 0) index = srcs.length - 1;
			else index -= 1;
		}}>prev</button
	>
	{#if cat.name}
		<div class="image">
			{#key index}
				<img in:fade={{ duration }} out:fly={{ x: isLeft ? 50 : -50, duration }} src={srcs[index]} alt="a handsome kitty" />
			{/key}
		</div>
	{/if}
	<button
		on:click={() => {
			isLeft = false;
			if (index === srcs.length - 1) index = 0;
			else index += 1;
		}}>next</button
	>
</div>

<section>
	<h2>{cat.name}</h2>
	<p>{cat.bio}</p>
</section>

<style>
	img {
		height: 62.77vh;
		width: 100%;
		object-position: top;
		object-fit: cover;
		position: absolute;
		top: calc(50% - (62.77vh / 2));
		left: 0;
	}

	.container {
		width: 100%;
		height: 80vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}

	.image {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		inset: 25% 25%;
	}
</style>
