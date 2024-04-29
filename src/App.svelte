<script>
	export let name;
</script>

<main class="container">
	<img src="https://cdn.evickastudio.de/static/media/header_github_transparent.webp" alt="Github profile on a transparent background" />
	<h1>Welcome, I'm {name}!</h1>
	<p>I'm a software engineer specialized in frontend and backend development for complex scalable web apps. I write about software development on my blog. If you find my content useful, you can support me by following me on <a href="https://github.com/EvickaStudio">Github</a>.</p>
	<button>Contact Me</button>
</main>

<style>
	.container {
		background-color: #0d1117;
		color: #c9d1d9;
	}

	main {
		text-align: center;
		padding: 2em;
		max-width: 800px;
		margin: 0 auto;
	}

	img {
		width: 100%;
		height: auto;
	}

	h1 {
		color: #c9d1d9;
		font-size: 2em;
		font-weight: 600;
	}

	p {
		font-size: 1em;
		line-height: 1.6;
	}

	a {
		color: #58a6ff;
	}

	button {
		background-color: #21262d;
		color: #c9d1d9;
		border: none;
		padding: 10px 20px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 20px 2px;
		cursor: pointer;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>