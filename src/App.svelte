<script>
  export let name, cdn;
</script>

<main class="container">
  <div class="content">
    <img
      src="{cdn}/static/media/header_github_transparent.webp"
      alt="Github profile on a transparent background"
    />
    <h1>Welcome, I'm {name}!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
      dignissimos adipisci voluptatem, enim quidem quam iure praesentium soluta
      voluptatibus quis aliquid atque voluptatum laudantium delectus, hic fuga
      reprehenderit, velit deserunt. <a href="https://github.com/EvickaStudio"
        >Github</a
      >.
    </p>
    <button>Touch me</button>
  </div>
</main>

<style>
  main {
    text-align: left; /* Change this from center to left */
    padding: 1em;
    max-width: 800px;
    margin: 0 auto;
  }

  .container {
    display: flex;
    justify-content: center;
  }

  .content {
    text-align: left;
    max-width: 50%; /* Adjust this to change the width of the text block */
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

  img {
    width: 50%; /* Change this from 100% to 50% */
    height: auto;
    margin: 0 auto; /* Center the image */
    display: block; /* Needed for margin: auto to work */
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
