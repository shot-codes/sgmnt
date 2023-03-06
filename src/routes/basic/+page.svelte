<script lang="ts">
	import Grain from '$lib/components/Grain.svelte';
	import HeaderScene from '$lib/components/HeaderScene2.svelte';
	import { onMount } from 'svelte';

	let htmlRoot: HTMLElement | null;
	let isDarkMode = true;

	onMount(() => {
		htmlRoot = document.getElementsByTagName('html')[0];
	});

	const toggleTheme = () => {
		if (htmlRoot) {
			if (htmlRoot?.classList.contains('dark')) {
				isDarkMode = false;
				htmlRoot.classList.remove('dark');
				htmlRoot.style.backgroundColor = 'white';
			} else {
				isDarkMode = true;
				htmlRoot?.classList.add('dark');
				htmlRoot.style.backgroundColor = 'black';
			}
		}
	};
</script>

<div class="w-full h-full">
	<div class="fixed top-5 right-5 z-50">
		<button on:click={toggleTheme} class="p-3">
			{#if isDarkMode}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 20 20"
					class="fill-current text-white"
					><path d="M10 3.5a6.5 6.5 0 1 1 0 13v-13ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z" /></svg
				>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 20 20"
					class="fill-current text-black"
					><path d="M10 3.5a6.5 6.5 0 1 1 0 13v-13ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z" /></svg
				>
			{/if}
		</button>
	</div>

	<div class="flex justify-center w-full h-full">
		<HeaderScene {isDarkMode} />
	</div>

	<Grain />
</div>
