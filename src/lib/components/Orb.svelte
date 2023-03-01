<script lang="ts">
	import { T, InteractiveObject, useFrame } from '@threlte/core';
	import { materials } from '$lib/materials';
	import { spring } from 'svelte/motion';

	export let position: [number, number, number];
	export let materialIndex: number;
	export let scaleO = 1;

	const scale = spring(1, { stiffness: 0.05 });

	const { material, displace } = materials[materialIndex]();

	$: displace.strength = $scale;

	useFrame(() => {
		// @ts-expect-error - this property is present when running, not sure why ts doesn't pick up on it.
		displace.offset[0] += 0.005 * (1 + ($scale - 1) * 5);
	});
</script>

<T.Mesh let:ref {material} {position} scale={scaleO}>
	<!-- <InteractiveObject
		object={ref}
		interactive
		on:pointerenter={() => {
			$scale = 1.5;
		}}
		on:pointerleave={() => {
			$scale = 1;
		}}
	/> -->
	<T.SphereGeometry args={[1, 256, 256]} />
	<!-- <T.MeshStandardMaterial color="#00ff00"></T.MeshStandardMaterial> -->
</T.Mesh>
