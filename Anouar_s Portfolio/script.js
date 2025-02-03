    // 
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // 
    async function loadProjects() {
        try {
            const response = await fetch('projects.json'); 
            const projects = await response.json();
            const portfolioGrid = document.querySelector('.portfolio-grid');
            portfolioGrid.innerHTML = ""; 

            projects.forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.classList.add("portfolio-item");

                projectCard.innerHTML = `
                    <a href="${project.url}" target="_blank">
                        <img src="${project.image}" alt="${project.name}">
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                    </a>
                `;

                portfolioGrid.appendChild(projectCard);
            });
        } catch (error) {
            console.error("Error loading projects:", error);
        }
    }

    loadProjects();



