import { useRef, useState } from 'react';
import { toast } from "react-toastify";

import emailjs from '@emailjs/browser';
import Joi from 'joi-browser';


const Contact = () => {
    const form = useRef();

    const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
    const [errors, setErrors] = useState({});

    const schema = {
        user_name: Joi.string().required().label('Your Name'),
        user_email: Joi.string().email({ tlds: { allow: false } }).required().label('Your Email'),
        message: Joi.string().required().label('Message')
    };

    // Handle input changes
    const handleChange = (e : Event) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e : Event) => {
        e.preventDefault();

        // Validate form data
        const { error } = Joi.validate(formData, schema, { abortEarly: false });
        if (error) {
            // Map Joi errors to the errors state
            const errorMessages = {};
            error.details.forEach((item) => {
                errorMessages[item.path[0]] = item.message;
                toast.error(item.message);
            });
            setErrors(errorMessages);
            return;
        }

        emailjs
            .sendForm('service_zarj1ep', 'template_r3tj0qj', form.current, {
                publicKey: 'Nc9IU4enMFiqEX8QI',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    // Reset form fields
                    form.current.reset();
                    setErrors({});
                    toast.info("Email sent with success! Will reply ASAP");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Error: Email was not sent! Try again later.");
                },
            );
    };


    return (
        <section id="contact" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="user_name"
                        className="w-full px-4 py-2 border rounded"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        name="user_email"
                        className="w-full px-4 py-2 border rounded"
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder="Your Message"
                        name="message"
                        className="w-full px-4 py-2 border rounded h-32"
                        onChange={handleChange}>
                    </textarea>

                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
