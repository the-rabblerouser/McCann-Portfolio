import { RecursivePartial } from 'react-tsparticles';

export const options: RecursivePartial<object> = {
	fullScreen: {
		enable: true,
		zIndex: 0,
	},
	background: {
		color: {
			value: '#314455',
		},
	},
	fpsLimit: 100,
	interactivity: {
		detectsOn: 'canvas',
		events: {
			onClick: {
				enable: false,
				mode: 'push',
			},
			onHover: {
				enable: false,
				mode: 'repulse',
			},
			resize: true,
		},
		modes: {
			bubble: {
				distance: 400,
				duration: 2,
				opacity: 0.8,
				size: 40,
			},
			push: {
				quantity: 4,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
		},
	},
	particles: {
		color: {
			value: '#C96567',
		},
		links: {
			color: '#C96567',
			distance: 100,
			enable: true,
			opacity: 1,
			width: 1,
		},
		collisions: {
			enable: true,
		},
		move: {
			direction: 'top',
			enable: true,
			outMode: 'out',
			random: false,
			speed: 2,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				value_area: 5000,
			},
			value: 200,
		},
		opacity: {
			value: 0.5,
		},
		shape: {
			type: 'circle',
		},
		size: {
			random: true,
			value: 1,
		},
	},
	detectRetina: true,
};
