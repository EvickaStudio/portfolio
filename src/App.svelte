<script>
  export let name, cdn;
  // Example project data including badges
  let projects = [
    {
      name: "MoodleMate",
      description:
        "Moodle-Mate is a Python program designed to fetch Moodle notifications at regular intervals (60 seconds), summarize their content using GPT-3/4, and send it summarized as a notifications via Pushbullet to your smartphone or webhook to Discord. ",
      imageUrl: "https://cdn.evickastudio.de/static/media/moodemate_cover.png",
      githubUrl: "https://github.com/EvickaStudio/Moodle-Mate",
      badges: [
        {
          icon: "https://cdn.evickastudio.de/static/media/python_icon.svg",
          label: "Python",
        },
        // { icon: "{cdn}/path/to/django-icon.svg", label: "OpenAI" },
      ],
    },
    {
      name: "ByteFM Downloader",
      description:
        "This simple Python script enables you to download the high-quality ByteFM livestream and save it as an MP3 file. ",
      imageUrl: "https://cdn.evickastudio.de/static/media/bytefm_cover.webp",
      githubUrl: "https://github.com/EvickaStudio/ByteFM-Livestream-Downloader",
      badges: [
        {
          icon: "https://cdn.evickastudio.de/static/media/python_icon.svg",
          label: "Python",
        },
      ],
    },
    {
      name: "TODO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dignissimos adipisci voluptatem, enim quidem quam iure praesentium soluta voluptatibus quis aliquid atque voluptatum laudantium delectus, hic fuga reprehenderit, velit deserunt.",
      imageUrl:
        "https://cdn.evickastudio.de/static/media/logo_evickastudio_big.webp",
      githubUrl: "https://github.com/EvickaStudio",
      badges: [
        // {
        //   icon: "https://cdn.evickastudio.de/static/media/svelte_icon.svg",
        //   label: "SvelteKit",
        // },
        // {
        //   icon: "https://cdn.evickastudio.de/static/media/tailwindcss_icon.svg",
        //   label: "Tailwind CSS",
        // },
      ],
    },
  ];

  // Define the contents variable for the sidebar
  let contents = [
    { id: "welcome", title: "Welcome" },
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
    // Add more sidebar items as needed
  ];
</script>

<aside class="sidebar">
  <ul>
    {#each contents as item}
      <li><a href={`#${item.id}`}>{item.title}</a></li>
    {/each}
  </ul>
</aside>

<main class="main-content">
  <div class="content">
    <img
      src="{cdn}/static/media/logo_evickastudio_big.webp"
      alt="Evicka Studio Logo"
      class="profile-image"
    />
    <h1 id="welcome">Welcome, I'm {name}!</h1>
    <p id="about">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
      dignissimos adipisci voluptatem, enim quidem quam iure praesentium soluta
      voluptatibus quis aliquid atque voluptatum laudantium delectus, hic fuga
      reprehenderit, velit deserunt. <a href="https://github.com/EvickaStudio"
        >Github</a
      >.
    </p>
    <button>Click</button>
  </div>

  <section id="projects" class="projects-section">
    <h2>My Projects</h2>
    <div class="projects-grid">
      {#each projects as project}
        <div class="project">
          <img src={project.imageUrl} alt={project.name + " Image"} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div class="badges">
            {#each project.badges as badge}
              <div class="badge">
                <img
                  src={badge.icon}
                  alt={badge.label}
                  title={badge.label}
                  class="badge-icon"
                />
                <span class="badge-label">{badge.label}</span>
              </div>
            {/each}
          </div>
          <a href={project.githubUrl} target="_blank">View on GitHub</a>
        </div>
      {/each}
    </div>
  </section>
</main>

<style>
  main {
    margin-left: 250px;
    padding: 20px;
  }

  .content {
    max-width: 80%;
    margin: auto;
    /* background-color: #fff; */
    padding: 20px;
    /* border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); */
  }
  .content p {
    border: 1px solid #3b3b3b;
    border-radius: 4px;
    background-color: #1c1c1c;
    padding: 10px;
    margin-top: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  /* Image styles */
  .profile-image {
    max-width: 100%;
    display: block;
    height: auto;
    margin: 0 auto 20px;
    width: 50%;
    padding-bottom: 10px;
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
    background-color: #1c1c1c;
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

  /* Adjusted Sidebar Styles */
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: auto; /* Adjust width to fit content */
    height: auto; /* Adjust height to fit content */
    background-color: #121212;
    padding: 20px;
    border: 4px; /* Add border similar to the text box */
    border-radius: 4px; /* Add border radius for rounded corners */
    margin: 20px; /* Add some margin to separate from the edge */
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
  }

  .sidebar ul li a {
    text-decoration: none;
    color: #ffffff;
  }

  .main-content {
    margin-left: 110px; /* Increase margin to ensure content does not overlap with sidebar */
  }

  /* Media queries */
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .projects-section {
    padding: 20px;
    /* background-color: #2a2a2a; */
    color: #c9d1d9;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px 0;
  }

  .project {
    border: 1px solid #3b3b3b;
    background-color: #1c1c1c;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .project img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .project h3 {
    margin-top: 10px;
    font-size: 1.25em;
  }

  .project p {
    font-size: 1em;
    line-height: 1.6;
    margin-top: 10px;
  }

  .project a {
    display: inline-block;
    margin-top: 10px;
    color: #58a6ff;
    text-decoration: none;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    background-color: #1c1c1c;
    padding: 4px 8px; /* Padding around text */
    margin-right: 5px; /* Space between badges */
    border: 1px solid #3b3b3b;
    border-radius: 4px; /* Rounded corners for the badge box */
  }

  .badge-icon {
    width: 1em; /* Make icon size relative to text size */
    height: 1em; /* Make icon size relative to text size */
    margin-right: 5px; /* Space between icon and label */
  }

  .badge-label {
    font-size: 1em; /* Match text size with surrounding content */
  }
</style>
