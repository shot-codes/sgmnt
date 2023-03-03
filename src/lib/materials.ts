import {
	Color,
} from 'three';
import { LayerMaterial, Depth, Displace, Fresnel, Noise } from 'lamina/vanilla';

export class CustomLayerMaterial extends LayerMaterial {
	constructor(layers: Array<Depth | Displace | Fresnel>) {
		super({
			lighting: 'physical',
			roughness: 0,
			transmission: 0.9,
			reflectivity: 1,
			// @ts-expect-error - https://github.com/pmndrs/lamina/issues/25
			thickness: 0.4,
			layers
		});
	}
}

const material1 = () => {
	const displace = new Displace({
		strength: 0,
		scale: 0.5,
		type: 'perlin',
		offset: [0.09189000000357626, 0, 0],
		mode: 'normal',
		visible: true
	});
	const material = new CustomLayerMaterial([
		displace,
		new Depth({
			colorA: new Color('#000000'),
			colorB: new Color('#000000'),
			alpha: 0.1,
			near: 0.4854,
			far: 0.7661999999999932,
			origin: [-0.4920000000000004, 0.4250000000000003, 0],
			mapping: 'vector',
			mode: 'multiply',
			visible: true
		}),
		new Fresnel({
			color: new Color('#000'),
			alpha: 1,
			power: 3.3699999999999903,
			intensity: 3.8999999999999946,
			bias: -0.3430000000000002,
			mode: 'screen',
			visible: true
		})
	]);
	return {
		material,
		displace
	};
};

const material2 = () => {
	const displace = new Displace({
		strength: 1.1,
		scale: 0.5,
		type: 'perlin',
		offset: [-100, 200, -100],
		mode: 'normal',
		visible: true
	});

	const material = new LayerMaterial({
		color: '#5ea1fd',
		lighting: 'physical',
		layers: [
			displace,
			new Noise({
				colorA: new Color('#378cff'),
				colorB: new Color('#3a88fe'),
				colorC: new Color('#198dff'),
				colorD: new Color('#74a7fe'),
				alpha: 1,
				scale: 0.5,
				type: 'perlin',
				offset: [-100, 200, -100],
				mapping: 'local',
				mode: 'normal',
				visible: true
			}),

			new Fresnel({
				color: new Color('#fc0000'),
				alpha: 1,
				power: 1.55,
				intensity: 1.1,
				bias: 0,
				mode: 'screen',
				visible: true
			})
		]
	});

	return {
		material,
		displace
	};
};

const material3 = () => {
	const displace = new Displace({
		strength: 1.1,
		scale: 0.5,
		type: 'perlin',
		offset: [20, 20, 20],
		mode: 'normal',
		visible: true
	});

	const material = new LayerMaterial({
		color: '#5ea1fd',
		lighting: 'physical',
		layers: [
			displace,
			new Noise({
				colorA: new Color('#00ff00'),
				colorB: new Color('#00ff00'),
				colorC: new Color('#00ff00'),
				colorD: new Color('#00ff00'),
				alpha: 1,
				scale: 0.5,
				type: 'perlin',
				offset: [20, 20, 20],
				mapping: 'local',
				mode: 'normal',
				visible: true
			}),

			new Fresnel({
				color: new Color('#ffff00'),
				alpha: 1,
				power: 1.55,
				intensity: 1.1,
				bias: 0,
				mode: 'screen',
				visible: true
			})
		]
	});

	return {
		material,
		displace
	};
};

const material4 = () => {
	const displace = new Displace({
		strength: 1.1,
		scale: 0.5,
		type: 'perlin',
		offset: [60, -40, 80],
		mode: 'normal',
		visible: true
	});

	const material = new LayerMaterial({
		color: '#5ea1fd',
		lighting: 'physical',
		layers: [
			displace,
			new Noise({
				colorA: new Color('#ff0000'),
				colorB: new Color('#ff0000'),
				colorC: new Color('#ff0000'),
				colorD: new Color('#ff0000'),
				alpha: 1,
				scale: 0.5,
				type: 'perlin',
				offset: [60, -40, 80],
				mapping: 'local',
				mode: 'normal',
				visible: true
			}),

			new Fresnel({
				color: new Color('#ff00ff'),
				alpha: 1,
				power: 1.55,
				intensity: 1.1,
				bias: 0,
				mode: 'screen',
				visible: true
			})
		]
	});

	return {
		material,
		displace
	};
};

const material5 = () => {
	const displace = new Displace({
		strength: 1.1,
		scale: 0.5,
		type: 'perlin',
		offset: [30, -123, -203],
		mode: 'normal',
		visible: true
	});

	const material = new LayerMaterial({
		color: '#5ea1fd',
		lighting: 'physical',
		layers: [
			displace,
			new Noise({
				colorA: new Color('#ff00ff'),
				colorB: new Color('#ff00ff'),
				colorC: new Color('#ff00ff'),
				colorD: new Color('#ff00ff'),
				alpha: 1,
				scale: 0.5,
				type: 'perlin',
				offset: [30, -123, -203],
				mapping: 'local',
				mode: 'normal',
				visible: true
			}),

			new Fresnel({
				color: new Color('#ff00ff'),
				alpha: 1,
				power: 1.55,
				intensity: 1.1,
				bias: 0,
				mode: 'screen',
				visible: true
			})
		]
	});

	return {
		material,
		displace
	};
};

const material6 = () => {
	const displace = new Displace({
		strength: 1.1,
		scale: 0.5,
		type: 'perlin',
		offset: [-120, 300, 120],
		mode: 'normal',
		visible: true
	});

	const material = new LayerMaterial({
		color: '#5ea1fd',
		lighting: 'physical',
		layers: [
			displace,
			new Noise({
				colorA: new Color('#dcdd10'),
				colorB: new Color('#dcdd10'),
				colorC: new Color('#dcdd10'),
				colorD: new Color('#dcdd10'),
				alpha: 1,
				scale: 0.5,
				type: 'perlin',
				offset: [-120, 300, 120],
				mapping: 'local',
				mode: 'normal',
				visible: true
			}),

			new Fresnel({
				color: new Color('#ff0000'),
				alpha: 1,
				power: 2.55,
				intensity: 10.1,
				bias: 0,
				mode: 'screen',
				visible: true
			})
		]
	});

	return {
		material,
		displace
	};
};

export const materials = [material1, material2, material3, material4, material5, material6];
