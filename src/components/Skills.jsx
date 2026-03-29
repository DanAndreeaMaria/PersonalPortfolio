function Skills() {
    const skills = [
        { name: "HTML", color: "bg-orange-500" },
        { name: "CSS", color: "bg-yellow-500" },
        { name: "Tailwind", color: "bg-green-500" },
        { name: "JavaScript", color: "bg-pink-500" },
        { name: "React", color: "bg-blue-500" },
        { name: "SQL", color: "bg-red-500" },
        { name: "Flask", color: "bg-teal-500" },
        { name: "Django", color: "bg-rose-500" },
        { name: "Python", color: "bg-lime-500" },
        { name: "GitHub", color: "bg-slate-500" },
    ];

    return (
        <section id="skills" className="py-20 bg-gray-950 text-white px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Skills</h2>
            
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className={`flex items-center justify-center h-20 rounded-lg shadow-lg hover:scale-105 transition transform ${skill.color}`}    
                        >
                            <span className="font-semibold text-white">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;