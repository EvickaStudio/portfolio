<script>
    import { projects } from './Data.js';
</script>

<main>
    <h1>Portfolio</h1>
    <section id="projects" class="projects-section">
        <h2>My Projects</h2>
        <div class="projects-grid">
            {#each projects as project}
                <div class="project animate-on-scroll">
                    <img src={project.imageUrl} alt={project.name + " Image"}/>
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
</main>