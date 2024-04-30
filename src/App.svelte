<script>
  // load variables name and cdn from main.js
  export let name, cdn;
</script>

<main class="container">
  <div class="content">
    <img
      src="{cdn}/static/media/header_github_transparent.webp"
      alt="Github profile on a transparent background"
      class="profile-image"
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
  /* General styles */
  main {
    margin: 0 auto;
    max-width: 800px;
    padding: 1em;
    text-align: left;
  }

  .container {
    display: flex;
    justify-content: center;
  }

  .content {
    max-width: 50%;
    text-align: left;
  }

  /* Image styles */
  .profile-image {
    display: block;
    height: auto;
    margin: 0 auto;
    width: 50%;
  }

  /* Text styles */
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

  /* Button styles */
  button {
    background-color: #21262d;
    border: none;
    color: #c9d1d9;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    margin: 20px 2px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
  }

  /* Media queries */
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>