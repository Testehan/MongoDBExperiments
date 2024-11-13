import myPicture from '../../public/picture.jpg';

const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                    <img
                        src={myPicture}
                        alt="Dan Testehan"
                        className="rounded-lg w-48 h-48 lg:w-64 lg:h-72 shadow-lg object-cover"
                    />
                </div>

                {/* About Me Text */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-6">About Me</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Hi! I'm [Your Name], a passionate web developer with a focus on creating beautiful, user-friendly, and responsive web applications.
                    </p>
                    <p className="text-lg text-gray-700">
                        I specialize in modern web technologies like React, TailwindCSS, and Node.js. With a strong attention to detail and a love for solving problems, I strive to deliver exceptional digital experiences.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;