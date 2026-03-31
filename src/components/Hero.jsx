import { motion } from "framer-motion";

function Hero() {
    return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">
        <div className="max-w-3xl text-center">

            <motion.h1 
                className="text-5xl md:text-6xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Hi, I'm Andreea
            </motion.h1>

            <motion.p 
                className="mt-6 text-lg text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Aspiring Web Developer
            </motion.p>

            <div className="mt-8 flex justify-center gap-4">
                <a 
                    href="#projects"
                    className="bg-white text-black px-6 py-3 rounded-lg font-medium transition hover:scale-105 hover:shadow-xl"
                >
                    View Projects
                </a>

                <a 
                    href="https://github.com/DanAndreeaMaria?tab=repositories"
                    target="_blank"
                    className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    GitHub
                </a>

                <a 
                    href="resume/resume.pdf"
                    download
                    className="bg-white text-black px-6 py-3 rounded-lg font-medium transition hover:scale-105 hover:shadow-xl"
                >
                    Download CV
                </a>

            </div>

        </div>
    </section>
    );
}

export default Hero;