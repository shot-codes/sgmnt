<script lang="ts">
	import { Canvas, OrbitControls, T } from '@threlte/core';
	import Orb from '$lib/components/Orb2.svelte';
	import Camera from './Camera.svelte';

	export let isDarkMode: boolean;
</script>

<div class="relative flex h-full w-full dark:text-white select-none">
	{#if isDarkMode}
		<img
			class="absolute left-[40px] top-1/4 pointer-events-none w-[250px] sm:w-[300px] md:w-[500px]"
			src="/images/logo-fill.svg"
		/>
	{:else}
		<img
			class="absolute left-[40px] top-1/4 pointer-events-none w-[250px] sm:w-[300px] md:w-[500px]"
			src="/images/logo-black-fill.svg"
		/>
	{/if}

	<!-- {#if isDarkMode}
		<img
			class="absolute left-[40px] md:top-[calc(0.25*100vh+200px)] md:top-[calc(0.25*100vh+200px)] top-[calc(0.25*100vh+100px)] pointer-events-none w-[150px] sm:w-[200px] md:w-[400px]"
			src="/images/moto-fill.svg"
		/>
	{:else}
		<img
			class="absolute left-[40px] md:top-[calc(0.25*100vh+200px)] md:top-[calc(0.25*100vh+200px)] top-[calc(0.25*100vh+100px)] pointer-events-none w-[150px] sm:w-[200px] md:w-[400px]"
			src="/images/moto-black-fill.svg"
		/>
	{/if} -->

	<div class="absolute h-full w-full">
		<Canvas>
			<Camera />

			<T.DirectionalLight castShadow position={[10, 2, -10]} />
			<T.AmbientLight intensity={0.2} />

			<T.Group>
				<Orb position={[-4, -0.9, -1.5]} materialIndex={0} scaleO={0.5} />
				<Orb position={[-2, 0, 1]} materialIndex={1} />
				<Orb position={[-10, 4, -4]} materialIndex={2} />
				<Orb position={[-40, -2, -12]} materialIndex={1} />
				<Orb position={[-10, -2, -1]} materialIndex={3} />
				<Orb position={[-20, -2, 6]} materialIndex={5} />
			</T.Group>
		</Canvas>
	</div>
	{#if isDarkMode}
		<img
			class="absolute left-[45px] top-[calc(100vh*0.25+5px)] w-[250px] sm:w-[300px] md:w-[500px] pointer-events-none"
			src="/images/logo-stroke.svg"
		/>
	{:else}
		<img
			class="absolute left-[45px] top-[calc(100vh*0.25+5px)] w-[250px] sm:w-[300px] md:w-[500px] pointer-events-none"
			src="/images/logo-black-stroke.svg"
		/>
	{/if}

	<!-- {#if isDarkMode}
		<img
			class="absolute left-[40px] md:top-[calc(0.25*100vh+200px)] md:top-[calc(0.25*100vh+200px)] top-[calc(0.25*100vh+100px)] pointer-events-none w-[150px] sm:w-[200px] md:w-[400px]"
			src="/images/moto-stroke.svg"
		/>
	{:else}
		<img
			class="absolute left-[40px] md:top-[calc(0.25*100vh+200px)] md:top-[calc(0.25*100vh+200px)] top-[calc(0.25*100vh+100px)] pointer-events-none w-[150px] sm:w-[200px] md:w-[400px]"
			src="/images/moto-black-stroke.svg"
		/>
	{/if} -->

	{#if isDarkMode}
		<img
			class="absolute right-[40px] bottom-[100px] pointer-events-none w-[50px]"
			src="/images/logo-multi.svg"
		/>
	{:else}
		<img
			class="absolute right-[40px] bottom-[100px] pointer-events-none w-[50px]"
			src="/images/logo-multi-black.svg"
		/>
	{/if}
</div>

<style>
	p {
		line-height: 100%;
	}
</style>
