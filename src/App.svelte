<script>
    import { onMount } from 'svelte';
    import './app.css';

    onMount(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-on-scroll');
                    }
                });
            },
            {
                threshold: 0.1,
            },
        );

        document.querySelectorAll('.project').forEach(el => {
            observer.observe(el);
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    });
    export let name, cdn;

    import { projects } from './Data.js';
    // import { blogs } from './Data.js';

    let currentTheme = 'dark'; // default theme
    
    const themes = ['dark', 'retro', 'light'];
    
    function toggleTheme() {
        const currentThemeIndex = themes.indexOf(currentTheme);
        const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
        currentTheme = themes[nextThemeIndex];
        document.documentElement.className = currentTheme;
    }
</script>



<main class="main-content">
    <div class="content">
        <img
            src="{cdn}/static/media/header_logo.svg"
            alt="Evicka Studio Logo"
            class="profile-image"
        />
        <h1 id="welcome">Hello(), I'm</h1>
        <h42 id="name">{name}</h42>
        <p id="about">
            I'm a Computer Science and Software Engineering student based in
            Germany. I have a passion for learning new programming languages,
            exploring code design principles, and integrating various services
            and techniques into my projects. My personal projects often involve
            automation and user interface design. Additionally, I enjoy
            contributing to and using open-source projects.
        </p>
        <!-- Button for my github -->
    </div>

    <section id="projects" class="projects-section">
        <h2>My Projects</h2>
        <div class="projects-grid">
            {#each projects as project}
                <div class="project animate-on-scroll">
                    <img src={project.imageUrl} alt={project.name + ' Image'} />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>
                        <span class="label">Type:</span>
                        <span class="value">{project.projectType}</span>
                    </p>
                    <p>
                        <span class="label">License:</span>
                        <span class="value">{project.license}</span>
                    </p>
                    <p>
                        <span class="label">Tags:</span>
                        <span class="value">{project.tags.join(', ')}</span>
                    </p>
                    <div class="badges">
                        {#each project.badges as badge}
                            <div
                                class="badge"
                                style="border-color: {badge.color
                                    ? badge.color
                                    : '#3b3b3b'};"
                            >
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
                    <a href={project.githubUrl} target="_blank"
                        >View on GitHub</a
                    >
                </div>
            {/each}
        </div>
    </section>

    <!-- <section id="blog" class="blog-section">
        <h2>Blog</h2>
        <div class="blog-grid">
            {#each blogs as blog}
                <div class="blog-post">
                    <h3>{blog.title}</h3>
                    <p>{blog.summary}</p>
                    <a href={blog.readMoreUrl} target="_blank">Read More</a>
                </div>
            {/each}
        </div>
    </section> -->

    <section id="contact" class="contact-section">
        <h2>Contact Me</h2>
        <p>Feel free to reach out through any of the platforms below.</p>
        <ul>
            <li>Email: <a href="mailto:hello@evicka.de">hello@evicka.de</a></li>
            <li>
                GitHub: <a
                    href="https://github.com/EvickaStudio"
                    target="_blank">EvickaStudio</a
                >
            </li>
            <li>Discord: evickastudio</li>
        </ul>
    </section>
    <footer style="text-align: center;">
        <p>
            Designed and developed with ❤️ by <a
                href="https://github.com/EvickaStudio"
                target="_blank">EvickaStudio</a
            >
        </p>
    </footer>
</main>

<button on:click={toggleTheme}>
    <button on:click={toggleTheme}>Change Theme</button>
</button>
