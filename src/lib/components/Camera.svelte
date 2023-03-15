<script lang="ts">
	import { OrbitControls, T, TransformableObject, useThrelte } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	import { Vector3, Mesh } from 'three';
	import { spring } from 'svelte/motion';

	const { pointer, renderer } = useThrelte();
	let cameraOrigin = new Vector3(10, 0, 0);
	let cameraPosition = new Vector3(10, 0, 0);
	let mesh: Mesh;

	$: { 
    if(renderer) {
      renderer.debug.checkShaderErrors = false;
      console.log("disabled shader check");
    }
  }

	const cameraPositionSpring = spring([10, 0, 0]);
	$: {
		cameraPositionSpring.set([
			cameraOrigin.x,
			cameraOrigin.y + 1 * $pointer.y,
			cameraOrigin.z - 1 * $pointer.x
		]);
	}
	$: {
		cameraPosition.set(
			$cameraPositionSpring[0],
			$cameraPositionSpring[1],
			$cameraPositionSpring[2]
		);
		cameraPosition = cameraPosition;
	}
</script>

<T.PerspectiveCamera let:ref makeDefault fov={24}>
	<TransformableObject object={ref} position={cameraPosition} />
	<OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
</T.PerspectiveCamera>
