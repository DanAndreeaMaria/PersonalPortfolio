import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            name: "Sweet 3 Generation Website",
            description: "Business presentation website for a local cake shop. Designed and developed from scratch, including responsive design, SEO best practices, Google Maps integration and deployment.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/DanAndreeaMaria/CakeShop-landing-page",
            features: [
                "English version",
                "SEO Optimization",
                "Google Maps integration",
                "Responsive design",
                "Hosting & deployment"
            ],
            image: "/projects/sweet3gen.png",
            demo: "https://www.sweet3generation.ro"
        },
        {
            name: "Omnifood Landing Page",
            description: "A responsive and modern webpage designed to showcase a healthy meal delivery service. The website highlights the benefits of the service, features customer testimonials, meal plans and pricing options. It is built using HTML and CSS with a structured layout and mobile-responsive design.",
            tech: ["HTML", "CSS", "Media Queries"],
            github: "https://github.com/DanAndreeaMaria/Omnifood-Responsive",
            features: [
                "Responsive design",
                "Modern layout"
            ],
            image: "/projects/omnifood.png",
            demo: "https://omnifood-andreea.netlify.app/"
        },
        {
            name: "CS50x Final Project",
            description: "Designed to support people who want to build and maintain a healthy lifestyle by keeping track of what they eat and ensuring they include as many essential nutrients as possible in their daily diet.",
            tech: ["HTML", "CSS", "JavaScript", "Python", "SQL", "Flask", "Jinja", "Bootstrap5"],
            github: "https://github.com/DanAndreeaMaria/CS50xFinalProject",
            features: [
                "Full-stack web application",
                "User authentication implemented",
                "Responsive and mobile-friendly design"
            ],
            image: "/projects/CS50x.png"
        },
        {
            name: "CS50W Final Project",
            description: "A full-stack web app enabling users to log and reflect on their feelings. The app analyzes journal entries and offers gentle recommendations to enhance wellbeing. Built using Python, Django, and JavaScript, fully interactive and mobile-friendly.",
            tech: ["HTML", "CSS", "JavaScript", "Python", "SQL", "Django", "Bootstrap5"],
            github: "https://github.com/DanAndreeaMaria/CS50WFinalProject",
            features: [
                "Full-stack web application",
                "User login & profile management",
                "Interactive web app with dynamic pages",
                "CRUD operations implemented"
            ],
            image: "/projects/CS50W.png"
        },
        {
            name: "To-Do App",
            description: "A simple, interactive task management web application built to practice core programming and web development skills learned from the CS50x course. Users can add, edit and delete tasks, keeping their workflow organized in a clean, intuitive interface.",
            tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQLite"],
            github: "https://github.com/DanAndreeaMaria/ToDoApp",
            features: [
                "Full-stack web application",
                "User authentication management",
                "Users can create, mark as done and delete tasks",
                "Tasks saved using a SQLite database"
            ],
            image: "/projects/ToDoApp.png",
            demo: "https://todoapp-2q3d.onrender.com/"
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-900 text-white px-6">
            <motion.div 
                className="max-w-2xl mx-auto text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-12">Projects</h2>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>

                            <img src={project.image} alt={project.name} className="rounded mb-4 w-full"/>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-600 text-white text-xs px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">       
                                {project.features?.map((feat) => (
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li
                                            key={feat}
                                            className="flex items-center gap-2"
                                        >
                                            <span className="text-orange-400">•</span>
                                            {feat}
                                        </li>
                                    </ul>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a 
                                    href={project.github}
                                    className="bg-white text-black px-4 py-2 rounded font-medium hover:opacity-80 transition"
                                    target="_blank"
                                >
                                    GitHub
                                </a>
                                {project.demo && (
                                    <a 
                                        href={project.demo}
                                        className="border border-gray-500 px-4 py-2 rounded hover:bg-gray-700 transition"
                                        target="_blank"
                                    >
                                        Demo
                                    </a>
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Projects;