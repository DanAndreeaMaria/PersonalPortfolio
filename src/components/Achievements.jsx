import { motion } from "framer-motion";

function Achievements() {
    const achievements = [
        {
            icon: "/achievements/Holiday-Hackathon.png",
            title: "Holiday Hackathon 2024 Hacker",
            platform: "Codédex via Accredible",
            link: "https://www.credential.net/8a4b087d-b772-498b-a6dc-687854b021f9#acc.ASVC1P2b"
        },
        {
            icon: "/achievements/Summer-Hackathon.png",
            title: "Summer Hackathon 2024 Hacker",
            platform: "Codédex via Accredible",
            link: "https://www.credential.net/73bd7e07-d729-4445-b439-4be9fe2b922a#acc.Y32dpoDQ"
        },
        {
            icon: "/achievements/HTML.png",
            title: "The Origins I: HTML",
            platform: "Codédex via Accredible",
            link: "https://www.credential.net/c3c3b600-6684-4486-893b-51c46ba680c8#acc.gJneA5S4"
        },
        {
            icon: "/achievements/CSS.png",
            title: "The Origins II: CSS",
            platform: "Codédex via Accredible",
            link: "https://www.credential.net/d3d8c641-aa0c-4a0c-9791-0d1b24d929ac#acc.WI3OPnBc"
        },
        {
            icon: "/achievements/JS.png",
            title: "The Origins III: JavaScript",
            platform: "Codédex via Accredible",
            link: "https://www.credential.net/58ae13d9-b9ff-4526-9389-0bbad601fd09#acc.GBvZxohL"
        },
        {
            icon: "/achievements/Python.png",
            title: "The Legend of Python",
            platform: "Codédex via Accredible",
            link: "https://www.credential.net/50be5836-fce5-4b42-8f6f-a5539bb5bf40#acc.FtWkJBnC"
        },
    ];

    return (
        <section id="achievements" className="py-20 bg-gray-900 text-white px-6">
            <motion.div
                className="max-w-2xl mx-auto text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl text-center font-bold mb-12">Achievements</h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 max-w-4xl mx-auto">
                    
                    {achievements.map(({ icon, title, link }, index) => (
                        <div key={index}>

                            <h3 className="text-xl text-center font-bold mb-2">{title}</h3>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img 
                                    className="object-center w-full h-auto rounded-lg transition transform duration-300 hover:scale-105 hover:shadow-2xl"
                                    src={icon}
                                    alt={title}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Achievements;