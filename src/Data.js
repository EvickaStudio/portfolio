export let projects = [];

fetch('https://cdn.evickastudio.de/static/media/projects.json')
    .then(response => response.json())
    .then(data => {
        projects = data;
    })
    .catch(error => console.error('Error:', error));

export let blogs = [
    {
        title: "Lorem Ipsum",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl",
        readMoreUrl: "https://evickastudio.de",
    },
];

