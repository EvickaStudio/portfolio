import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Erik', // Pass a prop to the App component
	}
});

export default app;