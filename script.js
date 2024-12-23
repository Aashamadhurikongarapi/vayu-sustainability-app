// Select the container where the cards will be appended
const container = document.querySelector('#grid-cards .container .row');

// Array of all tasks with their details
const tasks = [
    {
        link: 'cycle.html',
        imgSrc: 'cycling.jpeg',
        imgAlt: 'Cycling',
        title: 'Cycle and Gain',
    },
    {
        link: 'planting.html',
        imgSrc: 'planting.jpeg',
        imgAlt: 'Tree Plantation',
        title: 'Tree Plantation',
    },
    {
        link: 'walking.html',
        imgSrc: 'walking.jpeg',
        imgAlt: 'Walking',
        title: 'Walk and Gain',
    },
    {
        link: 'publictransport.html',
        imgSrc: 'https://ehq-production-canada.imgix.net/projects/images/429a8684d409b70250c2ed5b3208db75edca4ccd/000/004/264/original/public_transit_2.png?auto=compress%2Cformat&w=1080',
        imgAlt: 'Public Transport',
        title: 'Take Public Transport',
    },
    {
        link: 'organic.html',
        imgSrc: 'https://th.bing.com/th/id/OIP.08PznrgFWSMZvXI6OGSYdwHaE8?rs=1&pid=ImgDetMain',
        imgAlt: 'Organic Food',
        title: 'Use Organic Food',
    },
    {
        link: 'lowerpower.html',
        imgSrc: 'lowbill.jpeg',
        imgAlt: 'Low Power Bills',
        title: 'Pay Low Gain High',
    },
    {
        link: 'harvestwater.html',
        imgSrc: 'rainwater.jpeg',
        imgAlt: 'Harvest Water',
        title: 'Harvest Water and Gain',
    },
    {
        link: 'seperatewaste.html',
        imgSrc: 'seperatingwaste.jpeg',
        imgAlt: 'Separate Waste',
        title: 'Separate Waste',
    },
];

// Dynamically generate and append the cards
tasks.forEach(task => {
    const cardHTML = `
        <div class="col">
            <a href="${task.link}">
                <div class="card">
                    <img src="${task.imgSrc}" class="card-img-top" alt="${task.imgAlt}">
                    <div class="card-body">
                        <h3 class="card-title">${task.title}</h3>
                    </div>
                </div>
            </a>
        </div>`;
    container.innerHTML += cardHTML;
});
