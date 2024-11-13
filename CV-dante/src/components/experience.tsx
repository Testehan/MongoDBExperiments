

const experiences = [
    { company: 'Company A', role: 'Frontend Developer', duration: '2021 - Present' },
    { company: 'Company B', role: 'Web Developer', duration: '2019 - 2021' },
];

const Experience = () => {
    return (
        <section id="experience" className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-6 rounded-lg shadow-md">
                            <div>
                                <h3 className="text-xl font-bold">{exp.role}</h3>
                                <p className="text-gray-700">{exp.company}</p>
                            </div>
                            <span className="text-gray-500">{exp.duration}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
