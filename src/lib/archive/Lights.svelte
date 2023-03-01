<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	import { RectAreaLight, sRGBEncoding } from 'three';
	import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
	import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';

	const { scene, renderer } = useThrelte();

	if (renderer) {
		renderer.outputEncoding = sRGBEncoding;
	}

	const rectLight1 = new RectAreaLight(0xff0000, 2, 4, 10);
	rectLight1.position.set(-5, 5, 5);
	scene.add(rectLight1);

	const rectLight2 = new RectAreaLight(0x00ff00, 2, 4, 10);
	rectLight2.position.set(0, 5, 5);
	scene.add(rectLight2);

	const rectLight3 = new RectAreaLight(0x0000ff, 2, 4, 10);
	rectLight3.position.set(5, 5, 5);
	scene.add(rectLight3);

	scene.add(new RectAreaLightHelper(rectLight1));
	scene.add(new RectAreaLightHelper(rectLight2));
	scene.add(new RectAreaLightHelper(rectLight3));

	RectAreaLightUniformsLib.init();
</script>
