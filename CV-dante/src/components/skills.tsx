

const skills = ['JavaScript', 'React', 'TailwindCSS', 'Node.js', 'MongoDB'];

const Skills = () => {
    return (
        <section id="skills" className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-yellow-200 text-yellow-900 rounded shadow-md"
                        >
              {skill}
            </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
