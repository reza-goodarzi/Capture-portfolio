import { motion } from "framer-motion";
import { useState } from "react";

const Toggle = ({ children, title }) => {
	const [toggle, setToggle] = useState(true);
	return (
		<motion.div layout className="question" onClick={() => setToggle(!toggle)}>
			<motion.h4 layout style={{ cursor: 'pointer' }} >
				{title}
			</motion.h4>
			{toggle && children}
			<div className="faq-line"></div>
		</motion.div>
	);
}

export default Toggle;