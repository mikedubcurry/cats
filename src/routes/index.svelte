<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let index = 0;

	let srcs = [
		'https://images.unsplash.com/photo-1601373878438-969856cc4d1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		'https://images.unsplash.com/photo-1601275226085-f446243383cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
	];

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

	<div class="image">
		{#key index}
			<img
				in:fade={{ duration: 200 }}
				out:fly={{ x: isLeft ? 100 : -100, duration: 200 }}
				src={srcs[index]}
				alt="a handsome kitty"
			/>
		{/key}
	</div>

	<button
		on:click={() => {
			isLeft = false;
			if (index === srcs.length - 1) index = 0;
			else index += 1;
		}}>next</button
	>
</div>

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
		height: 100%;
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
