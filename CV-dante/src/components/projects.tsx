

const projects = [
    { title: 'Portfolio Website', description: 'A responsive personal portfolio.' },
    { title: 'E-commerce App', description: 'An online store with cart functionality.' },
    { title: 'Blog Platform', description: 'A blog with user authentication.' },
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-700">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
