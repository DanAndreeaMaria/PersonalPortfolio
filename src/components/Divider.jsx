import { motion } from "framer-motion";

function Divider() {
    return (
        <motion.div 
            className="w-full"
            style={{ 
                height: "5px", 
                transformOrigin: "center",
                backgroundColor: "oklch(55.4% 0.046 257.417)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
        />
    );
}

export default Divider;