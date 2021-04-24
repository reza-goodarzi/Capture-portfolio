import home1 from '../img/home1.png';
// Styled
import { About, Description, Hide, Image } from '../styles';

//Framer Emotion
import { motion } from 'framer-motion';

const AboutSection = () => {


	const titleAnim = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { duration: 2 } }
	}

	const container = {
		hidden: { x: 100 },
		show: {
			x: 0,
			transition: {
				duration: 1,
				ease: "easeOut",
				staggerChildren: .2,
				// when: 'beforeChildren'
			}
		},
	}

	return (
		<About>
			<Description>
				<motion.div className="title" variants={container} initial="hidden" animate="show">
					<Hide className="hide">
						<motion.h2 variants={titleAnim} >
							We work to make
						</motion.h2>
					</Hide>
					<Hide className="hide">
						<motion.h2 variants={titleAnim} >
							your <span>dream</span> come
						</motion.h2>
					</Hide>
					<Hide className="hide">
						<motion.h2 variants={titleAnim} >
							true
						</motion.h2>
					</Hide>
				</motion.div>
				<p>Contact us for any photography or videography ideas that you have. we have professionals with amazing skills</p>
				<button>Contact us</button>
			</Description>
			<Image className="image">
				<img src={home1} alt="guy whit the camera" />
			</Image>
		</About>
	)
};

export default AboutSection;
