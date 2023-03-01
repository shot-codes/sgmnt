<script>
	import { T, useTexture } from '@threlte/core';
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 1.2]} lookAt={[0, 0, 0]} />

<T.AmbientLight intensity={1} />

<T.Mesh>
	<T.PlaneGeometry args={[1, 1]} />
	<T.MeshStandardMaterial map={useTexture('images/ape1.png')} opacity={1} transparent={true} />
</T.Mesh>
