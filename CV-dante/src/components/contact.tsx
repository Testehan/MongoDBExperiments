

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                <form className="max-w-xl mx-auto space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border rounded"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border rounded"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full px-4 py-2 border rounded h-32"
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
