import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Erik', 
		cdn: 'https://cdn.evickastudio.de',
	}
});

export default app;