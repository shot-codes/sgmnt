<script lang="ts">
	import { T } from '@threlte/core';

	export let position: [number, number, number];
	export let materialIndex: number;


</script>

<T.Mesh let:ref {position} frustumCulled={false}>

	<T.SphereGeometry args={[1, 64, 64]} />
	<T.MeshStandardMaterial color="#00ff00"/>
</T.Mesh>
