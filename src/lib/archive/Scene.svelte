<script>
	import { Canvas, T, OrbitControls } from '@threlte/core';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import Lights from './Lights.svelte';
</script>

<div class="bg-black">
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[0, 5, -15]} fov={50}>
			<OrbitControls target={{ y: 0.5 }} />
		</T.PerspectiveCamera>

		<!-- Floor -->
		<T.Mesh>
			<T.BoxGeometry args={[2000, 0.1, 2000]} />
			<T.MeshStandardMaterial color={'#80808'} roughness={0.1} metalness={0} />
		</T.Mesh>

		<Lights />
	</Canvas>
</div>

<style>
	div {
		height: 100%;
		width: 100%;
	}
</style>
