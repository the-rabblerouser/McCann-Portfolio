import { RecursivePartial } from 'react-tsparticles';

export const particleOptions: RecursivePartial<object> = {
	fullScreen: {
		enable: true,
		zIndex: 0,
	},
	background: {
		color: {
			value: '222629',
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
			value: '#61892F',
		},
		links: {
			color: '#61892F',
			distance: 50,
			enable: true,
			opacity: 1,
			width: 1,
		},
		collisions: {
			enable: true,
		},
		move: {
			direction: 'bottom',
			enable: true,
			outMode: 'out',
			random: false,
			speed: 1,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				value_area: 8000,
			},
			value: 800,
		},
		opacity: {
			value: 0.5,
		},
		shape: {
			type: 'circle',
		},
		size: {
			random: true,
			value: 2,
		},
	},
	detectRetina: true,
};
