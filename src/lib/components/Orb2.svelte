<script lang="ts">
	import { T } from '@threlte/core';
	import { spring } from 'svelte/motion';

	export let position: [number, number, number];
	export let materialIndex: number;
	export let scaleO = 1;


</script>

<T.Mesh let:ref {position}  scale={scaleO} frustumCulled={false}>

	<T.SphereGeometry args={[1, 256, 256]} />
	<T.MeshStandardMaterial color="#00ff00"/>
</T.Mesh>
