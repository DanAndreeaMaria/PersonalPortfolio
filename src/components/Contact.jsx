function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-950 text-white px-6">
            <div className="max-w-3xl mx-auto text-center">

                <h2 className="text-3xl font-bold mb-6">
                    Let's Work Together
                </h2>

                <p className="text-gray-400 mb-8">
                    I'm currently looking for opportunities in web development. 
                    Feel free to reach out!
                </p>

                <div className="flex justify-center gap-4 flex-wrap">

                    <a 
                        href="mailto:dan.andreea.maria95@gmail.com"
                        className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
                    >
                        Email Me
                    </a>

                    <a 
                        href="https://github.com/danandreeamaria"
                        target="_blank"
                        className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                    >
                        GitHub
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/andreea-maria-dan/"
                        target="_blank"
                        className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                    >
                        LinkedIn
                    </a>

                </div>
            </div>
        </section>

    );
}

export default Contact;