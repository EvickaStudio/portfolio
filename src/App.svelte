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
      imageUrl:
        "https://cdn.evickastudio.de/static/media/bytefm_cover_big.webp",
      githubUrl: "https://github.com/EvickaStudio/ByteFM-Livestream-Downloader",
      badges: [
        {
          icon: "https://cdn.evickastudio.de/static/media/python_icon.svg",
          label: "Python",
        },
      ],
    },
    {
      name: "24Fire RestAPI",
      description:
        "A simple API wrapper for the 24Fire Rest API to control basic functions of a KVM server.\n'Wir sind ein prepaid-basierter Hosting-Anbieter, vertreten im NTT Rechenzentrum Frankfurt am Main mit modernen AMD EPYC KVM-Servern und im Skylink Rechenzentrum in Eygelshoven mit preiswerten Intel Xeon und leistungsstarken AMD Ryzen KVM-Servern. '",
      imageUrl: "https://cdn.evickastudio.de/static/media/evickastudio_pic.svg",
      githubUrl: "https://github.com/EvickaStudio/24-Fire-REST-API",
      badges: [
        {
          icon: "https://cdn.evickastudio.de/static/media/python_icon.svg",
          label: "Python",
        },
        {
          icon: "https://cdn.evickastudio.de/static/media/evickastudio_pic.svg",
          label: "PyPI",
        },
      ],
    },
    {
      name: "Evicka Studio",
      description:
        "A very simple Cloudflare R2 file explorer build using Python and PyQT6 ",
      imageUrl:
        "https://github.com/EvickaStudio/r2-explorer/raw/main/assets/image.png",
      githubUrl: "https://github.com/EvickaStudio/r2-explorer",
      badges: [
        {
          icon: "https://cdn.evickastudio.de/static/media/python_icon.svg",
          label: "Python",
        },
        {
          icon: "https://pypi.org/static/images/logo-small.8998e9d1.svg",
          label: "PyPI",
        },
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

<!-- <aside class="sidebar">
  <ul>
    {#each contents as item}
      <li><a href={`#${item.id}`}>{item.title}</a></li>
    {/each}
  </ul>
</aside> -->

<main class="main-content">
  <div class="content">
    <img
      src="{cdn}/static/media/header_logo.svg"
      alt="Evicka Studio Logo"
      class="profile-image"
    />
    <!-- <img
      src="{cdn}/static/media/evickastudio_pic.svg"
      alt="Evicka Studio Logo2"
      class="profile-dump"
    /> -->
    <h1 id="welcome">Hi there 👋, I'm {name}!</h1>
    <p id="about">
      I'm a Computer Science and Software Engineering student based in Germany.
      I have a passion for learning new programming languages, exploring code
      design principles, and integrating various services and techniques into my
      projects. My personal projects often involve automation and user interface
      design. Additionally, I enjoy contributing to and using open-source
      projects. Visit me on <a href="https://github.com/EvickaStudio">Github</a>.
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

  .profile-image {
    max-width: 20%;
    display: block;
    height: auto;
    margin: 0 0 50px 0; /* Increase bottom margin */
    width: 100%;
    padding-bottom: 20px;
    position: sticky; /* Make the image sticky */
    top: 0; /* Stick to the top of the container */
  }

  .profile-dump {
    max-width: 10%;
    display: block;
    height: auto;
    margin: 0 auto 20px;
    width: 20%;
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

  .main-content {
    margin-left: 10px; /* Increase margin to ensure content does not overlap with sidebar */
  }

  .content,
  .projects-section {
    padding: 10px; /* Adjust content padding */
  }

  .profile-image {
    width: 50%; /* Adjust logo size for mobile */
  }

  @media (max-width: 768px) {
    .project {
      max-width: 100%; /* Full width on smaller screens */
    }
  }

  .projects-section {
    padding: 20px;
    /* background-color: #2a2a2a; */
    color: #c9d1d9;
  }

  .projects-grid {
    grid-template-columns: 1fr; /* Stack projects on mobile */
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Space between projects */
    justify-content: center; /* Center projects horizontally */
  }

  .project {
    border: 1px solid #3b3b3b;
    background-color: #1c1c1c;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 10px;
    min-width: 280px; /* Minimum width of each project */
    max-width: 45%; /* Maximum width to allow 2 projects per row on wider screens */
    flex: 1; /* Allows the box to grow to fill available space */
  }

  .project img {
    max-width: 100%; /* Ensure image does not exceed its container */
    height: auto;
    object-fit: cover; /* Cover the entire container */
    border-radius: 4px;
  }

  @media (max-width: 902px) {
    .project img {
      width: 100%; /* Full width on smaller screens */
      height: auto; /* Adjust height automatically */
    }
  }

  /* Optional: Adjust text size for better fit */
  .project h3,
  .project p {
    font-size: 1em;
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
