import { motion } from "framer-motion";

function Certificates() {
    const certificates = [
        {
            title: "Professional Certificate: Computer Science for Web Programming",
            issuer: "Harvard University",
            link: "https://credentials.edx.org/credentials/45b26fa60ad44e628b5627f110260341/",
            image: "/certificates/Professional.png",
            highlight: true,
        }, 
        {
            title: "CS50x: Introduction to Computer Science",
            issuer: "Harvard University",
            link: "https://courses.edx.org/certificates/756765ffad134ae3b45ba4ab18cad5e8",
            image: "/certificates/CS50x.png"
        },
        {
            title: "CS50W: Web Programming with Python and JavaScript",
            issuer: "Harvard University",
            link: "https://courses.edx.org/certificates/44c761214f234fabbc8c2dbd1fd04069",
            image: "/certificates/CS50W.png"
        },    
    ];

    return (
        <section id="certificates" className="py-20 bg-gray-900 text-white px-6">
            <motion.div 
                className="max-w-6xl mx-auto text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-12">Certificates</h2>

                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <a 
                            href={cert.link}
                            key={cert.title}
                            target="_blank"
                            className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl block"
                        >

                        <img src={cert.image} alt={cert.title} className="rounded mb-4" />

                        {cert.highlight && (
                        <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded">
                            Professional Certificate
                        </span>
                        )}

                            <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                            <p className="text-gray-400">{cert.issuer}</p>
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Certificates;